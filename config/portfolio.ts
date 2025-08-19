// Конфигурация портфолио - редактируйте этот файл для изменения информации
export const portfolioConfig = {
  // Основная информация
  name: "PRI.GO",
  username: "okunivaxx", 
  
  // Аватар - замените URL на свою фотографию
  avatar: "https://i.postimg.cc/0yJX2Q5v/816a720f-62c5-48fc-bdff-af60748ad9e6.jpg",
  
  // Статус и описание
  status: "Доступен для проектов",
  mainDescription: "Создаю цифровые продукты на стыке технологий и дизайна. От архитектуры backend-систем до интуитивных пользовательских интерфейсов.",
  quote: "Хороший код - это поэзия, которую понимают машины. Хороший дизайн - это поэзия, которую чувствуют люди.",
  
  // Кнопка призыва к действию
  ctaText: "Связаться со мной",
  ctaSubtext: "Открыт для новых возможностей",
  
  // Навыки с процентами (можно редактировать проценты и описания)
  skills: [
    {
      title: "Java Developer",
      description: "Backend разработка, разработка плагинов Minecraft",
      level: 33, // Процент от 0 до 100
      color: "from-orange-400 via-red-500 to-pink-500"
    },
    {
      title: "Graph Designer", 
      description: "UI/UX дизайн, брендинг, дизайн проектов",
      level: 75,
      color: "from-purple-400 via-pink-500 to-red-500"
    },
    {
      title: "UX Designer",
      description: "Исследования пользователей, прототипирование", 
      level: 55,
      color: "from-blue-400 via-cyan-500 to-teal-500"
    }
  ],
  
  // Социальные сети (замените ссылки на свои)
  socialLinks: [
    {
      name: "GitHub",
      href: "https://github.com/okunivaxx", // Замените на свой GitHub
      description: "Код и проекты",
      color: "from-gray-600 to-gray-900"
    },
    {
      name: "Telegram", 
      href: "https://t.me/okunivaxx", // Замените на свой Telegram
      description: "Быстро отвечаю",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "VK",
      href: "https://vk.com/okunivaxx", // Замените на свой VK
      description: "Социальная сеть", 
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Discord",
      href: "https://discord.com/users/okunivaxx", // Замените на свой Discord
      description: "Геймерское общение",
      color: "from-indigo-500 to-purple-600"
    }
  ],
  
  // Заголовки секций
  sections: {
    social: {
      title: "Давайте общаться",
      subtitle: "Выберите удобный способ связи для обсуждения проектов и идей"
    },
    skills: {
      badge: "Экспертиза",
      title: "Мои суперсилы", 
      subtitle: "Комплексный подход к созданию цифровых продуктов - от идеи до реализации"
    },
    footer: {
      title: "Готов к новым вызовам",
      subtitle: "Ищу интересные проекты и команды для создания выдающихся цифровых продуктов",
      copyright: "© 2025 okunivaxx • Создано с 🚀 и кофе"
    }
  }
}