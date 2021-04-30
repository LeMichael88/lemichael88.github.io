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
            <Text fontSize="md">
              Hi! My name is Michael Le and I&apos;m currently in my second year of
              computer science at the University of Waterloo. I&apos;m a software
              developer looking to learn as much as I can. I enjoy working cool projects
              and solving programming problems too!
            </Text>
            <Text fontSize="md">
              I&apos;m based in Toronto, Canada and in my free time, I like to cook, bike,
              and play basketball. Feel free to contact me or take a look at my resume
              below!
            </Text>
          </Stack>
        </HStack>
      </Center>

      {/* Contact Boxes */}
      <Center pt="5em">
        <HStack spacing="4em">
          <Box w="40px" h="40px" bg="yellow.200">
            1
          </Box>
          <Box w="40px" h="40px" bg="tomato">
            2
          </Box>
          <Box w="40px" h="40px" bg="pink.100">
            3
          </Box>
        </HStack>
      </Center>
    </Box>
  )
}
