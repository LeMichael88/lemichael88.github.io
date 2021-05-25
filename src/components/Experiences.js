import React from 'react'
import { Box, Center, Flex, Grid, Heading, VStack } from '@chakra-ui/react'
import ExperienceCard from './ExperienceCard'
import Newtopia from '../resources/images/Newtopia.png'
import Manulife from '../resources/images/Manulife.png'

const experienceList = [
  {
    company: 'Newtopia Inc.',
    location: 'Toronto, ON',
    role: 'Software Developer',
    time: 'Jan 2021 - Apr 2021',
    description: [
      'Refactored React Native android application with TypeScript and reduced memory usage by 25%',
      'Implemented support for assistive technologies to meet WCAG accessibility requirements',
      'Created new public API endpoints in Apex with improved security protecting 10000 monthly users',
    ],
    image: Newtopia,
  },
  {
    company: 'Manulife',
    location: 'Waterloo, ON',
    role: 'Salesforce Engineer',
    time: 'May 2020 - Aug 2020',
    description: [
      'Developed a reliability monitoring framework using Apex and SOQL that helps debug over 33% of reported issues in Manulife’s services',
      'Used HTML and JavaScript to develop a web application for the framework, which visualizes the logged data in tables and graphs',
      'Successfully handles 6000 + logs every day in real time with no impact on server performance',
    ],
    image: Manulife,
  },
]

function Experiences() {
  return (
    <Box mx="5%">
      <Heading textAlign="center" pb="2.5rem">
        Experiences
      </Heading>
      <Center>
        <Grid justifyItems="center">
          {experienceList.map((experience) => (
            <ExperienceCard data={experience} key={experience.company} />
          ))}
        </Grid>
      </Center>
    </Box>
  )
}

export default Experiences
