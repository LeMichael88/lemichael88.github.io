import React from 'react'
import { Box, Center, Heading, VStack } from '@chakra-ui/react'
// import BackgroundImage from '../resources/images/pattern.png'
import Particles from '../components/Particles'
import Header from '../components/Header'

export default function Homepage() {
  return (
    <Box>
      <Particles />
      <Header />
      <Center padding="10em">
        <VStack>
          <Heading size="xl">Hello! I&apos;m Michael.</Heading>
          <Heading size="md">Welcome to my website</Heading>
        </VStack>
      </Center>
    </Box>
  )
}
