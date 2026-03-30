'use client'

import { motion } from 'framer-motion'

export function Story() {
  return (
    <section id="story" className="relative py-20 px-6 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full filter blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="glow-text-gold">Starpops</span> Story
          </h2>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Crafted with Passion</h3>
            <p className="text-foreground/80 leading-relaxed">
              Every kernel of Starpops popcorn is handpicked and carefully seasoned with premium ingredients sourced from around the world. We believe that great popcorn is more than just a snack—it's an experience, a moment of joy, a spark of magic in your everyday life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Quality First</h3>
            <p className="text-foreground/80 leading-relaxed">
              We don't compromise on quality. Every batch is tested for perfection. From the popping process to the final seasoning, every step is executed with precision and care. Starpops isn't just food—it's an art form.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">Community Driven</h3>
            <p className="text-foreground/80 leading-relaxed">
              Our mission is to bring people together through the joy of gourmet popcorn. Every purchase supports local communities and sustainable farming practices. When you choose Starpops, you're choosing more than just flavor—you're choosing a movement.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
