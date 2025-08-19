import { motion } from 'motion/react'
import { ThemeToggle } from './components/ThemeToggle'
import { GeometricBackground } from './components/GeometricBackground'
import { CodeMatrixEffect } from './components/CodeMatrixEffect'
import { EnhancedSocialLinks } from './components/EnhancedSocialLinks'
import { UpdatedCreativeSkillsSection } from './components/UpdatedCreativeSkillsSection'
import { EasterEggs, useAvatarClicks } from './components/EasterEggs'
import { ConsoleArt } from './components/ConsoleArt'
import { ImageWithFallback } from './components/figma/ImageWithFallback'
import { ArrowDown, Sparkles, Terminal, Quote, Code, Coffee, Zap } from 'lucide-react'
import { portfolioConfig } from './config/portfolio'

export default function App() {
  const { handleAvatarClick, showSurprise } = useAvatarClicks()

  // Функция для плавного скролла к социальным сетям
  const scrollToSocial = () => {
    const socialSection = document.getElementById('social-section')
    if (socialSection) {
      socialSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      })
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <GeometricBackground />
      <CodeMatrixEffect />
      <ThemeToggle />
      <EasterEggs />
      <ConsoleArt />
      
      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            {/* Badge with enhanced animation */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full backdrop-blur-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05, borderColor: 'var(--primary)' }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-4 h-4 text-primary" />
              </motion.div>
              <span className="text-sm text-primary">{portfolioConfig.status}</span>
            </motion.div>

            {/* Main heading with typing effect */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-4">
                <motion.h1 
                  className="text-5xl md:text-7xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  {portfolioConfig.name}
                </motion.h1>
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-1 h-16 bg-primary"
                />
              </div>
              
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Terminal className="w-6 h-6 text-primary" />
                </motion.div>
                <p className="text-xl md:text-2xl text-muted-foreground">@{portfolioConfig.username}</p>
              </div>
            </motion.div>

            {/* Description with enhanced animations */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {portfolioConfig.mainDescription}
              </p>
              
              <motion.div 
                className="flex items-start gap-4 p-4 bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl"
                whileHover={{ 
                  backgroundColor: 'var(--card-hover)',
                  borderColor: 'var(--border)',
                  scale: 1.02
                }}
              >
                <Quote className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-sm text-muted-foreground italic">
                  "{portfolioConfig.quote}"
                </p>
              </motion.div>
            </motion.div>

            {/* CTA with scroll functionality */}
            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                onClick={scrollToSocial}
                className="px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <span className="flex items-center gap-2 relative z-10">
                  {portfolioConfig.ctaText}
                  <motion.div
                    animate={{ rotate: [-45, -35, -45] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowDown className="w-4 h-4 rotate-[-45deg] group-hover:translate-x-1 transition-transform" />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.p
                className="text-sm text-muted-foreground flex items-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Coffee className="w-4 h-4" />
                {portfolioConfig.ctaSubtext}
              </motion.p>
            </motion.div>
          </div>

          {/* Right side - Avatar with enhanced effects and easter egg */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {/* Enhanced background decoration */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 rounded-full blur-3xl opacity-30"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Avatar container with more effects */}
            <div className="relative">
              {/* Multiple rotating borders */}
              <motion.div
                className="absolute inset-0 rounded-full p-1"
                style={{
                  background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary)), transparent, hsl(var(--secondary)), transparent)'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>
              
              <motion.div
                className="absolute inset-2 rounded-full p-1 opacity-50"
                style={{
                  background: 'conic-gradient(from 180deg, transparent, hsl(var(--accent)), transparent)'
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-transparent" />
              </motion.div>
              
              {/* Avatar with easter egg */}
              <motion.div
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-background shadow-2xl cursor-pointer"
                whileHover={{ scale: 1.05, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={handleAvatarClick}
                animate={showSurprise ? { 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                } : {}}
              >
                <ImageWithFallback
                  src={portfolioConfig.avatar}
                  alt={`${portfolioConfig.name} Avatar`}
                  className="w-full h-full object-cover"
                />
                
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                
                {/* Code overlay effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                  animate={{ x: [-100, 400] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />

                {/* Surprise effect */}
                {showSurprise && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 via-pink-400/30 to-purple-400/30"
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 0.5, repeat: 6 }}
                  />
                )}
              </motion.div>
              
              {/* Enhanced floating elements with easter egg effects */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [-5, 5, -5], 
                  rotate: [0, 180, 360],
                  scale: showSurprise ? [1, 1.5, 1] : 1
                }}
                transition={{ 
                  y: { duration: 3, repeat: Infinity }, 
                  rotate: { duration: 6, repeat: Infinity },
                  scale: { duration: 0.5 }
                }}
              >
                <Code className="w-4 h-4 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-secondary rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [5, -5, 5], 
                  scale: showSurprise ? [1, 1.3, 1] : [1, 1.2, 1]
                }}
                transition={{ 
                  y: { duration: 4, repeat: Infinity }, 
                  scale: { duration: 2, repeat: Infinity }
                }}
              >
                <Zap className="w-3 h-3 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full shadow-lg"
                animate={{ 
                  x: [-5, 5, -5],
                  opacity: [0.5, 1, 0.5],
                  scale: showSurprise ? [1, 2, 1] : 1
                }}
                transition={{ 
                  x: { duration: 5, repeat: Infinity },
                  opacity: { duration: 5, repeat: Infinity },
                  scale: { duration: 0.5 }
                }}
              />

              {/* Surprise particles */}
              {showSurprise && (
                <>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-yellow-400 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%'
                      }}
                      animate={{
                        x: [0, Math.cos(i * 45 * Math.PI / 180) * 100],
                        y: [0, Math.sin(i * 45 * Math.PI / 180) * 100],
                        opacity: [1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social Links Section with ID for scrolling */}
      <div id="social-section" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl mb-4"
              whileHover={{ scale: 1.02 }}
            >
              {portfolioConfig.sections.social.title}
            </motion.h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {portfolioConfig.sections.social.subtitle}
            </p>
          </motion.div>

          <EnhancedSocialLinks />
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">{portfolioConfig.sections.skills.badge}</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              {portfolioConfig.sections.skills.title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              {portfolioConfig.sections.skills.subtitle}
            </p>
          </motion.div>

          <UpdatedCreativeSkillsSection />
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-4 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center">
              <motion.div
                className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center cursor-pointer"
                whileHover={{ rotate: 10, scale: 1.1 }}
                whileTap={{ rotate: 360 }}
                animate={{ 
                  boxShadow: ['0 0 20px rgba(99, 102, 241, 0.3)', '0 0 40px rgba(99, 102, 241, 0.5)', '0 0 20px rgba(99, 102, 241, 0.3)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <Terminal className="w-6 h-6 text-white" />
              </motion.div>
            </div>
            
            <h3 className="text-xl">{portfolioConfig.sections.footer.title}</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              {portfolioConfig.sections.footer.subtitle}
            </p>
            
            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground">
                {portfolioConfig.sections.footer.copyright}
              </p>
              <motion.p 
                className="text-xs text-muted-foreground/50 mt-2"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                💡 Попробуйте найти все пасхалки на этом сайте!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}