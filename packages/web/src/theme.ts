import { theme as defaultTheme, extendTheme } from '@chakra-ui/react'
// import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'

export const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  /*
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', `#000C18 url('/images/background.png') repeat fixed`)(props),
      },
    }),
  },
*/
  fonts: {
    heading: `Montserrat, "Maven Pro", ${defaultTheme.fonts.heading}`,
    body: `Montserrat, "Maven Pro", ${defaultTheme.fonts.body}`,
    mono: defaultTheme.fonts.mono,
  },
  colors: {
    background: {
      50: '#72AAE9',
      100: '#448DE2',
      200: '#2072CF',
      300: '#1958A0',
      400: '#123E71',
      500: '#0A2340',
      600: '#09203A',
      700: '#081B32',
      800: '#061729',
      900: '#051221',
    },
    blue: {
      50: '#9CC7EF',
      100: '#7BB4EA',
      200: '#5BA2E4',
      300: '#3A8FDF',
      400: '#227CD0',
      500: '#1C68AE',
      600: '#195B9A',
      700: '#154E84',
      800: '#12416E',
      900: '#0E3458',
    },
    pink: {
      50: '#FDB9D2',
      100: '#FCA1C2',
      200: '#FB8AB3',
      300: '#FB72A4',
      400: '#FA5B95',
      500: '#F94186',
      600: '#F81D6D',
      700: '#E60759',
      800: '#C0064A',
      900: '#99053B',
    },
    yellow: {
      50: '#FEEBA8',
      100: '#FDE58B',
      200: '#FDDE6F',
      300: '#FCD752',
      400: '#FCD135',
      500: '#FCCA17',
      600: '#EDBB04',
      700: '#CBA003',
      800: '#AA8503',
      900: '#886B02',
    },
    green: {
      50: '#90FFE5',
      100: '#6BFFDC',
      200: '#46FFD4',
      300: '#21FFCB',
      400: '#00FBC1',
      500: '#00D4A3',
      600: '#00BB90',
      700: '#00A17B',
      800: '#008667',
      900: '#006B52',
    },
    green2: {
      50: '#CEF2A9',
      100: '#BEED8C',
      200: '#AEE970',
      300: '#9EE453',
      400: '#8EE036',
      500: '#7ED321',
      600: '#6EB91D',
      700: '#5E9F19',
      800: '#4E8415',
      900: '#3F6A11',
    },
  },
})
