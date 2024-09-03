import React from 'react'
import type { ProjectsQuery } from '../../graphql/client'
import ProjectsItem from './ProjectsItem'

type Props = {
  projects: ProjectsQuery['projects']['edges']
}

export default function ProjectsList({ projects }: Props) {
  return <>{projects.map((edge) => edge && <ProjectsItem key={edge.node.id} project={edge.node} />)}</>
}
