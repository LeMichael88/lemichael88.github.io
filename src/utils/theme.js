import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
}

const styles = {
  global: (props) => ({
    body: {
      bg: mode('gray.100', '#141214')(props),
    },
  }),
}

const colors = {
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
  red: {
    50: '#FFE5EA',
    100: '#FFB8C5',
    200: '#FF8A9F',
    300: '#FF5C79',
    400: '#FF2E54',
    500: '#FF002E',
    600: '#CC0025',
    700: '#99001C',
    800: '#660013',
    900: '#330009',
  },
}

const components = {
  Button: {
    sizes: {
      header: {
        fontSize: '3xl',
        padding: '0.5em 1em',
      },
    },
  },
}

const theme = extendTheme({ config, styles, colors, components })

export default theme
