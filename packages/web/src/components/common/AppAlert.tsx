import React, { JSX, ReactNode } from 'react'
import { Alert, AlertDescription, AlertIcon, AlertProps, AlertStatus, AlertTitle, Box } from '@chakra-ui/react'

type Props = {
  title?: string
  description?: string | JSX.Element
  status?: AlertStatus
  button?: JSX.Element | null
  showIcon?: boolean
  children?: ReactNode
} & AlertProps

export default function AppAlert({
  title,
  description,
  button,
  status = 'warning',
  showIcon = true,
  children,
  ...rest
}: Props) {
  return (
    <Alert my={5} rounded={5} variant="subtle" status={status} {...rest}>
      {showIcon && <AlertIcon />}
      <Box flex={1}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {description && <AlertDescription>{description}</AlertDescription>}
      </Box>
      {button}
      {children}
    </Alert>
  )
}
