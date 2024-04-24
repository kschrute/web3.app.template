import { createClient } from 'redis'
import config from './config'

type Promisified<T extends (...args: any[]) => any> = (...args: Parameters<T>) => Promise<ReturnType<T>>;

let redisClient: ReturnType<typeof createClient>

export const client = () => {
  if (!redisClient) {
    redisClient = createClient({
      socket: {
        host: config.cache.host,
        port: config.cache.port,
      },
    })

    redisClient.on('error', (error: Error) => console.error(`Redis Client Error: ${error}`))

    redisClient.connect()
  }

  return redisClient
}

export const flush = () => client().sendCommand(['FLUSHALL'])

export const increment = (key: string): Promise<number> => client().incr(key)

export const incrementBy = (key: string, increment: number): Promise<number> => client().incrBy(key, increment)

export const close = () => client().disconnect()

export const get = async (key: string, decode = true) => {
  const res = await client().get(key)
  return res && decode ? JSON.parse(res) : res
}

export const set = async (key: string, value: any, encode = true, expSeconds?: number) => {
  return await client().set(key, encode ? JSON.stringify(value) : value, {
    EX: expSeconds,
  })
}

export const getCachedValue = async <T>(key: string, resolver: Promisified<() => T>, encode = true, expSeconds?: number): Promise<ReturnType<typeof resolver> | undefined> => {
  try {
    let value
    value = await get(key)

    if (value === null) {
      value = await resolver()
      await set(key, value, encode, expSeconds)
    }

    return value
  } catch (e) {
    console.log(`[cache] Error getting value for key: ${key}`)
    console.log(e)
  }

  return undefined
}

export const incrementCachedValue = async (
  key: string,
  increment: number,
  resolver: () => Promise<number>,
): Promise<number> => {
  if (await client().exists(key)) {
    return Number(client().incrByFloat(key, increment))
  } else {
    const value = await resolver()
    return Number(client().incrByFloat(key, value + increment))
  }
}
