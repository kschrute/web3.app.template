import { Flex, Spinner } from '@chakra-ui/react'
import React from 'react'

export const LoadingMoreItems = () => (
  <Flex my={5} justifyContent="center">
    <Spinner />
  </Flex>
)
