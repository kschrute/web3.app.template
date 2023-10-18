import { ExtractNullable } from './index'
import { ProjectsQuery } from '../graphql/client'

export type ProjectGQL = ExtractNullable<ProjectsQuery['projects']['edges']>[0]['node']
