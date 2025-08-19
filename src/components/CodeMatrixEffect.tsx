import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function CodeMatrixEffect() {
  const [isMatrixMode, setIsMatrixMode] = useState(false)
  const [codeLines, setCodeLines] = useState<string[]>([])

  const codeSnippets = [
    'const magic = () => {};',
    'function createArt() {',
    '  return beauty;',
    '}',
    'while(dreaming) {',
    '  code();',
    '}',
    '// Easter egg found!',
    'if (curious) {',
    '  explore();',
    '}',
    'class Developer {',
    '  constructor() {',
    '    this.passion = true;',
    '  }',
    '}',
    'const portfolio = new Project();'
  ]

  useEffect(() => {
    // Listen for matrix mode activation
    const handleMatrixMode = () => {
      setIsMatrixMode(true)
      document.body.classList.add('matrix-mode')
      
      setTimeout(() => {
        setIsMatrixMode(false)
        document.body.classList.remove('matrix-mode')
      }, 5000)
    }

    // Custom event listener for easter eggs
    window.addEventListener('matrixMode', handleMatrixMode)
    
    return () => {
      window.removeEventListener('matrixMode', handleMatrixMode)
    }
  }, [])

useEffect(() => {
  if (isMatrixMode) {
    const interval = setInterval(() => {
      setCodeLines(prev => {
        const newLines = [...prev];
        if (newLines.length > 15) {
          newLines.shift();
        }

        const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        if (snippet) {
          newLines.push(snippet);
        }

        return newLines;
      });
    }, 100);

    return () => clearInterval(interval);
  } else {
    setCodeLines([]);
  }
}, [isMatrixMode]);

if (!isMatrixMode) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {/* Matrix rain effect */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-400 font-mono text-xs opacity-70 code-rain"
          style={{
            left: `${i * 5}%`,
            top: '-100px'
          }}
          animate={{
            y: ['0vh', '100vh']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "linear"
          }}
        >
          {codeSnippets[Math.floor(Math.random() * codeSnippets.length)]}
        </motion.div>
      ))}

      {/* Central code display */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 max-w-md border border-green-400/50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
        >
          <div className="font-mono text-green-400 text-sm space-y-1">
            {codeLines.slice(-8).map((line, i) => (
              <motion.div
                key={i}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="whitespace-pre-wrap"
              >
                {line}
              </motion.div>
            ))}
            <motion.div
              className="text-green-300 mt-4 text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              MATRIX MODE ACTIVATED
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}