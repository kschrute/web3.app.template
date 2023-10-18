import React from 'react'
import ProjectsItem from './ProjectsItem'
import { ProjectsQuery } from '../../graphql/client'

type Props = {
  projects: ProjectsQuery['projects']['edges']
}

export default function ProjectsList({ projects }: Props) {
  return (
    <>
      {projects.map((edge, index) => (
        edge && <ProjectsItem key={edge.cursor} project={edge.node} />
      ))}
    </>
  )
}
