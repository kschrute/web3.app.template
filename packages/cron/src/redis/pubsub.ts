import Redis, { Cluster } from 'ioredis'
import config from '../../config'

let redisSubscriber: Redis | Cluster | null = null
let redisPublisher: Redis | Cluster | null = null

export const subscriber = (): Redis | Cluster => {
  if (!redisSubscriber) {
    redisSubscriber = new Redis(config.redis.pubsub.port, config.redis.pubsub.host)

    redisSubscriber.on('error', (error: Error) => console.error(`Error : ${error}`))
  }

  return redisSubscriber
}

export const publisher = (): Redis | Cluster => {
  if (!redisPublisher) {
    redisPublisher = new Redis(config.redis.pubsub.port, config.redis.pubsub.host)

    redisPublisher.on('error', (error: Error) => console.error(`Error : ${error}`))
  }

  return redisPublisher
}
