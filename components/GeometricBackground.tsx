'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Shape {
  id: number
  x: number
  y: number
  size: number
  rotation: number
  type: 'circle' | 'square' | 'triangle'
  color: string
  speed: number
}

export function GeometricBackground() {
  const [shapes, setShapes] = useState<Shape[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const shapeTypes: Shape['type'][] = ['circle', 'square', 'triangle']
    const colors = ['primary', 'secondary', 'accent']
    const newShapes: Shape[] = []

    for (let i = 0; i < 15; i++) {
      newShapes.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 100 + 50,
        rotation: Math.random() * 360,
        type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.5 + 0.1
      })
    }

    setShapes(newShapes)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const renderShape = (shape: Shape) => {
    const distance = Math.sqrt(
      Math.pow(mousePos.x - shape.x, 2) + Math.pow(mousePos.y - shape.y, 2)
    )
    const scale = Math.max(0.5, 1 - distance / 500)

    const baseClasses = `absolute transition-all duration-1000 ease-out opacity-10 hover:opacity-20`
    
    switch (shape.type) {
      case 'circle':
        return (
          <motion.div
            key={shape.id}
            className={`${baseClasses} rounded-full bg-${shape.color}`}
            style={{
              left: shape.x,
              top: shape.y,
              width: shape.size * scale,
              height: shape.size * scale,
              transform: `translate(-50%, -50%) rotate(${shape.rotation}deg)`
            }}
            animate={{
              rotate: shape.rotation + 360,
              scale: [scale, scale * 1.1, scale]
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        )
      case 'square':
        return (
          <motion.div
            key={shape.id}
            className={`${baseClasses} bg-${shape.color}`}
            style={{
              left: shape.x,
              top: shape.y,
              width: shape.size * scale,
              height: shape.size * scale,
              transform: `translate(-50%, -50%) rotate(${shape.rotation}deg)`
            }}
            animate={{
              rotate: shape.rotation + 360,
              scale: [scale, scale * 1.1, scale]
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        )
      case 'triangle':
        return (
          <motion.div
            key={shape.id}
            className={`${baseClasses} bg-${shape.color}`}
            style={{
              left: shape.x,
              top: shape.y,
              width: shape.size * scale,
              height: shape.size * scale,
              transform: `translate(-50%, -50%) rotate(${shape.rotation}deg)`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
            }}
            animate={{
              rotate: shape.rotation + 360,
              scale: [scale, scale * 1.1, scale]
            }}
            transition={{
              rotate: { duration: 30, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        )
    }
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/50 to-background" />
      
      {shapes.map(renderShape)}
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,background_70%)]" />
    </div>
  )
}
