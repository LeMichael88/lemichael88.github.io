import React from 'react'
import { useColorMode } from '@chakra-ui/react'
import { Particles as ParticlesJS } from 'react-particles-js'

export default function Particles() {
  const { colorMode } = useColorMode()
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
      }}
    >
      <ParticlesJS
        style={{
          width: '100%',
          height: '100%',
          position: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
        }}
        params={{
          particles: {
            number: {
              value: 150,
              density: {
                enable: false,
              },
            },
            color: {
              value: colorMode === 'light' ? '#000000' : '#ffffff',
            },
            size: {
              value: 4,
              random: true,
              anim: {
                speed: 5,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              repulse: {
                distance: 350,
                duration: 2,
              },
            },
          },
        }}
      />
    </div>
  )
}
