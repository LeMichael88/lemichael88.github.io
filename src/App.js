import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from './utils/theme'
import Homepage from './views/Homepage'
import './App.css'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Homepage />
    </ChakraProvider>
  )
}

export default App
