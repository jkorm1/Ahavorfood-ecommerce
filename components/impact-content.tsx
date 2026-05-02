"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function ImpactContent() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  // Program data with multiple images per program
  const programs = [
    {
      id: 1,
      title: "What's Next? Leadership Summit",
      subtitle: "Ghana Biochemistry Students Association",
      description:
        "Last Wednesday, our team had the privilege of speaking at the “WHAT’S NEXT?” Leadership Summit hosted by the Ghana Biochemistry Students Association at KNUST. We shared insights on entrepreneurship, leadership, and the importance of building something meaningful even while still in school. Watching students engage—listening attentively, asking thoughtful questions, and capturing ideas—was truly inspiring. For us, moments like these reinforce that impact goes beyond building businesses; it’s also about building people.",
      stats: "KNUST",
      images: [
        "/impact.png",
        "/impact2.jpg",
        "/impact3.jpg",
        "/impact20.jpg",
        "/impact21.jpg",
        "/impact22.jpg",
        "/impact23.jpg",
        "/impact24.jpg",
        "/impact25.jpg",
        "/impact26.jpg",
        "/impact27.jpg",
      ],
    },
    {
      id: 2,
      title: "KNUST Business School Leadership Talk",
      subtitle: "500+ Students Inspired",
      description:
        "We are grateful for the opportunity to speak to over 500 students of KNUST Business School. During the session, we shared insights on the importance of personal growth — cultivating the right mindset, building confidence, and intentionally expanding one’s network. It was truly impactful to engage with such a vibrant audience, and we value the chance to contribute to shaping the next generation of leaders and entrepreneurs.",
      stats: "500+",
      images: [
        "/impact9.jpg",
        "/impact8.jpg",
        "/impact4.jpg",
        "/impact28.jpg",
        "/impact29.jpg",
        "/impact30.jpg",
        "/impact31.jpg",
        "/impact32.jpg",
        "/impact33.jpg",
      ],
    },
    {
      id: 3,
      title: "Vice Chancellors Visit & Exchange",
      subtitle: "International Collaboration",
      description:
        "Last Wednesday, we had the honour of hosting Vice Chancellors from public universities in Germany at our office. We shared the vision behind Ahavor Foods — our “why” and what we are building. Their visit, in collaboration with KNUST and the Centre for Business Development, was aimed at supporting impactful student businesses and creating more opportunities for youth. We are grateful for this moment and excited about what lies ahead.",
      stats: "Global",
      images: [
        "/impact14.png",
        "/impact11.png",
        "/impact13.png",
        "/impact10.png",
      ],
    },
    {
      id: 4,
      title: "KNUST Food Festival 2026",
      subtitle: "Ahavor Tombrown Experience",
      description:
        "Last week, Ahavor proudly represented at the KNUST Food Festival 2026, and it was an incredible experience. Festival attendees tasted Ahavor Tombrown for the very first time — and the response was overwhelming. At the festival, we didn’t just exhibit; we served, we shared, and we let people truly experience Ahavor. Because Ahavor is more than food. It is vision. It is impact. It is purpose. Seeing people light up with satisfaction after tasting Ahavor Tombrown reminds us why we do what we do.",
      stats: "2026",
      images: ["/impact15.jpg", "/impact16.jpg", "/impact17.jpg"],
    },
  ];

  const currentProgram =
    selectedProgram !== null ? programs[selectedProgram] : null;

  return (
    <div className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Our Impact Journey
          </h2>
          <p className="text-lg md:text-xl text-primary/90 max-w-3xl mx-auto leading-relaxed">
            Transforming communities through meaningful programs, leadership,
            and the power of authentic impact with Ahavor.
          </p>
        </motion.div>

        {/* Featured Large Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20 rounded-3xl overflow-hidden border border-white/20 backdrop-blur-sm"
        >
          <img
            src="/impact9.jpg"
            alt="Featured impact image"
            className="w-full h-96 md:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Programs with Featured Images */}
        <div className="space-y-16 mb-20">
          {programs.map((program, idx) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group"
            >
              <div
                className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "md:grid-flow-dense" : ""}`}
              >
                {/* Featured Image */}
                <div
                  className={`relative rounded-3xl overflow-hidden border border-white/20 backdrop-blur-sm ${idx % 2 === 1 ? "md:col-start-2" : ""}`}
                >
                  <img
                    src={program.images[0]}
                    alt={program.title}
                    className="w-full h-96 md:h-[480px] object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-all duration-300" />
                </div>

                {/* Program Info */}
                <button
                  onClick={() => setSelectedProgram(programs.indexOf(program))}
                  className="group relative text-left"
                >
                  <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 hover:border-white/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-300 rounded-2xl" />

                    <div className="relative z-10">
                      <div className="text-5xl font-bold text-primary mb-3">
                        {program.stats}
                      </div>
                      <h3
                        className="text-2xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors"
                        style={{ fontFamily: "Nunito, sans-serif" }}
                      >
                        {program.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {program.description}
                      </p>

                      <div className="inline-flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                        View Gallery & More Images
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {[
            { label: "Students Inspired", value: "500+" },
            { label: "Speaking Events", value: "4" },
            { label: "Global Connections", value: "Growing" },
            { label: "Impact Stories", value: "Many" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Our Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-8 md:p-12 hover:border-white/40 transition-all duration-300"
        >
          <h3
            className="text-3xl font-bold text-secondary mb-8"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Our Impact Philosophy
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Building People",
                desc: "Beyond business, we focus on developing leaders, entrepreneurs, and changemakers who will shape the future.",
              },
              {
                title: "Authentic Impact",
                desc: "Real conversations with students, industry leaders, and communities. Not just talking—actively listening and engaging.",
              },
              {
                title: "Vision & Purpose",
                desc: "Every program, every speech, every moment is rooted in our core vision of creating meaningful change.",
              },
              {
                title: "Sharing Our Journey",
                desc: "We believe in transparency and sharing our story—our wins, our learnings, and our commitment to excellence.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <h4
                  className="text-lg font-bold text-primary mb-3 group-hover:text-primary/90 transition-colors"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image Gallery Modal */}
      <AnimatePresence>
        {selectedProgram !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProgram(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl"
            >
              <div className="backdrop-blur-xl bg-card/95 border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
                {/* Modal Header */}
                <div className="border-b border-white/10 p-6 flex justify-between items-start">
                  <div>
                    <h2
                      className="text-2xl md:text-3xl font-bold text-secondary mb-2"
                      style={{ fontFamily: "Nunito, sans-serif" }}
                    >
                      {currentProgram?.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {currentProgram?.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProgram(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-muted-foreground" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6 md:p-8">
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {currentProgram?.description}
                  </p>

                  {/* Image Gallery with Horizontal Scroll */}
                  <div className="relative">
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
                      {currentProgram?.images.map((img, idx) => (
                        <motion.button
                          key={idx}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          onClick={() => setSelectedImageIndex(idx)}
                          className="flex-shrink-0 group cursor-pointer relative overflow-hidden rounded-xl"
                        >
                          <img
                            src={img}
                            alt={`${currentProgram?.title} ${idx + 1}`}
                            className="w-48 h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="text-white text-center">
                              <div className="text-sm font-medium">
                                Click to expand
                              </div>
                            </div>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Image count indicator */}
                  <div className="mt-6 text-center text-muted-foreground text-sm">
                    {currentProgram?.images.length} images in this program
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Full-Screen Image Viewer */}
            <AnimatePresence>
              {selectedImageIndex !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedImageIndex(null)}
                  className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-4xl"
                  >
                    <img
                      src={currentProgram?.images[selectedImageIndex]}
                      alt="Expanded view"
                      className="w-full rounded-2xl shadow-2xl"
                    />

                    {/* Navigation */}
                    <div className="flex justify-between items-center mt-6">
                      <button
                        onClick={() =>
                          setSelectedImageIndex((prev) =>
                            prev === 0
                              ? currentProgram.images.length - 1
                              : prev - 1,
                          )
                        }
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-muted-foreground hover:text-foreground transition-all"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>

                      <div className="text-muted-foreground text-sm">
                        {selectedImageIndex + 1} /{" "}
                        {currentProgram?.images.length}
                      </div>

                      <button
                        onClick={() =>
                          setSelectedImageIndex(
                            (prev) => (prev + 1) % currentProgram.images.length,
                          )
                        }
                        className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-muted-foreground hover:text-foreground transition-all"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Close button */}
                    <button
                      onClick={() => setSelectedImageIndex(null)}
                      className="absolute top-4 right-4 p-2 rounded-lg bg-black/40 hover:bg-black/60 text-white transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom scrollbar hide */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
