import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link, type LinkProps } from '@chakra-ui/react'
import React, { type ReactNode } from 'react'

type Props = {
  href: string
  nowrap?: boolean
  showIcon?: boolean
  children?: ReactNode
} & LinkProps

export default function AppExternalLink({ children, href, nowrap = false, showIcon = false, ...rest }: Props) {
  return (
    <Link href={href} whiteSpace={nowrap ? 'nowrap' : 'normal'} isExternal {...rest}>
      {children}
      {children ? ' ' : null}
      {showIcon ? <ExternalLinkIcon /> : null}
    </Link>
  )
}
