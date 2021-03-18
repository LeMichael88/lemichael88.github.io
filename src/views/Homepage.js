import React from 'react'
import { Box, Center, Heading } from '@chakra-ui/react'
import BackgroundImage from '../resources/images/pattern.png'
import Header from '../components/Header'

export default function Homepage() {
  return (
    <Box>
      <Header />
      <Box bgImage={`url(${BackgroundImage})`}>
        <Center padding="10em">
          <Heading size="xl">Hello! I&apos;m Michael</Heading>
        </Center>
      </Box>
    </Box>
  )
}
