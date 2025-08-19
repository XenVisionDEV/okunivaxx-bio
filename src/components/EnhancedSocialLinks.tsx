import { motion } from 'framer-motion'
import { Github, MessageCircle, ExternalLink } from 'lucide-react'
import { portfolioConfig } from '../config/portfolio'

// Иконки для социальных сетей
const socialIcons = {
  GitHub: Github,
  Telegram: MessageCircle,
  VK: ExternalLink,
  Discord: MessageCircle
}

export function EnhancedSocialLinks() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {portfolioConfig.socialLinks.map((link, index) => {
        const IconComponent = socialIcons[link.name as keyof typeof socialIcons] || ExternalLink
        
        return (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl hover:bg-card/80 transition-all duration-500 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Background gradient animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  'linear-gradient(45deg, rgba(99,102,241,0.05), rgba(241,245,249,0.05))',
                  'linear-gradient(225deg, rgba(241,245,249,0.05), rgba(226,232,240,0.05))',
                  'linear-gradient(45deg, rgba(99,102,241,0.05), rgba(241,245,249,0.05))'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Icon container */}
            <div className="relative z-10 flex flex-col items-center space-y-4">
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"
                whileHover={{ rotate: 10 }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(99,102,241,0.1)',
                    '0 0 30px rgba(99,102,241,0.2)',
                    '0 0 20px rgba(99,102,241,0.1)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <IconComponent className="w-8 h-8 text-primary group-hover:text-primary/80 transition-colors" />
              </motion.div>

              {/* Title and description */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {link.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1 group-hover:text-muted-foreground/80 transition-colors">
                  {link.description || `Связаться через ${link.name}`}
                </p>
              </div>

              {/* Hover indicator */}
              <motion.div
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-20 transition-all duration-500"
                whileHover={{ width: '5rem' }}
              />
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />

            <motion.div
              className="absolute bottom-4 left-4 w-1 h-1 bg-secondary/30 rounded-full"
              animate={{
                scale: [1, 2, 1],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.3
              }}
            />

            {/* Ripple effect on hover */}
            <motion.div
              className="absolute inset-0 border-2 border-primary/0 rounded-3xl group-hover:border-primary/20 transition-all duration-500"
              whileHover={{
                scale: [1, 1.05, 1],
                borderColor: ['rgba(99,102,241,0)', 'rgba(99,102,241,0.2)', 'rgba(99,102,241,0)']
              }}
              transition={{ duration: 1 }}
            />
          </motion.a>
        )
      })}
    </div>
  )
}