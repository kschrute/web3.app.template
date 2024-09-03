import { Link, type LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import React, { type ReactNode } from 'react'

type Props = {
  href: string
  children?: ReactNode
} & LinkProps

export default function AppLink({ children, href, ...rest }: Props) {
  return (
    <NextLink href={href}>
      <Link as="span" {...rest}>
        {children}
      </Link>
    </NextLink>
  )
}
