"use client";

import { motion } from "framer-motion";

export function Story() {
  return (
    <section
      id="story"
      className="relative py-20 px-6 overflow-hidden bg-secondary/5"
    >
      {/* Gradient orbs - Ahavor Colors */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full filter blur-3xl animate-pulse-glow"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-secondary"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            The <span className="text-primary">Ahavor</span> Story
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nourishing Lives. Empowering Futures.
          </p>
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-colors shadow-sm"
          >
            <h3
              className="text-2xl font-bold mb-4 text-secondary"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Our Mission
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              To provide high-quality, nutritious food products that deliver
              real value to our customers, while empowering young people,
              supporting local farmers, and creating sustainable impact in
              communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-3xl p-8 hover:border-primary/50 transition-colors shadow-sm"
          >
            <h3
              className="text-2xl font-bold mb-4 text-secondary"
              style={{ fontFamily: "Nunito, sans-serif" }}
            >
              Our Vision
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              To become a leading food brand in Ghana and beyond, empowering
              young people through entrepreneurship, innovation, excellence, and
              lasting impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
