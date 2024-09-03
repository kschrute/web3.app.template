import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
import React from 'react'

type Props = {
  toggle: () => void
  isOpen: boolean
}

export const MenuToggle = ({ toggle, isOpen }: Props) => (
  <Box display={{ base: 'block', md: 'none' }} cursor="pointer" px={4} ml={-5} onClick={toggle}>
    {isOpen ? <CloseIcon /> : <HamburgerIcon />}
  </Box>
)
