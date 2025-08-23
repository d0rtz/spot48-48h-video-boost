"use client"

import { useMemo } from "react"
import Particles from "@tsparticles/react"

const InteractiveBackground = () => {
  const particlesOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "attract",
          },
        },
        modes: {
          attract: {
            distance: 200,
            duration: 0.4,
            factor: 3,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "hsl(240, 100%, 50%)",
        },
        links: {
          color: "hsl(240, 100%, 50%)",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none" as const,
          enable: true,
          outModes: {
            default: "bounce" as const,
          },
          random: false,
          speed: 0.8,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 30,
        },
        opacity: {
          value: 0.3,
        },
        shape: {
          type: "circle" as const,
        },
        size: {
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    [],
  )

  return (
    <div className="absolute inset-0 z-0">
      <Particles id="tsparticles" options={particlesOptions} className="w-full h-full" />
    </div>
  )
}

export default InteractiveBackground
