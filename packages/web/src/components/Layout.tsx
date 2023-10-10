import React, { ReactNode } from 'react'
import { Box, Container } from '@chakra-ui/react'
import Header from './Header'
import LoginModal from './modals/LoginModal'

type Props = {
  children?: ReactNode
}

export default function Layout ({ children }: Props) {

  return (
    <Box>
      <Header />

      <Container maxW="container.lg" px={[5, 5, 10]}>
        {children}
      </Container>

      <LoginModal />
    </Box>
  )
}
