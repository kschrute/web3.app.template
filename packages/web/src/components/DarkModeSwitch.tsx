import { Box, BoxProps, IconButton, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const DarkModeSwitch = (props: BoxProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <Box {...props}>
      <IconButton icon={isDark ? <SunIcon /> : <MoonIcon />} aria-label="Toggle Theme" variant="ghost" onClick={toggleColorMode} />
    </Box>
  )
}
