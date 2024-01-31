import { PrismaClient } from '../../prisma/client'
import config from '../../config'
export * as EventRepo from './EventRepo'
export * as UserRepo from './UserRepo'

// const clientOptions =
//   process.env.NODE_ENV !== 'production' ? { log: ['info', 'query', 'warn', 'error'] } : { log: ['error'] }
// export const db = new PrismaClient(clientOptions as Prisma.PrismaClientOptions)

let prisma

if (process.env.NODE_ENV === 'development') {
  prisma = new PrismaClient({
    log: [
      {
        emit: 'event',
        level: 'query',
      },
      {
        emit: 'stdout',
        level: 'error',
      },
      {
        emit: 'stdout',
        level: 'info',
      },
      {
        emit: 'stdout',
        level: 'warn',
      },
    ]
  })
  prisma.$on('query', (e) => {
    if (config.dev?.db.slowQueryThreshold !== undefined && e.duration >= config.dev?.db.slowQueryThreshold) {
      const params = JSON.parse(e.params)
      // console.log(e)
      console.log(`-- 🐢 ${e.duration}ms ------------------------------------------------------------------------------------------`)
      console.log(`PREPARE q FROM '${e.query}';`)
      params.map((param: any, i: any) => console.log(`SET @p${i} = ${JSON.stringify(param)};`))
      console.log(`EXECUTE q USING ${params.reduce((acc: string, _: any, i: number) => `${acc}@p${i},`, '').slice(0, -1)};`)
      console.log('------------------------------------------------------------------------------------------------------')
    }
  })
} else {
  prisma = new PrismaClient({ log: ['error'] })
}

export const db = prisma as PrismaClient
