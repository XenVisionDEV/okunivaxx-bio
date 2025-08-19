import { motion } from 'framer-motion'
import { Code, Palette, Users, Zap } from 'lucide-react'

const skills = [
  {
    title: 'Java Developer',
    icon: Code,
    description: 'Backend разработка, Spring Boot, микросервисы',
    level: 33,
    color: 'from-orange-400 via-red-500 to-pink-500',
    bgPattern: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+'
  },
  {
    title: 'Graph Designer',
    icon: Palette,
    description: 'UI/UX дизайн, брендинг, иллюстрации',
    level: 75,
    color: 'from-purple-400 via-pink-500 to-red-500',
    bgPattern: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMTgiIHk9IjE4IiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMzMzMzMzIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4='
  },
  {
    title: 'UX Designer',
    icon: Users,
    description: 'Исследования пользователей, прототипирование',
    level: 55,
    color: 'from-blue-400 via-cyan-500 to-teal-500',
    bgPattern: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBvbHlnb24gcG9pbnRzPSIyMCwxNSAyNSwyNSAxNSwyNSIgZmlsbD0iIzMzMzMzMyIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+'
  }
]

export function CreativeSkillsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.title}
          className="group relative"
          initial={{ opacity: 0, y: 50, rotateY: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          whileHover={{ y: -10, rotateY: 5 }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
            <div 
              className="absolute inset-0 rounded-3xl"
              style={{ 
                backgroundImage: `url("${skill.bgPattern}")`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>
          
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-2xl`} />
          
          {/* Main card */}
          <div className="relative p-8 bg-card/60 backdrop-blur-md border border-border/50 rounded-3xl transition-all duration-500 group-hover:bg-card/80 group-hover:border-border group-hover:shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div className={`w-full h-full bg-gradient-to-br ${skill.color} rounded-full -right-16 -top-16 absolute`} />
            </div>
            
            {/* Icon */}
            <motion.div 
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 shadow-lg relative z-10`}
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <skill.icon className="w-8 h-8 text-white" />
              <Zap className="absolute -top-1 -right-1 w-4 h-4 text-white/70" />
            </motion.div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="mb-3 text-xl">{skill.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                {skill.description}
              </p>
              
              {/* Skill level */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Уровень мастерства</span>
                  <span className="text-sm">{skill.level}%</span>
                </div>
                
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 0.5, duration: 1, ease: "easeOut" }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Hover indicator */}
            <motion.div
              className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.2 }}
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
