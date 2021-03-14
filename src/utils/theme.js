import { extendTheme } from '@chakra-ui/react'

const config = {
  useSystemColorMode: true,
  initialColorMode: 'dark',
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

const theme = extendTheme({ config, colors })

export default theme
