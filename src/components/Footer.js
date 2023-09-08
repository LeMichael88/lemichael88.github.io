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
            Updated Sep 8, 2023
          </Text>
        </VStack>
      </Center>
    </Box>
  )
}

export default Footer
