'use client'

import { useEffect } from 'react'

export function ConsoleArt() {
  useEffect(() => {
    // Дополнительные пасхалки в консоли
    setTimeout(() => {
      console.log('%c', 'font-size: 1px; padding: 50px 100px; background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGV4dCB4PSIxMCIgeT0iNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzYzNjZmMSI+U3RhcyAtIERldmVsb3BlciAmIERlc2lnbmVyPC90ZXh0Pjwvc3ZnPg==") no-repeat;')
    }, 2000)

    // Проверка времени суток для разных сообщений
    const hour = new Date().getHours()
    let timeMessage = ''
    
    if (hour >= 6 && hour < 12) {
      timeMessage = '🌅 Доброе утро! Отличное время для кодинга!'
    } else if (hour >= 12 && hour < 18) {
      timeMessage = '☀️ Добрый день! Продуктивного кодинга!'
    } else if (hour >= 18 && hour < 22) {
      timeMessage = '🌆 Добрый вечер! Время для творчества!'
    } else {
      timeMessage = '🌙 Доброй ночи! Не забудьте отдыхать!'
    }

    setTimeout(() => {
      console.log(`%c${timeMessage}`, 'color: #f59e0b; font-size: 14px;')
    }, 3000)

    // Случайные советы разработчику
    const tips = [
      '💡 Совет: Используйте semantic commit messages для лучшей истории Git',
      '🚀 Совет: Не забывайте про accessibility при разработке UI',
      '🎨 Совет: Консистентность в дизайне важнее креативности',
      '⚡ Совет: Оптимизация преждевременна, но о производительности стоит думать',
      '🔧 Совет: Code review - это не критика, а возможность обучения'
    ]

    setTimeout(() => {
      const randomTip = tips[Math.floor(Math.random() * tips.length)]
      console.log(`%c${randomTip}`, 'color: #10b981; font-size: 12px; font-style: italic;')
    }, 5000)

    // Скрытое сообщение для рекрутеров
    setTimeout(() => {
      console.log('%c📧 Для HR и рекрутеров:', 'color: #ef4444; font-size: 16px; font-weight: bold;')
      console.log('%cЕсли вы это читаете, значит мы уже на одной волне! 😊', 'color: #6366f1; font-size: 14px;')
      console.log('%cStas всегда открыт для интересных предложений!', 'color: #6366f1; font-size: 14px;')
    }, 7000)

  }, [])

  return null
}