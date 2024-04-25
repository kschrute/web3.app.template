import { JobUnique } from './JobUnique'
import db, { Event, Project } from '@app/graphql'

export interface JobBatchData {
  cursor?: string
  counter?: number
  take?: number
}

export enum PrismaEntity {
  event = 'event',
  project = 'project',
}

type PrismaModel = Event | Project

export abstract class JobBatch<Model extends PrismaModel, JobData extends JobBatchData> extends JobUnique<
  JobData & JobBatchData
> {
  protected entity: PrismaEntity = PrismaEntity.event

  protected orderBy: any = { id: 'asc' }

  constructor(public data: JobData = {} as JobData) {
    super(data)
  }

  protected fetchBatch = async (cb: (results: Model[]) => any) => {
    const { cursor, counter = 0, take = 100 } = this.data

    console.log(`Getting a batch of ${this.entity} starting with cursor [${cursor}] processed [${counter}]`)

    // @ts-ignore
    const results = await db[this.entity].findMany({
      take,
      ...(cursor
        ? {
            skip: 1,
            cursor: {
              id: cursor,
            },
          }
        : {}),
      orderBy: this.orderBy,
    })

    await cb(results)

    const nextCursor = results.length > 0 ? results[results.length - 1].id : undefined

    if (nextCursor) {
      console.log(`Scheduling next batch of ${this.entity} starting with cursor ${nextCursor}`)
      // @ts-ignore
      await new this.constructor({
        take,
        cursor: nextCursor,
        counter: counter + results.length,
      }).schedule()
    }
  }
}
