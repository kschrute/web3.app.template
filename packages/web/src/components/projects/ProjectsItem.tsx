import React from 'react'
import { ProjectGQL } from '../../types/graphql'
import { Box, Text } from '@chakra-ui/react'

type Props = {
  project: ProjectGQL
}

export default function ProjectsItem({ project }: Props) {
  return (
    <Box p={5}>
      <Text>{project.id} — {project.title}</Text>
    </Box>
  )
}
