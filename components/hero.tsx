'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-full filter blur-3xl animate-pulse-glow"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-sm font-medium text-primary">✨ Crafted with Magic</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="glow-text-gold">Experience</span>
          {' '}
          <span className="glow-text-pink">the</span>
          {' '}
          <span className="glow-text-blue">Magic</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
        >
          Premium specialty popcorn crafted with passion. Every kernel, every flavor, every moment is pure magic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => scrollToSection('products')}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-base font-semibold"
          >
            Order Now
          </Button>
          <Button
            onClick={() => scrollToSection('story')}
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
          >
            Learn More
          </Button>
        </motion.div>
      </div>

      {/* Floating popcorn emoji */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-20 left-10 text-6xl opacity-20"
      >
        🍿
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-32 right-20 text-5xl opacity-20"
      >
        ✨
      </motion.div>
    </section>
  )
}
