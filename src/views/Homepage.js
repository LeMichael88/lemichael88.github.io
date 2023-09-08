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
import ProfileImage from '../resources/images/ProfilePicture.png'
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
          <Heading size="3xl">Hey there! I&apos;m Michael.</Heading>
          <Heading size="xl">Nice to meet you!</Heading>
        </VStack>
      </Center>

      {/* About Section */}
      <HStack ref={AboutRef} mx="20%">
        <Wrap justify="center">
          <WrapItem>
            <Image
              mb="3rem"
              htmlWidth="400"
              htmlHeight="400"
              borderRadius="full"
              src={ProfileImage}
            />
          </WrapItem>
          <WrapItem pb="1.5rem">
            <Flex textAlign="center">
              <Text fontSize="lg">
                Hey! My name is <b>Michael Le</b> and I&apos;m in my final year 
                of computer science at the <b>University of Waterloo</b>. I&apos;m a software 
                engineer primarily interested in <b>game development and computer graphics</b>! 
                I&apos;ve had a diverse set of experiences, ranging from gameplay engineering at 
                Riot Games, to compiler and AI research at Huawei, to fullstack web development 
                at several other internships. I&apos;m always trying to learn something new by reading 
                CS books or research papers. When I&apos;m not coding, I like to play soccer, 
                hit new PRs at the gym, and play all kinds of video games!
              </Text>
            </Flex>
          </WrapItem>
          <WrapItem>
            <Flex textAlign="center">
              <Text fontSize="lg">
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
