import { useState, useEffect } from 'react'

// Конami код: ↑↑↓↓←→←→BA
const KONAMI_CODE = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
]

export function useAvatarClicks() {
  const [clickCount, setClickCount] = useState(0)
  const [showSurprise, setShowSurprise] = useState(false)

  const handleAvatarClick = () => {
    setClickCount(prev => prev + 1)
    
    if (clickCount + 1 === 5) {
      // Пасхалка после 5 кликов
      setShowSurprise(true)
      console.log('🎉 Поздравляем! Вы нашли пасхалку с аватаром!')
      
      setTimeout(() => {
        setShowSurprise(false)
        setClickCount(0)
      }, 2000)
    }
  }

  return { handleAvatarClick, showSurprise }
}

export function EasterEggs() {
  const [konamiIndex, setKonamiIndex] = useState(0)
  const [developerMode, setDeveloperMode] = useState(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Konami Code detection
      if (event.code === KONAMI_CODE[konamiIndex]) {
        setKonamiIndex(prev => prev + 1)
        
        if (konamiIndex + 1 === KONAMI_CODE.length) {
          // Активируем Matrix Mode
          console.log('🚀 KONAMI CODE ACTIVATED! Matrix Mode ON!')
          window.dispatchEvent(new CustomEvent('matrixMode'))
          setKonamiIndex(0)
        }
      } else {
        setKonamiIndex(0)
      }

      // Developer Mode (Ctrl+Shift+D)
      if (event.ctrlKey && event.shiftKey && event.code === 'KeyD') {
        setDeveloperMode(prev => !prev)
        document.body.classList.toggle('developer-mode')
        console.log(developerMode ? '💻 Developer Mode OFF' : '💻 Developer Mode ON!')
        
        if (!developerMode) {
          console.log(`
            🎯 Секретные команды:
            • Konami Code (↑↑↓↓←→←→BA) - Matrix Mode
            • 5 кликов по аватару - Сюрприз
            • Ctrl+Shift+D - Developer Mode
          `)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [konamiIndex, developerMode])

  return null
}