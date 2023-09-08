import React from 'react'
import {
  Flex,
  Image,
  Text,
  UnorderedList,
  ListItem,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'

export default function ExperienceCard({ data }) {
  const { company, location, role, time, description, image, link } = data
  return (
    <Wrap justify="center" pt="2.5rem" w="95%">
      <WrapItem alignItems="center" justifyContent="center" w="35%">
        <VStack spacing="0.5" fontSize="md" justifyContent="center">
          <Image maxBlockSize="100px" src={image} onClick={() => window.open(link)} cursor="pointer"/>
          <Text fontWeight="bold" align="center">{company}</Text>
          <Text align="center">{location}</Text>
          <Text align="center">{time}</Text>
          <Text align="center">{role}</Text>
        </VStack>
      </WrapItem>
      <WrapItem w="55%">
        <Flex alignItems="left">
          <UnorderedList pl="2rem" maxW="350px">
            {description.map((text) => (
              <ListItem key={text[0]} wordBreak="break-word">
                {text}
              </ListItem>
            ))}
          </UnorderedList>
        </Flex>
      </WrapItem>
    </Wrap>
  )
}
