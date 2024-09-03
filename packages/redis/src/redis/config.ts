import 'dotenv/config'

export default {
  cache: {
    host: process.env.REDIS_CACHE_HOST || 'localhost',
    port: process.env.REDIS_CACHE_PORT ? Number(process.env.REDIS_CACHE_PORT) : 6379,
  },
  pubsub: {
    host: process.env.REDIS_PUBSUB_HOST || 'localhost',
    port: process.env.REDIS_PUBSUB_PORT ? Number(process.env.REDIS_PUBSUB_PORT) : 6379,
  },
}
