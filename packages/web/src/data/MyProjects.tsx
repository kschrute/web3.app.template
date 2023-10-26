import React, { useEffect, useMemo, useState } from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import { useProjectsQuery } from '../graphql/client'
import ProjectsList from '../components/projects/ProjectsList'
import { HasMoreItems } from '../components/loading/HasMoreItems'
import { LoadingMoreItems } from '../components/loading/LoadingMoreItems'
import useScrolledToEnd from '../hooks/useScrolledToEnd'
import useThrottle from '../hooks/useThrottle'

const variables = {
  take: 10,
}

export default function MyProjects() {
  const isAtEnd = useScrolledToEnd()
  const [loadingMore, setLoadingMore] = useState(false)
  const { data, loading, fetchMore } = useProjectsQuery({ variables })

  const projects = useMemo(() => data?.projects?.edges, [data])
  const pageInfo = useMemo(() => data?.projects.pageInfo, [data])
  const hasNextPage = useMemo(() => data?.projects.pageInfo?.hasNextPage, [data])
  const endCursor = useMemo(() => data?.projects.pageInfo?.endCursor, [data])

  const onLoadMore = useThrottle(async () => {
    if (!pageInfo || !hasNextPage || loadingMore) return

    setLoadingMore(true)
    await fetchMore({
      variables: {
        ...variables,
        cursor: endCursor,
      },
    })
    setLoadingMore(false)
  }, 500, [setLoadingMore, fetchMore, hasNextPage, loadingMore, endCursor])

  useEffect(() => {
    isAtEnd && onLoadMore()
  }, [isAtEnd, onLoadMore])

  return (
    <Box>
      <Heading>My Projects</Heading>
      {loading && <Text>Loading...</Text>}
      {projects && !projects.length && <Text>No Projects</Text>}
      {projects && projects.length > 0 && <ProjectsList projects={projects} />}
      {hasNextPage && !loadingMore && <HasMoreItems />}
      {loadingMore && <LoadingMoreItems />}
    </Box>
  )
}
