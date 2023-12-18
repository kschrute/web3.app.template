import { resolve } from 'path'
import { printSchema } from 'graphql'
import { writeFileSync } from 'fs'
import { builder } from '../builder'
import './models'
import './projects'
import './requests'
import './subscription'
import './types'
import './user'

export const schema = builder.toSchema({})

writeFileSync(resolve(__dirname, '../../schema.graphql'), printSchema(schema))
