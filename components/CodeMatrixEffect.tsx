'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CodeChar {
  id: number
  char: string
  x: number
  y: number
  opacity: number
  speed: number
}

export function CodeMatrixEffect() {
  const [chars, setChars] = useState<CodeChar[]>([])
  
  const codeChars = ['0', '1', '{', '}', '<', '>', '/', '*', '=', '+', '-', '(', ')', '[', ']', ';', ':', '"', "'", 'a', 'b', 'c', 'd', 'e', 'f']

  useEffect(() => {
    const generateChars = () => {
      const newChars: CodeChar[] = []
      for (let i = 0; i < 30; i++) {
        newChars.push({
          id: i,
          char: codeChars[Math.floor(Math.random() * codeChars.length)],
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: Math.random() * 0.3 + 0.1,
          speed: Math.random() * 2 + 0.5
        })
      }
      setChars(newChars)
    }

    generateChars()

    const interval = setInterval(() => {
      setChars(prev => prev.map(char => ({
        ...char,
        y: char.y + char.speed,
        char: Math.random() > 0.98 ? codeChars[Math.floor(Math.random() * codeChars.length)] : char.char,
        opacity: Math.random() > 0.95 ? Math.random() * 0.3 + 0.1 : char.opacity,
        ...(char.y > window.innerHeight && {
          y: -20,
          x: Math.random() * window.innerWidth
        })
      })))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {chars.map((char) => (
        <motion.div
          key={char.id}
          className="absolute text-primary/20 font-mono text-sm"
          style={{
            left: char.x,
            top: char.y,
            opacity: char.opacity
          }}
          animate={{
            opacity: [char.opacity, char.opacity * 1.5, char.opacity]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {char.char}
        </motion.div>
      ))}
    </div>
  )
}
