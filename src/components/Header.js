import React from 'react'
import { Center, HStack } from '@chakra-ui/react'

export default function Header() {
  return (
    <Center>
      <HStack spacing={24}>
        <p>About</p>
        <p>Contact</p>
        <p>Projects</p>
        <p>Experience</p>
      </HStack>
    </Center>
  )
}
