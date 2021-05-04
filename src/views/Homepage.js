import React from 'react'
import {
  Box,
  Center,
  Heading,
  Stack,
  VStack,
  Image,
  HStack,
  Text,
} from '@chakra-ui/react'
import ProfileImage from '../resources/images/MyPicture.JPG'
import Particles from '../components/Particles'
import Header from '../components/Header'
import Contact from '../components/Contact'

export default function Homepage() {
  return (
    <Box>
      <Particles />
      <Header />

      {/* Top Section */}
      <Center padding="10em">
        <VStack>
          <Heading size="2xl">Hello! I&apos;m Michael.</Heading>
          <Heading size="lg">Welcome to my website</Heading>
        </VStack>
      </Center>

      {/* About Section */}
      <Center px="20%">
        <HStack>
          <Image
            pr="5%"
            htmlWidth="318"
            htmlHeight="358.5"
            borderRadius="full"
            src={ProfileImage}
          />
          <Stack>
            <Text fontSize="lg">
              Hi! My name is Michael Le and I&apos;m currently in my second year of
              computer science at the University of Waterloo. I&apos;m a software
              developer looking to learn as much as I can. I enjoy working cool projects
              and solving programming problems too!
            </Text>
            <Text fontSize="lg">
              I&apos;m based in Toronto, Canada and in my free time, I like to cook, bike,
              and play basketball. Feel free to contact me or take a look at my resume
              below!
            </Text>
          </Stack>
        </HStack>
      </Center>

      {/* Contact Boxes */}
      <Contact />
    </Box>
  )
}
