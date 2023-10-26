import React from 'react'
import { Flex } from '@chakra-ui/react'
import { FiMoreHorizontal } from 'react-icons/fi'

export const HasMoreItems = () => (
  <Flex my={5} justifyContent="center">
    <FiMoreHorizontal />
  </Flex>
)
