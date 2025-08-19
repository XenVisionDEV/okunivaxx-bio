import { motion } from 'framer-motion'

export function GeometricBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient mesh */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(var(--secondary) / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, hsl(var(--accent) / 0.1) 0%, transparent 50%)
          `
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating geometric shapes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5
          }}
        >
          {i % 3 === 0 ? (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full" />
          ) : i % 3 === 1 ? (
            <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-accent/20 rotate-45" />
          ) : (
            <div className="w-full h-full border-2 border-primary/20 rounded-full" />
          )}
        </motion.div>
      ))}

      {/* Grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}