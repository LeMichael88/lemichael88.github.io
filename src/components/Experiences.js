import React from 'react'
import { Box, Center, Flex, Grid, Heading, VStack } from '@chakra-ui/react'
import ExperienceCard from './ExperienceCard'
import Newtopia from '../resources/images/Newtopia.png'
import Manulife from '../resources/images/Manulife.png'
import Applyboard from '../resources/images/Applyboard.png'
import Riot from '../resources/images/RiotGames.jpg'
import Huawei from '../resources/images/Huawei.jpg'

const experienceList = [
  {
    company: 'Riot Games',
    location: 'Los Angeles, California',
    role: 'Software Engineer Intern',
    time: 'May 2023 - Aug 2023',
    description: [
      'Developed an enhanced pathfinding system in League of Legends using HavokAI, reducing search times by up to 33%.',
      'Refactored core game and engine code in C++ to support WASD controls for the League of Legends game mode, Swarm.',
      'Built in-game debugging tools using ImGUI to visualize pathfinding and movement data, aiding development efficiency.',
      'Shipped bug fixes for in-game UI and character spells via Perforce, improving the experience for millions of players.',
    ],
    image: Riot,
    link: 'https://www.riotgames.com',
  },
  {
    company: 'Huawei',
    location: 'Markham, Ontario',
    role: 'Compiler Software Engineer Intern',
    time: 'Jan 2023 - Apr 2023',
    description: [
      'Wrote SYCL kernels for operators such as fused multiheaded attention with zero padding, using NVIDIA’s Cutlass library, manual synchronization of shared memory, and vector algebra to reduce execution time by 75%.',
      'Implemented double buffering to minimize delay between reading and writing data, increasing kernel speed by 10%.',
      'Researched and tested AI/ML operators to profile and improve Huawei’s BiSheng C++ abstractions.',
    ],
    image: Huawei,
    link: 'https://www.huawei.com',
  },
  {
    company: 'Riot Games',
    location: 'Los Angeles, California',
    role: 'Software Engineer Intern',
    time: 'May 2022 - Aug 2022',
    description: [
      'Engineered a multi-team rate-limiting solution using Go, capable of handling over 100,000 API requests per minute.',
      'Spearheaded the project by authoring system architecture design documents and planning tasks in advance using Jira.',
      'Utilized Redis as a distributed cache with replica nodes, enhancing efficiency and eliminating downtime if a node fails.',
      'Created Jenkins multibranch pipelines to automatically test, lint, build, and deploy changes on push.',
    ],
    image: Riot,
    link: 'https://www.riotgames.com',
  },
  {
    company: 'Applyboard',
    location: 'Waterloo, Ontario',
    role: 'Software Engineer Intern',
    time: 'Sep 2021 - Dec 2021',
    description: [
      'Built backend services with Ruby on Rails and MySQL for precise searching/filtering through thousands of programs.',
      'Secured APIs with a permission system to prevent unauthorized users from accessing the database using Pundit.',
      'Actively built and deployed code to production using CI/CD tools like Docker, Jenkins, AWS CodeBuild.',
    ],
    image: Applyboard,
    link: 'https://www.applyboard.com',
  },
  {
    company: 'Newtopia Inc.',
    location: 'Toronto, Ontario',
    role: 'Software Developer Intern',
    time: 'Jan 2021 - Apr 2021',
    description: [
      'Created new API endpoints with improved security protocols using JWT validation, protecting 10,000+ monthly users.',
      'Refactored React Native android application into TypeScript and simutaneously reduced memory usage by 25%.',
      'Managed application and user state with Redux to handle asynchronous data fetching.',
      'Implemented support for assistive technologies to meet WCAG accessibility requirements.',
    ],
    image: Newtopia,
    link: 'https://www.newtopia.com',
  },
  {
    company: 'Manulife',
    location: 'Waterloo, Ontario',
    role: 'Salesforce Software Engineer Intern',
    time: 'May 2020 - Aug 2020',
    description: [
      'Created a data aggregation framework using Apex and SOQL, that helps diagnose over 33% of service issues.',
      'Used HTML and JavaScript to display 6,000+ logs daily on a custom web app featuring tables, graphs, and filters.',
      'Successfully handles 6000 + logs every day in real time with no impact on server performance',
    ],
    image: Manulife,
    link: 'https://www.manulife.ca',
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
