import React from 'react'
import ProjectsItem from './ProjectsItem'
import { ProjectsQuery } from '../../graphql/client'

type Props = {
  projects: ProjectsQuery['projects']['edges']
}

export default function ProjectsList({ projects }: Props) {
  return (
    <>
      {projects.map((edge) => (
        edge && <ProjectsItem key={edge.node.id} project={edge.node} />
      ))}
    </>
  )
}
