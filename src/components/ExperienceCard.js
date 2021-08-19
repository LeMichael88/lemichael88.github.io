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
  const { company, location, role, time, description, image } = data
  return (
    <Wrap justify="center" pt="2.5rem">
      <WrapItem>
        <VStack spacing="0.5" fontSize="md">
          <Image maxBlockSize="100px" src={image} />
          <Text fontWeight="bold">{company}</Text>
          <Text>{location}</Text>
          <Text>{time}</Text>
          <Text>{role}</Text>
        </VStack>
      </WrapItem>
      <WrapItem>
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
