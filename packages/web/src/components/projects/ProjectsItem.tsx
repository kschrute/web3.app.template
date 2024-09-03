import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import type { ProjectGQL } from '../../types/graphql'

type Props = {
  project: ProjectGQL
}

export default function ProjectsItem({ project }: Props) {
  return (
    <Box p={5}>
      <Text>
        {project.id} — {project.title}
      </Text>
    </Box>
  )
}
