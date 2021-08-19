import React from 'react'
import { Box, Center, Flex, Grid, Heading, VStack } from '@chakra-ui/react'
import ExperienceCard from './ExperienceCard'
import Newtopia from '../resources/images/Newtopia.png'
import Manulife from '../resources/images/Manulife.png'
import Applyboard from '../resources/images/Applyboard.png'

const experienceList = [
  {
    company: 'Applyboard',
    location: 'Waterloo, ON',
    role: 'Software Engineer',
    time: 'Sept 2021 - Dec 2021',
    description: [
      'Incoming software engineer working on backend services used by thousands of students each day',
    ],
    image: Applyboard,
  },
  {
    company: 'Newtopia Inc.',
    location: 'Toronto, ON',
    role: 'Software Developer',
    time: 'Jan 2021 - Apr 2021',
    description: [
      'Created new public API endpoints in Apex with improved security protecting 10000 monthly users',
      'Refactored React Native android application with TypeScript and reduced memory usage by 25%',
      'Managed application and user state with Redux to handle asynchronous data fetching',
      'Implemented support for assistive technologies to meet WCAG accessibility requirements',
    ],
    image: Newtopia,
  },
  {
    company: 'Manulife',
    location: 'Waterloo, ON',
    role: 'Salesforce Engineer',
    time: 'May 2020 - Aug 2020',
    description: [
      'Developed a data aggregation framework using Apex and SOQL that helps diagnose over 33% of performance issues reported in Manulife’s services',
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
