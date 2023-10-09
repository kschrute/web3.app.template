import React, { ReactNode } from 'react'
import { Link, LinkProps } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

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
