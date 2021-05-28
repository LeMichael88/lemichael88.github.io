import React from 'react'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import SpatialDJ from '../resources/images/spatialdj.png'
import CrowdData from '../resources/images/crowddata.jpg'
import CompGG from '../resources/images/compgg.jpg'
import HootGuard from '../resources/images/HootGuard.jpg'

const projects = [
  {
    name: 'Spatial.DJ',
    image: SpatialDJ,
    description:
      'A web app that allows you to listen to music with friends! Features chat, playlists, and proximity audio.',
    text: [
      'Designed UI prototype using Figma and implemented responsive layouts using React.js',
      'Created Socket.IO events in Express.js to allow real time communication between users.',
    ],
    stack: 'Express.js, Node.js, React.js, Redis, Socket.IO',
    devpost: null,
    github: 'https://github.com/spatialdj',
  },
  {
    name: 'crowd.data',
    image: CrowdData,
    description:
      'A crowdsourcing platform where you can request data or contribute your own data sets.',
    text: [
      'Integrated DropBase API to instantly upload user files to database from Node.js backend.',
      'Designed website components with React to handle form data and file upload.',
      "Featured in DropBase's blog post below!",
    ],
    stack: 'Express.js, Node.js, CockroachDB, DropBase API, React.js',
    blog:
      'https://www.dropbase.io/post/hack-the-north-spotlights-dropstats-crowd-data-hive-vacalert',
    devpost: 'https://devpost.com/software/crowd-space',
    github: 'https://github.com/LeMichael88/crowd.data',
  },
  {
    name: 'comp.gg',
    image: CompGG,
    description:
      "A League of Legends team composition selector based on each player's best champions and desired composition style.",
    text: [
      'Utilized Riot Games API to fetch each players champion mastery and played games to calculate their most proficient champions',
      'Built REST API endpoints with Node.js and Express.js to communicate with third party APIs and send data to client side efficiently.',
    ],
    stack: 'Express.js, Node.js, Riot API, React.js',
    devpost: 'https://devpost.com/software/placeholder-q891tr',
    github: 'https://github.com/LeMichael88/comp.gg',
  },
  {
    name: 'HootGuard',
    image: HootGuard,
    description:
      "An android app built using Firebase's Machine Learning kit that can help drowsy and distracted drivers stay focused on the road.",
    text: [
      'Produced an android application with Java and XML that detects a driver’s face and predicts whether they are drowsy/distracted, successfully tested on 10+ users.',
      'Utilized the Machine Learning kit from Google’s Firebase API to track facial features in real time.',
    ],
    stack: 'Java, XML, Firebase API, Android Studio',
    devpost: 'https://devpost.com/software/hootguard-xghezv',
    github: 'https://github.com/LeMichael88/HootGuard',
  },
]

export default function ProjectGrid() {
  return (
    <Box>
      <Heading textAlign="center" pt="4rem" pb="2rem">
        Projects
      </Heading>
      <SimpleGrid minChildWidth="350px" spacing={10}>
        {projects.map((project) => (
          <ProjectCard key={projects.name} data={project} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
