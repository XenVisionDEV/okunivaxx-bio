import { motion } from 'motion/react'
import { Code, Palette, Users, Zap } from 'lucide-react'
import { portfolioConfig } from '../config/portfolio'

const iconMap = {
  'Java Developer': Code,
  'Graph Designer': Palette,
  'UX Designer': Users
}

export function UpdatedCreativeSkillsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
      {portfolioConfig.skills.map((skill, index) => {
        const IconComponent = iconMap[skill.title as keyof typeof iconMap] || Code
        
        return (
          <motion.div
            key={skill.title}
            className="group relative"
            initial={{ opacity: 0, y: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ y: -10, rotateY: 5 }}
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl blur-2xl`} />
            
            {/* Main card */}
            <div className="relative p-8 bg-card/60 backdrop-blur-md border border-border/50 rounded-3xl transition-all duration-500 group-hover:bg-card/80 group-hover:border-border group-hover:shadow-2xl overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className={`w-full h-full bg-gradient-to-br ${skill.color} rounded-full -right-16 -top-16 absolute`} />
              </div>
              
              {/* Icon with enhanced animation */}
              <motion.div 
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 shadow-lg relative z-10`}
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <IconComponent className="w-8 h-8 text-white" />
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Zap className="w-4 h-4 text-white/70" />
                </motion.div>
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                <motion.h3 
                  className="mb-3 text-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  {skill.title}
                </motion.h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {skill.description}
                </p>
                
                {/* Skill level with enhanced animation */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Уровень мастерства</span>
                    <motion.span 
                      className="text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 1 }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 1, ease: "easeOut" }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-white/20"
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced hover indicator */}
              <motion.div
                className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.2, rotate: 90 }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}