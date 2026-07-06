import React, { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'
import './MouseGlow.css'

const MouseGlow = () => {
  const mouseX = useMotionValue(-300)
  const mouseY = useMotionValue(-300)

  const springConfig = { damping: 35, stiffness: 250, mass: 0.6 }
  const glowX = useSpring(mouseX, springConfig)
  const glowY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 150) // center the 300px circle
      mouseY.set(e.clientY - 150)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <motion.div
      className="mouse-glow"
      style={{
        x: glowX,
        y: glowY,
      }}
    />
  )
}

export default MouseGlow
