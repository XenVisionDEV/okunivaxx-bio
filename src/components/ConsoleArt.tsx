import { useEffect } from 'react'

export function ConsoleArt() {
  useEffect(() => {
    // Отображаем ASCII арт в консоли
    console.log(`
      ╔══════════════════════════════════════╗
      ║         🚀 PORTFOLIO LOADED 🚀        ║
      ╠══════════════════════════════════════╣
      ║                                      ║
      ║  Welcome to Stas (@okunivaxx) site!  ║
      ║                                      ║
      ║  💻 Java Developer (33%)             ║
      ║  🎨 Graph Designer (75%)             ║
      ║  🎯 UX Designer (55%)                ║
      ║                                      ║
      ║  🥚 Easter Eggs Hidden:              ║
      ║  • Konami Code (↑↑↓↓←→←→BA)          ║
      ║  • Developer Mode (Ctrl+Shift+D)     ║
      ║  • Avatar Clicks (5x)                ║
      ║                                      ║
      ║  Made with ❤️ & React + Motion       ║
      ╚══════════════════════════════════════╝
    `)

    // Дополнительные сообщения с задержкой
    setTimeout(() => {
      console.log('🎨 Tip: Try switching between light and dark themes!')
    }, 2000)

    setTimeout(() => {
      console.log('🔍 Tip: Look for animated elements and hidden interactions!')
    }, 4000)

    setTimeout(() => {
      console.log('⚡ Tip: This site is fully responsive - try resizing your window!')
    }, 6000)

    // Скрытое сообщение для любопытных разработчиков
    console.log('%cИщешь пасхалки? 🕵️', 'color: #6366f1; font-size: 16px; font-weight: bold;')
    console.log('%cТы на правильном пути! Изучай код и ищи секреты...', 'color: #10b981; font-size: 12px;')

    // Информация о технологиях
    console.table({
      'Frontend': 'React 18 + TypeScript',
      'Animations': 'Motion (formerly Framer Motion)',
      'Styling': 'Tailwind CSS v4',
      'Icons': 'Lucide React',
      'Build Tool': 'Vite',
      'Easter Eggs': '4+ hidden features'
    })
  }, [])

  return null
}