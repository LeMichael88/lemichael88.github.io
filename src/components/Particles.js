import React, { useCallback } from 'react'
import { loadFull } from 'tsparticles';
import { useColorMode } from '@chakra-ui/react'
import { Particles as ParticlesJS } from 'react-tsparticles'

export default function Particles() {
  const { colorMode } = useColorMode()

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <ParticlesJS
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 175,
              duration: 25,
            },
          },
        },
        particles: {
          color: {
            value: colorMode === 'light' ? '#000000' : '#FF5C79',
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 500,
            },
            value: 35,
          },
          opacity: {
            value: 0.25,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 3, max: 8 },
          },
        },
      }}
    />
  )
}
