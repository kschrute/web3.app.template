import { Box, BoxProps, Link, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const DarkModeSwitch = (props: BoxProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Box {...props}>
      <Link onClick={toggleColorMode}>
        {isDark ? <SunIcon /> : <MoonIcon />}
      </Link>
    </Box>
  )
}
