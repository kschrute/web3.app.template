import React, { useCallback, useMemo, useState } from 'react'
import { useProjectsQuery } from '../graphql/client'
import ProjectsList from '../components/projects/ProjectsList'
import { Heading, Text } from '@chakra-ui/react'
import { useHasReachedBottom } from '../hooks/useHasReachedBottom'
import { HasMoreItems } from '../components/loading/HasMoreItems'
import { LoadingMoreItems } from '../components/loading/LoadingMoreItems'

const variables = {
  take: 10,
}

export default function MyProjects() {
  const [loadingMore, setLoadingMore] = useState(false)
  const { data, loading, startPolling, stopPolling, fetchMore, refetch } = useProjectsQuery({ variables })

  const projects = useMemo(() => data?.projects?.edges, [data])
  const pageInfo = useMemo(() => data?.projects.pageInfo, [data])
  const hasNextPage = useMemo(() => data?.projects.pageInfo?.hasNextPage, [data])
  const endCursor = useMemo(() => data?.projects.pageInfo?.endCursor, [data])

  const onLoadMore = useCallback(async () => {
    if (!pageInfo || !hasNextPage || loadingMore) return

    setLoadingMore(true)
    await fetchMore({
      variables: {
        ...variables,
        cursor: endCursor,
      },
    })
    setLoadingMore(false)
  }, [setLoadingMore, fetchMore, hasNextPage, loadingMore, endCursor])

  useHasReachedBottom(!!projects, onLoadMore)

  return (
    <>
      <Heading>My Projects</Heading>
      {loading && <Text>Loading...</Text>}
      {projects && !projects.length && <Text>No Projects</Text>}
      {projects && projects.length > 0 && <ProjectsList projects={projects} />}
      {hasNextPage && !loadingMore && <HasMoreItems />}
      {loadingMore && <LoadingMoreItems />}
    </>
  )
}
