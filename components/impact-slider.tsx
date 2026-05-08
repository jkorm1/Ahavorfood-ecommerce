"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Impact images data
const impactImages = [
  {
    id: 1,
    src: "/impact1.jpg",
    alt: "Leadership Summit",
    title: "What's Next? Leadership Summit",
  },
  {
    id: 2,
    src: "/impact5.jpg",
    alt: "KNUST Business School",
    title: "KNUST Business School Talk",
  },
  {
    id: 3,
    src: "/impact11.png",
    alt: "Vice Chancellors Visit",
    title: "International Collaboration",
  },
  {
    id: 4,
    src: "/impact15.jpg",
    alt: "Food Festival",
    title: "KNUST Food Festival",
  },
  {
    id: 5,
    src: "/impact29.jpg",
    alt: "Student Engagement",
    title: "Inspiring Students",
  },
  {
    id: 6,
    src: "/impact3.jpg",
    alt: "Community Impact",
    title: "Community Building",
  },
  {
    id: 7,
    src: "/impact42.jpg",
    alt: "Feeding the less privileged",
    title: "Love and light",
  },
];

export function ImpactSlider() {
  return (
    <section className="py-16 px-0.5 relative overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-12"
      >
        <div className="text-center mb-8">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-secondary"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Our <span className="text-primary">Impact</span> Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how we're making a difference in communities
          </p>
        </div>
      </motion.div>

      {/* Sliding Images Container */}
      <div className="relative">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Animated sliding container */}
        {/* Animated sliding container */}
        <motion.div
          animate={{
            x: [0, -(impactImages.length * (320 + 24))], // Calculate total width based on image width (320px) + gap (24px)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40, // Increased duration for smoother movement
              ease: "linear",
            },
          }}
          className="flex gap-6"
        >
          {/* First set of images */}
          {impactImages.map((image) => (
            <Link
              key={image.id}
              href="/impact"
              className="flex-shrink-0 w-72 md:w-80 group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-bold text-lg mb-1">
                      {image.title}
                    </h4>
                    <p className="text-white/80 text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Duplicate set for seamless loop */}
          {impactImages.map((image) => (
            <Link
              key={`duplicate-${image.id}`}
              href="/impact"
              className="flex-shrink-0 w-72 md:w-80 group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="text-white font-bold text-lg mb-1">
                      {image.title}
                    </h4>
                    <p className="text-white/80 text-sm">{image.alt}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* View All Impact Button */}
      <div className="text-center mt-12">
        <Link
          href="/impact"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          View All Impact Stories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
