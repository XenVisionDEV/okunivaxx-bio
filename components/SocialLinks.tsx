import { Github, MessageCircle, Send, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/okunivaxx',
    icon: Github,
    color: 'hover:bg-gray-900 hover:text-white'
  },
  {
    name: 'Telegram',
    href: 'https://t.me/okunivaxx',
    icon: Send,
    color: 'hover:bg-blue-500 hover:text-white'
  },
  {
    name: 'VK',
    href: 'https://vk.com/okunivaxx',
    icon: Users,
    color: 'hover:bg-blue-600 hover:text-white'
  },
  {
    name: 'Discord',
    href: 'https://discord.com/users/okunivaxx',
    icon: MessageCircle,
    color: 'hover:bg-indigo-600 hover:text-white'
  }
]

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 ${link.color} group`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.6 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <link.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
        </motion.a>
      ))}
    </div>
  )
}
