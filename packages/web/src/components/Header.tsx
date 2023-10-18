'use client'

import { Box, Flex, FlexProps, Text, Link } from '@chakra-ui/react'
import { DarkModeSwitch } from './DarkModeSwitch'
import { Wallet } from '../web3/Wallet'
import { MenuItems } from './MenuItems'
import NextLink from 'next/link'
import { useState } from 'react'
import { MenuToggle } from './MenuToggle'

export default function Header(props: FlexProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Box as="header" className="header" {...props}>
      <Flex as="nav" align="center" wrap="wrap" w="100%" p={5}>
        <MenuToggle toggle={toggle} isOpen={isOpen} />

        <Flex flex={1} fontWeight="bold">
          <NextLink href="/">APP</NextLink>
        </Flex>

        <MenuItems mx={5} isOpen={isOpen}>
          <NextLink href="/">APP</NextLink>
          <Link href="https://example.com" isExternal>
            FAQ
          </Link>
        </MenuItems>

        <Flex flex={1} align="center" justifyContent="flex-end">
          <Wallet />
          <DarkModeSwitch ml={5} />
        </Flex>
      </Flex>
    </Box>
  )
}
