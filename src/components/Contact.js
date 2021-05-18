import React, { useState } from 'react'
import { IconButton, Text, VStack, Wrap, WrapItem } from '@chakra-ui/react'
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import Resume from '../resources/MichaelLeResume_External.pdf'

function Contact() {
  const [size, setSize] = useState(70)
  const [size2, setSize2] = useState(70)
  const [size3, setSize3] = useState(70)
  const [size4, setSize4] = useState(70)

  return (
    <Wrap
      px="10%"
      py="3rem"
      spacing="3rem"
      margin="2em"
      justify="center"
      overflow="hidden"
    >
      <WrapItem>
        <VStack>
          <Text fontSize="2xl" fontWeight="bold">
            Github
          </Text>
          <IconButton
            pb={size}
            onClick={() => window.open('https://github.com/LeMichael88')}
            variant="unstyled"
            icon={<FaGithub size={size} />}
            onMouseEnter={() => setSize(90)}
            onMouseLeave={() => setSize(70)}
          />
        </VStack>
      </WrapItem>
      <WrapItem>
        <VStack>
          <Text fontSize="2xl" fontWeight="bold">
            LinkedIn
          </Text>
          <IconButton
            pb={size2}
            onClick={() => window.open('https://www.linkedin.com/in/lemichael88/')}
            size="lg"
            variant="unstyled"
            icon={<FaLinkedin size={size2} />}
            onMouseEnter={() => setSize2(90)}
            onMouseLeave={() => setSize2(70)}
          />
        </VStack>
      </WrapItem>
      <WrapItem>
        <VStack>
          <Text fontSize="2xl" fontWeight="bold">
            Resume
          </Text>
          <IconButton
            pb={size3}
            onClick={() => window.open(Resume)}
            size="lg"
            variant="unstyled"
            icon={<FaFileAlt size={size3} />}
            onMouseEnter={() => setSize3(90)}
            onMouseLeave={() => setSize3(70)}
          />
        </VStack>
      </WrapItem>
      <WrapItem>
        <VStack>
          <Text fontSize="2xl" fontWeight="bold">
            Email
          </Text>
          <IconButton
            pb={size4}
            onClick={() => window.open('mailto:m42le@uwaterloo.ca')}
            size="lg"
            variant="unstyled"
            icon={<HiMail size={size4} />}
            onMouseEnter={() => setSize4(90)}
            onMouseLeave={() => setSize4(70)}
          />
        </VStack>
      </WrapItem>
    </Wrap>
  )
}

export default Contact
