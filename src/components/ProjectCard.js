import React from 'react'
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  ListItem,
  UnorderedList,
  useColorMode,
} from '@chakra-ui/react'

export default function ProjectCard({ data }) {
  return (
    <Flex w="full" p="1rem" alignItems="center" justifyContent="center">
      <Box w="xl" alignItems="center" h="100%" mx="auto" shadow="lg" rounded="lg" overflow="hidden">
        <Image
          w="full"
          h={56}
          fit="cover"
          objectPosition="center"
          src={data.image}
          alt="avatar"
        />

        <Flex alignItems="center" px={4} py={3} bg="gray.900" justify="center">
          <Heading mx={3} color="white" fontWeight="bold" fontSize="2xl">
            {data.name}
          </Heading>
        </Flex>

        <Flex direction="column" bg="gray.800" py={4} px={6} h="100%">
          <Text py={2} color="white">
            {data.description}
          </Text>

          <UnorderedList pl="2rem">
            {data.text.map((text) => (
              <ListItem key={text} color="white" wordBreak="break-word">
                {text}
              </ListItem>
            ))}
          </UnorderedList>

          <Flex justifyContent="space-between" mt={6}>
            <Text fontStyle="italic" color="white" fontSize="sm" w="60%" mr={2}>
              {data.stack}
            </Text>
            {data?.blog ? (
              <Button
                colorScheme="red"
                fontWeight="bold"
                rounded="lg"
                mr={1}
                onClick={() => window.open(data.blog)}
              >
                Blog
              </Button>
            ) : null}
            {data.devpost ? (
              <Button
                colorScheme="red"
                fontWeight="bold"
                rounded="lg"
                mr={1}
                onClick={() => window.open(data.devpost)}
              >
                Devpost
              </Button>
            ) : null}
            <Button
              colorScheme="red"
              fontWeight="bold"
              rounded="lg"
              onClick={() => window.open(data.github)}
            >
              Github
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  )
}
