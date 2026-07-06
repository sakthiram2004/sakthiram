import { useMotionValue, useTransform, useSpring } from 'motion/react'

export function use3DTilt() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Spring animations for ultra smooth transitions
  const springX = useSpring(x, { damping: 25, stiffness: 150 })
  const springY = useSpring(y, { damping: 25, stiffness: 150 })

  // Maps normalized coordinate (-0.5 to 0.5) to a subtle rotation (-10 to 10 degrees)
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    
    // Calculate cursor position relative to the center of the element
    const mouseX = e.clientX - rect.left - width / 2
    const mouseY = e.clientY - rect.top - height / 2

    // Set normalized values
    x.set(mouseX / width)
    y.set(mouseY / height)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return {
    style: {
      rotateX,
      rotateY,
      transformStyle: 'preserve-3d',
    },
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  }
}
