import React, { ReactNode } from 'react'
import { Link, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'

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
