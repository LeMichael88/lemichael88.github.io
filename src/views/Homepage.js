import React, { useRef } from 'react'
import {
  Box,
  Button,
  Center,
  Heading,
  Flex,
  VStack,
  Image,
  HStack,
  Wrap,
  WrapItem,
  Text,
} from '@chakra-ui/react'
import ProfileImage from '../resources/images/MyPicture.JPG'
import Particles from '../components/Particles'
import Header from '../components/Header'
import Contact from '../components/Contact'
import Experiences from '../components/Experiences'
import ProjectGrid from '../components/ProjectGrid'
import Footer from '../components/Footer'

export default function Homepage() {
  const AboutRef = useRef({})
  const ContactRef = useRef({})
  const ExpRef = useRef({})
  const ProjRef = useRef({})

  const AboutScroll = () => AboutRef.current.scrollIntoView({ behavior: 'smooth' })
  const ContactScroll = () => ContactRef.current.scrollIntoView({ behavior: 'smooth' })
  const ExpScroll = () => ExpRef.current.scrollIntoView({ behavior: 'smooth' })
  const ProjScroll = () => ProjRef.current.scrollIntoView({ behavior: 'smooth' })
  const scrolls = [AboutScroll, ContactScroll, ExpScroll, ProjScroll]

  return (
    <Box>
      <Particles />
      <Header callbacks={scrolls} />

      {/* Top Section */}
      <Center py="7rem" px="10em">
        <VStack textAlign="center">
          <Heading size="2xl">Hello! I&apos;m Michael.</Heading>
          <Heading size="lg">Welcome to my website</Heading>
        </VStack>
      </Center>

      {/* About Section */}
      <HStack ref={AboutRef} mx="20%">
        <Wrap justify="center">
          <WrapItem>
            <Image
              mb="3rem"
              htmlWidth="318"
              htmlHeight="358.5"
              borderRadius="full"
              src={ProfileImage}
            />
          </WrapItem>
          <WrapItem>
            <Flex textAlign="center">
              <Text fontSize="lg">
                Hi! My name is <b>Michael Le</b> and I&apos;m currently in my second year
                of computer science at the <b>University of Waterloo</b>. I&apos;m a
                software developer looking to learn as much as I can. I enjoy working cool
                projects and solving programming problems too! I&apos;m based in Toronto,
                Canada and in my free time, I like to cook, bike, and play basketball.
                Feel free to contact me or take a look at my resume below!
              </Text>
            </Flex>
          </WrapItem>
        </Wrap>
      </HStack>

      {/* Contact Section */}
      <Box ref={ContactRef}>
        <Contact />
      </Box>

      {/* Experiences Section */}
      <Box ref={ExpRef}>
        <Experiences />
      </Box>

      {/* Projects Section */}
      <Box ref={ProjRef}>
        <ProjectGrid />
      </Box>

      {/* Footer Section */}
      <Footer />
    </Box>
  )
}
