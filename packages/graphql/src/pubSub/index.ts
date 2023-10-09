import { createPubSub } from 'graphql-yoga'
import { pubSub as pubSubRedis } from '@app/cron'
import { createRedisEventTarget } from '@graphql-yoga/redis-event-target'

export * from './user'
export * from './random'

let redisPubSub: ReturnType<typeof createPubSub>

export const pubSub = () => {
  if (!redisPubSub) {
    const publishClient = pubSubRedis.publisher()
    const subscribeClient = pubSubRedis.subscriber()

    const eventTarget = createRedisEventTarget({
      publishClient,
      subscribeClient,
    })

    redisPubSub = createPubSub({ eventTarget })
  }

  return redisPubSub
}
