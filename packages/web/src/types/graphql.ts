import type { ProjectsQuery } from '../graphql/client'
import type { ExtractNullable } from './index'

export type ProjectGQL = ExtractNullable<ProjectsQuery['projects']['edges']>[0]['node']
