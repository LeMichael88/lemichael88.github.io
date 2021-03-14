import React from 'react'
import { Wrap, WrapItem, Button } from '@chakra-ui/react'

export default function Header() {
  return (
    <Wrap spacing="2.5em" margin="3em" justify="center" overflow="hidden">
      <WrapItem>
        <Button colorScheme="red" size="header" variant="ghost">
          About
        </Button>
      </WrapItem>
      <WrapItem>
        <Button colorScheme="red" size="header" variant="ghost">
          Contact
        </Button>
      </WrapItem>
      <WrapItem>
        <Button colorScheme="red" size="header" variant="ghost">
          Experiences
        </Button>
      </WrapItem>
      <WrapItem>
        <Button colorScheme="red" size="header" variant="ghost">
          Projects
        </Button>
      </WrapItem>
    </Wrap>
  )
}
