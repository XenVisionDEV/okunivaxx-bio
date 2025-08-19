import { motion } from 'framer-motion'
import { Code, Palette, Users } from 'lucide-react'

const skills = [
  {
    title: 'Java Developer',
    icon: Code,
    description: 'Backend разработка и архитектура',
    color: 'from-orange-500 to-red-500'
  },
  {
    title: 'Graph Designer',
    icon: Palette,
    description: 'Графический дизайн и визуализация',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'UX Designer',
    icon: Users,
    description: 'Пользовательский опыт и интерфейсы',
    color: 'from-blue-500 to-cyan-500'
  }
]

export function SkillsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.title}
          className="relative group"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl"
               style={{ background: `linear-gradient(to right, ${skill.color})` }} />
          
          <div className="relative p-6 bg-card/30 backdrop-blur-sm border border-border rounded-2xl hover:bg-card/50 transition-all duration-300 group-hover:scale-105">
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4`}>
              <skill.icon className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="mb-2">{skill.title}</h3>
            <p className="text-muted-foreground text-sm">{skill.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
