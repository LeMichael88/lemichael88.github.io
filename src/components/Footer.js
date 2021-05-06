import React from 'react'
import { Box, Center, Text, VStack } from '@chakra-ui/react'

function Footer() {
  return (
    <Box w="100%" py="2rem">
      <Center>
        <VStack>
          <Text fontSize="lg" fontWeight="bold">
            Michael Le
          </Text>
          <Text fontSize="lg" fontWeight="bold">
            Updated 05/04/2021
          </Text>
        </VStack>
      </Center>
    </Box>
  )
}

export default Footer
