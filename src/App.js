import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/theme'
import Header from './components/Header'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
    </ChakraProvider>
  )
}

export default App
