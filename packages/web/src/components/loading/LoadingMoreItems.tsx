import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

export const LoadingMoreItems = () => {
  return (
    <Flex my={5} justifyContent="center">
      <Spinner />
    </Flex>
  )
}
