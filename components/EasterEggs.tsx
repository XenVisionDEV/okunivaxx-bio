'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function EasterEggs() {
  const [konamiSequence, setKonamiSequence] = useState<string[]>([])
  const [isMatrixMode, setIsMatrixMode] = useState(false)
  const [isDeveloperMode, setIsDeveloperMode] = useState(false)
  const [showSecretMessage, setShowSecretMessage] = useState(false)

  // Konami Code: ↑↑↓↓←→←→BA
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                      'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA']

  useEffect(() => {
    // Консольные пасхалки при загрузке
    console.clear()
    console.log('%c🚀 Добро пожаловать в портфолио!', 'color: #6366f1; font-size: 20px; font-weight: bold;')
    console.log('%c      ___           ___           ___     ', 'color: #6366f1; font-family: monospace;')
    console.log('%c     /\\  \\         /\\  \\         /\\  \\    ', 'color: #6366f1; font-family: monospace;')
    console.log('%c    /::\\  \\       /::\\  \\       /::\\  \\   ', 'color: #6366f1; font-family: monospace;')
    console.log('%c   /:/\\:\\  \\     /:/\\:\\  \\     /:/\\:\\  \\  ', 'color: #6366f1; font-family: monospace;')
    console.log('%c  /:/  \\:\\__\\   /::\\~\\:\\  \\   /::\\~\\:\\  \\ ', 'color: #6366f1; font-family: monospace;')
    console.log('%c /:/__/ \\:|__| /:/\\:\\ \\:\\__\\ /:/\\:\\ \\:\\__\\', 'color: #6366f1; font-family: monospace;')
    console.log('%c \\:\\  \\ /:/  / \\:\\~\\:\\ \\/__/ \\/__\\:\\/:/  /', 'color: #6366f1; font-family: monospace;')
    console.log('%c  \\:\\  /:/  /   \\:\\ \\:\\__\\        \\::/  / ', 'color: #6366f1; font-family: monospace;')
    console.log('%c   \\:\\/:/  /     \\:\\ \\/__/        /:/  /  ', 'color: #6366f1; font-family: monospace;')
    console.log('%c    \\::/__/       \\:\\__\\         /:/  /   ', 'color: #6366f1; font-family: monospace;')
    console.log('%c     ~~            \\/__/         \\/__/    ', 'color: #6366f1; font-family: monospace;')
    console.log('')
    console.log('%c💡 Совет: Попробуйте ввести Konami Code ↑↑↓↓←→←→BA', 'color: #10b981; font-size: 14px;')
    console.log('%c🎮 Или нажмите Ctrl+Shift+D для режима разработчика', 'color: #f59e0b; font-size: 14px;')
    console.log('%c🎯 Кликните 5 раз по аватару для сюрприза!', 'color: #ef4444; font-size: 14px;')

    const handleKeyPress = (event: KeyboardEvent) => {
      // Konami Code обработка
      const newSequence = [...konamiSequence, event.code].slice(-konamiCode.length)
      setKonamiSequence(newSequence)

      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        activateMatrixMode()
        setKonamiSequence([])
      }

      // Ctrl+Shift+D для режима разработчика
      if (event.ctrlKey && event.shiftKey && event.code === 'KeyD') {
        event.preventDefault()
        toggleDeveloperMode()
      }

      // Escape для выхода из всех режимов
      if (event.code === 'Escape') {
        setIsMatrixMode(false)
        setIsDeveloperMode(false)
        document.body.classList.remove('matrix-mode', 'developer-mode')
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [konamiSequence])

  const activateMatrixMode = () => {
    setIsMatrixMode(true)
    document.body.classList.add('matrix-mode')
    console.log('%c🕶️ MATRIX MODE ACTIVATED', 'color: #00ff00; font-size: 16px; font-weight: bold; background: black; padding: 5px;')
    
    setTimeout(() => {
      setIsMatrixMode(false)
      document.body.classList.remove('matrix-mode')
    }, 10000)
  }

  const toggleDeveloperMode = () => {
    setIsDeveloperMode(!isDeveloperMode)
    if (!isDeveloperMode) {
      document.body.classList.add('developer-mode')
      console.log('%c👨‍💻 DEVELOPER MODE ON', 'color: #6366f1; font-size: 16px; font-weight: bold;')
      setShowSecretMessage(true)
      setTimeout(() => setShowSecretMessage(false), 3000)
    } else {
      document.body.classList.remove('developer-mode')
      console.log('%c👨‍💻 DEVELOPER MODE OFF', 'color: #64748b; font-size: 16px;')
    }
  }

  return (
    <>
      {/* Уведомление о Matrix Mode */}
      {isMatrixMode && (
        <motion.div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">🕶️</span>
            <span>MATRIX MODE ACTIVATED</span>
          </div>
        </motion.div>
      )}

      {/* Уведомление о Developer Mode */}
      {showSecretMessage && (
        <motion.div
          className="fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg max-w-sm"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
        >
          <div className="text-sm">
            <div className="flex items-center gap-2 mb-1">
              <span>👨‍💻</span>
              <span>Режим разработчика</span>
            </div>
            <div className="text-xs opacity-90">
              Теперь вы видите скрытые эффекты!
            </div>
          </div>
        </motion.div>
      )}

      {/* Дополнительные эффекты для режима разработчика */}
      {isDeveloperMode && (
        <>
          <motion.div
            className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent z-40"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <motion.div
            className="fixed bottom-0 right-0 text-xs text-muted-foreground p-2 font-mono bg-card/50 backdrop-blur-sm rounded-tl-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            DEV_MODE: ON | FPS: 60 | RAM: ∞
          </motion.div>
        </>
      )}

      {/* Matrix rain эффект */}
      {isMatrixMode && (
        <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-green-400 font-mono text-sm opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-100px'
              }}
              animate={{
                y: [0, window.innerHeight + 100],
                opacity: [0, 1, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            >
              {Array.from({ length: 10 }).map((_, j) => (
                <div key={j} style={{ animationDelay: `${j * 0.1}s` }}>
                  {String.fromCharCode(0x30A0 + Math.random() * 96)}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      )}
    </>
  )
}

// Хук для счетчика кликов по аватару
export function useAvatarClicks() {
  const [clickCount, setClickCount] = useState(0)
  const [showSurprise, setShowSurprise] = useState(false)

  const handleAvatarClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)

    if (newCount === 5) {
      setShowSurprise(true)
      console.log('%c🎉 СЮРПРИЗ! Вы нашли секретную пасхалку!', 'color: #f59e0b; font-size: 18px; font-weight: bold;')
      console.log('%c🎨 Сtas - это не просто разработчик, это художник кода!', 'color: #6366f1; font-size: 14px;')
      
      // Радужный эффект
      document.body.classList.add('easter-egg-active')
      setTimeout(() => {
        document.body.classList.remove('easter-egg-active')
        setShowSurprise(false)
        setClickCount(0)
      }, 3000)
    }

    // Сброс счетчика через 3 секунды бездействия
    setTimeout(() => {
      if (clickCount === newCount) {
        setClickCount(0)
      }
    }, 3000)
  }

  return { handleAvatarClick, showSurprise, clickCount }
}
