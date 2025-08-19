import { Github, MessageCircle, Send, Users } from 'lucide-react'
import { motion } from 'motion/react'
import { portfolioConfig } from '../config/portfolio'

const iconMap = {
  'GitHub': Github,
  'Telegram': Send,
  'VK': Users,
  'Discord': MessageCircle
}

export function EnhancedSocialLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
      {portfolioConfig.socialLinks.map((link, index) => {
        const IconComponent = iconMap[link.name as keyof typeof iconMap] || Github
        
        return (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden"
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
            whileHover={{ y: -5, rotateX: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"
                 style={{ background: `linear-gradient(135deg, ${link.color.split(' ')[1]}, ${link.color.split(' ')[3]})` }} />
            
            <div className={`relative p-6 bg-card/40 backdrop-blur-sm border border-border/50 rounded-2xl transition-all duration-300 group-hover:bg-card/60 group-hover:border-border group-hover:shadow-2xl`}>
              <motion.div 
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <IconComponent className="w-6 h-6 text-white" />
              </motion.div>
              
              <h3 className="mb-1 text-sm group-hover:text-primary transition-colors">
                {link.name}
              </h3>
              <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors">
                {link.description}
              </p>
              
              <motion.div 
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.a>
        )
      })}
    </div>
  )
}