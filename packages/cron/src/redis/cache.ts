import { createClient } from 'redis'
import config from '../../config'

let redisClient: ReturnType<typeof createClient>

export const client = () => {
  if (!redisClient) {
    redisClient = createClient({
      socket: {
        host: config.redis.cache.host,
        port: config.redis.cache.port,
      },
    })

    redisClient.on('error', (error: Error) => console.error(`Redis Client Error: ${error}`))

    redisClient.connect()
  }

  return redisClient
}

export const flush = () => client().sendCommand(['FLUSHALL'])

export const increment = (key: string): Promise<number> => client().incr(key)

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

export const getCachedValue = async (key: string, resolver: () => Promise<any>, encode = true, expSeconds?: number) => {
  try {
    let value
    value = await get(key)

    if (value === null) {
      value = await resolver()
      await set(key, value, encode, expSeconds)
    }

    return value
  } catch (e) {
    console.log(e)
  }

  return null
}
