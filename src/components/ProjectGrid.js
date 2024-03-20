import React from 'react'
import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
import RayTracer from '../resources/images/raytracer.png'
import SpatialDJ from '../resources/images/spatialdj.png'
import CrowdData from '../resources/images/crowddata.jpg'
import Constructor from '../resources/images/constructor.png'
import CompGG from '../resources/images/compgg.jpg'
import HootGuard from '../resources/images/HootGuard.jpg'
import Tachometer from '../resources/images/Tachometer.png'

const projects = [
  {
    name: 'C++ Ray Tracing Framework',
    image: RayTracer,
    description:
      'A custom ray tracing framework capable of rendering modelled scenes and is easily extensible.',
    text: [
      'Created a custom ray tracer featuring sphere/box/mesh intersection, Phong illumination, anti-aliasing, reflection, hierarchical modelling, and transformations.',
      'Accelerated rendering time by 85% using multithreading and bounding volumes around meshes.',
    ],
    stack: 'C++',
    devpost: null,
    github: null,
  },
  {
    name: 'Spatial.DJ',
    image: SpatialDJ,
    description:
      'A web app that allows you to listen to music with friends! Features chat, playlists, and proximity audio.',
    text: [
      'Silver prize winner (top 20 overall project) at Build on Redis 2021 Hackathon (see blog post below!)',
      'Designed UI prototype using Figma and implemented responsive layouts using React.js',
      'Created Socket.IO events in Express.js to allow real time communication between users.',
    ],
    stack: 'Express.js, Node.js, React.js, Redis, Socket.IO',
    blog: 'https://redislabs.com/blog/build-on-redis-hackathon-winners/',
    devpost: null,
    github: 'https://github.com/spatialdj',
  },
  {
    name: 'crowd.data',
    image: CrowdData,
    description:
      'A crowdsourcing platform where you can request data or contribute your own data sets.',
    text: [
      'Placed top 4 out of over 30 submissions for the Dropbase API prize at Hack the North 2020++',
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
    name: 'Constructor',
    image: Constructor,
    description:
      'A CLI based board game',
    text: [
      'Engineered a C++ game based on Catan that can be played entirely on the command line.',
      'Designed code base using OOP principles and design patterns such as Observer pattern.',
      'Debugged various issues using GDB to ensure a high quality final product.',
    ],
    stack: 'C++',
    github: 'https://github.com/LeMichael88/constructor',
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
  {
    name: 'Magnetic Field Tachometer',
    image: Tachometer,
    description:
      'A tachometer using Arduinos that detects the speed of nearby rotating magnetic fields',
    text: [
      'Implemented a C++ program to control motors and sensors, and calculate rotations per minute with an accuracy of ±0.05 RPM',
    ],
    stack: 'C++, Arduino',
    devpost: null,
    github: 'https://github.com/LeMichael88/MagneticFieldTachometer',
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
