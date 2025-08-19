import { motion } from 'framer-motion'
import { Code, Palette, Users, Zap, Sparkles, Trophy } from 'lucide-react'
import { portfolioConfig } from '../config/portfolio'

// Иконки для разных типов навыков
const skillIcons = {
  development: Code,
  design: Palette,
  collaboration: Users,
  default: Zap
}

export function UpdatedCreativeSkillsSection() {
  return (
    <div className="space-y-16">
      {/* Skills Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {portfolioConfig.skills.map((skill, index) => {
          // Определяем иконку на основе типа навыка
          const getSkillIcon = (title: string) => {
            if (title.toLowerCase().includes('developer') || title.toLowerCase().includes('java')) {
              return skillIcons.development
            } else if (title.toLowerCase().includes('designer') || title.toLowerCase().includes('design')) {
              return skillIcons.design
            } else {
              return skillIcons.default
            }
          }
          
          const IconComponent = getSkillIcon(skill.title)
          
          return (
            <motion.div
              key={skill.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              {/* Card container */}
              <motion.div
                className="relative p-8 bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden h-full"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: '0 25px 50px rgba(0,0,0,0.1)'
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background pattern */}
                <motion.div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary)) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                  animate={{
                    backgroundPosition: ['0px 0px', '20px 20px', '0px 0px']
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Header with icon and title */}
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <motion.div
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(99,102,241,0.1)',
                          '0 0 30px rgba(99,102,241,0.2)',
                          '0 0 20px rgba(99,102,241,0.1)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <IconComponent className="w-7 h-7 text-primary" />
                    </motion.div>

                    <motion.div
                      className="text-right"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.5 }}
                    >
                      <motion.div
                        className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                        animate={{ 
                          backgroundPosition: ['0%', '100%', '0%']
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      >
                        {skill.level}%
                      </motion.div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Trophy className="w-3 h-3" />
                        Level
                      </div>
                    </motion.div>
                  </div>

                  {/* Title and description */}
                  <div className="space-y-3">
                    <motion.h3 
                      className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {skill.title}
                    </motion.h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Animated progress bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Прогресс</span>
                      <motion.div 
                        className="flex items-center gap-1"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="w-3 h-3 text-primary" />
                        <span className="text-xs text-primary">Растет</span>
                      </motion.div>
                    </div>
                    
                    <div className="relative h-2 bg-muted/30 rounded-full overflow-hidden">
                      <motion.div
                        className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: index * 0.3 + 0.8, 
                          duration: 1.5, 
                          ease: "easeOut" 
                        }}
                      />
                      
                      {/* Shimmer effect */}
                      <motion.div
                        className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: [-32, 320] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </div>

                  {/* Tags/Technologies */}
                  {skill.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + i * 0.1 }}
                          whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--primary) / 0.15)' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  )}

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  />

                  <motion.div
                    className="absolute bottom-6 left-6 w-1 h-1 bg-secondary/30 rounded-full"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.7
                    }}
                  />
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      'linear-gradient(45deg, rgba(99,102,241,0.02), transparent, rgba(241,245,249,0.02))',
                      'linear-gradient(225deg, rgba(241,245,249,0.02), transparent, rgba(226,232,240,0.02))',
                      'linear-gradient(45deg, rgba(99,102,241,0.02), transparent, rgba(241,245,249,0.02))'
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                {/* Border glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/20 transition-all duration-500"
                  whileHover={{
                    borderColor: 'rgba(99,102,241,0.3)',
                    boxShadow: '0 0 30px rgba(99,102,241,0.1)'
                  }}
                />
              </motion.div>
            </motion.div>
          )
        })}
      </div>

      {/* Overall stats */}
      <motion.div
        className="grid md:grid-cols-3 gap-6 p-8 bg-gradient-to-r from-card/30 to-card/50 backdrop-blur-sm border border-border/50 rounded-3xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="text-center space-y-2">
          <motion.div 
            className="text-2xl font-bold text-primary"
            animate={{ 
              scale: [1, 1.05, 1],
              color: ['hsl(var(--primary))', 'hsl(var(--secondary))', 'hsl(var(--primary))']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {Math.round(portfolioConfig.skills.reduce((acc, skill) => acc + skill.level, 0) / portfolioConfig.skills.length)}%
          </motion.div>
          <p className="text-sm text-muted-foreground">Средний уровень</p>
        </div>
        
        <div className="text-center space-y-2">
          <motion.div 
            className="text-2xl font-bold text-secondary"
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          >
            {portfolioConfig.skills.length}
          </motion.div>
          <p className="text-sm text-muted-foreground">Основных навыка</p>
        </div>
        
        <div className="text-center space-y-2">
          <motion.div 
            className="text-2xl font-bold text-accent-foreground flex items-center justify-center gap-1"
            animate={{ 
              scale: [1, 1.05, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            <Sparkles className="w-5 h-5" />
            ∞
          </motion.div>
          <p className="text-sm text-muted-foreground">Стремление к росту</p>
        </div>
      </motion.div>
    </div>
  )
}