import { builder } from '../builder'
import './models'
import './projects'
import './requests'
import './subscription'
import './types'
import './user'
import { writeFileSync } from 'fs'
import { resolve } from 'path'
import { printSchema } from 'graphql'

export const schema = builder.toSchema({})

writeFileSync(resolve(__dirname, '../../schema.graphql'), printSchema(schema))
