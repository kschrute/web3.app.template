import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

type Props = {
  data: Record<string, unknown>
} & BoxProps

export const Debug = ({ data, ...rest }: Props) => (
  <Box {...rest}>
    <pre style={{ lineHeight: 1, whiteSpace: 'pre-wrap' }}>
      <small>{JSON.stringify(data, null, 2)}</small>
    </pre>
  </Box>
)
