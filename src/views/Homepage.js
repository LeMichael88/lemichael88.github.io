import React from 'react'
import { Box, Center, Heading, VStack, Image, HStack, Text } from '@chakra-ui/react'
import ProfileImage from '../resources/images/MyPicture.JPG'
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
      <Center px="20%">
        <HStack>
          <Image
            pr="5%"
            htmlWidth="318"
            htmlHeight="358.5"
            borderRadius="full"
            src={ProfileImage}
          />
          <Text>
            Hi! My name is Michael Le. I&apos;m currently in my second year of computer
            science at the University of Waterloo.
          </Text>
        </HStack>
      </Center>
    </Box>
  )
}
