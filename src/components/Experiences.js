import React from 'react'
import { Box, Center, Flex, Grid, Heading, VStack } from '@chakra-ui/react'
import ExperienceCard from './ExperienceCard'
import Newtopia from '../resources/images/Newtopia.png'
import Manulife from '../resources/images/Manulife.png'
import Applyboard from '../resources/images/Applyboard.png'
import Riot from '../resources/images/RiotGames.jpg'

const experienceList = [
  {
    company: 'Riot Games',
    location: 'Los Angeles, California',
    role: 'Software Engineer Intern',
    time: 'May 2022 - Aug 2022',
    description: [
      'Engineered a company-wide rate limiting solution using Go, handling over 100k API requests/min',
      'Spearheaded the project by writing system architecture documents and planning tasks with Jira',
      'Utilized Redis as a distributed cache to store users’ rate limiting information and allowlists',
      'Created Jenkins multibranch pipelines to automatically test, lint, build, and deploy changes on push',
    ],
    image: Riot,
  },
  {
    company: 'Applyboard',
    location: 'Waterloo, ON',
    role: 'Software Engineer Intern',
    time: 'Sept 2021 - Dec 2021',
    description: [
      'Built backend services with Ruby on Rails and MySQL, helping users search for data more accurately',
      'Secured APIs with a permission system using Pundit, protecting database from unauthorized users',
      'Actively built and deployed code to production using CI/CD tools like Docker, Jenkins, AWS CodeBuild',
    ],
    image: Applyboard,
  },
  {
    company: 'Newtopia Inc.',
    location: 'Toronto, ON',
    role: 'Software Developer Intern',
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
    role: 'Software Engineer Intern',
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
