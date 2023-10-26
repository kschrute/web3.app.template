import React from 'react'
import { Flex, Spinner } from '@chakra-ui/react'

export const LoadingMoreItems = () => (
  <Flex my={5} justifyContent="center">
    <Spinner />
  </Flex>
)
