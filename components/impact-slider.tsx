"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Impact images data
const impactImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791976223/IMG_3103.jpg",
    alt: "Ahavor impact moment",
    title: "Building Impact Together",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791976209/Your_favorite_nutritious_and_delicious_Tombrown_is_back_and_ready_to_serve_you_better_this_time..jpg",
    alt: "Ahavor Tombrown",
    title: "Ahavor Tombrown",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937468/IMG_1966.jpg",
    alt: "Food Festival",
    title: "Ahavor Tombrown Experience",
  },

  {
    id: 4,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791976226/IMG_3321.jpg",
    alt: "Ahavor team moment",
    title: "Our Journey",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938455/IMG_4394.jpg",
    alt: "Ahavor volunteers",
    title: "Love and light",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938726/IMG_6367.jpg",
    alt: "Ahavor packaging team",
    title: "Packaging with Care",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935070/copy_64BA41F5-3BF5-47C2-A4FD-4182991A2F49.jpg",
    alt: "Leadership Summit",
    title: "What's Next? Leadership Summit",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935046/copy_49D184D1-0F49-496B-8CDC-7E07ABA6ECD1.jpg",
    alt: "Leadership Summit",
    title: "Inspiring Students",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935047/copy_58435FDC-B298-44B0-B81A-F39D0DF7DFC8.jpg",
    alt: "Student Engagement",
    title: "Building People",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935769/IMG_6739.jpg",
    alt: "Vice Chancellors Visit",
    title: "International Collaboration",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935773/IMG_6711.jpg",
    alt: "Vice Chancellors Visit",
    title: "Vice Chancellors Visit",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791936269/IMG_1650.jpg",
    alt: "Food Festival",
    title: "KNUST Food Festival",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791936260/IMG_1539.jpg",
    alt: "Food Festival",
    title: "Ahavor Tombrown Experience",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935386/IMG_9188.jpg",
    alt: "Food Festival",
    title: "Ahavor Tombrown Experience",
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935414/IMG_9169.jpg",
    alt: "Food Festival",
    title: "Ahavor Tombrown Experience",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937469/IMG_1959.jpg",
    alt: "Food Festival",
    title: "Ahavor Tombrown Experience",
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937467/IMG_1998.jpg",
    alt: "Food Festival",
    title: "Ahavor Tombrown Experience",
  },
  {
    id: 18,
    src: "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937468/IMG_1966.jpg",
    alt: "Food Festival",
    title: "Ahavor Tombrown Experience",
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
        <div className="absolute inset-y-0 left-0 w-20  from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 from-background to-transparent z-10" />

        {/* Animated sliding container */}
        <motion.div
          animate={{
            x: [0, -(impactImages.length * (320 + 24))], // total width of one set: image width (320px) + gap (24px)
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 75, // scaled up for 13 images to keep the same speed as before
              ease: "linear",
            },
          }}
          className="flex gap-6"
        >
          {/* First set, then a duplicate set for a seamless loop */}
          {[...impactImages, ...impactImages].map((image, index) => (
            <Link
              key={`${index < impactImages.length ? "" : "duplicate-"}${image.id}`}
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
