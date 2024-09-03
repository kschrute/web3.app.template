import { Box, type BoxProps, Stack } from '@chakra-ui/react'
import React, { type ReactNode } from 'react'

type Props = {
  isOpen: boolean
  children: ReactNode[]
} & BoxProps

export const MenuItems = ({ children, isOpen, ...rest }: Props) => (
  <Box
    fontSize="sm"
    fontWeight="bold"
    textTransform="uppercase"
    display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
    flexBasis={{ base: '100%', md: 'auto' }}
    order={[99, 99, 0, 0]}
    {...rest}
  >
    <Stack spacing={5} direction={['column', 'column', 'row', 'row']} pt={[5, 5, 0, 0]}>
      {children}
    </Stack>
  </Box>
)
