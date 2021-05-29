import React from 'react'
import { Wrap, WrapItem, Button, useColorMode, Switch, HStack } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function Header({ callbacks }) {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>
      <HStack spacing="0.5em" margin="2em" justify="right">
        <SunIcon w={5} h={5} />
        <Switch defaultChecked colorScheme="red" size="lg" onChange={toggleColorMode} />
        <MoonIcon w={5} h={5} />
      </HStack>
      <Wrap spacing="2.5em" margin="2em" justify="center" overflow="hidden">
        <WrapItem>
          <Button
            onClick={callbacks[0]}
            colorScheme="red"
            size="header"
            variant={colorMode === 'light' ? 'outline' : 'ghost'}
          >
            About
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            onClick={callbacks[1]}
            colorScheme="red"
            size="header"
            variant={colorMode === 'light' ? 'outline' : 'ghost'}
          >
            Contact
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            onClick={callbacks[2]}
            colorScheme="red"
            size="header"
            variant={colorMode === 'light' ? 'outline' : 'ghost'}
          >
            Experiences
          </Button>
        </WrapItem>
        <WrapItem>
          <Button
            onClick={callbacks[3]}
            colorScheme="red"
            size="header"
            variant={colorMode === 'light' ? 'outline' : 'ghost'}
          >
            Projects
          </Button>
        </WrapItem>
      </Wrap>
    </div>
  )
}
