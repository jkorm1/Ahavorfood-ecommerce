"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Hero (top) sliding images
const heroImages = [
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938453/IMG_4098.jpg",
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938463/IMG_0498_Original.jpg",
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935440/IMG_9201.jpg",
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938461/IMG_4396.jpg",
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791976223/IMG_3103.jpg",
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937465/IMG_1994.jpg",
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935072/copy_AD491BCD-651C-41AA-905B-7A38F3611188.jpg",
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935393/IMG_8799.jpg",
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935399/IMG_9205.jpg",
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791936064/IMG_2682.jpg",
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935060/copy_B8A5A6FF-32EA-46C7-B3D3-B94846237091.jpg",
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938726/IMG_6367.jpg",
  "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939283/IMG_9391.jpg",
];

// Program data with multiple images per program
const programs = [
  {
    id: 1,
    title: "What's Next? Leadership Summit",
    subtitle: "Ghana Biochemistry Students Association",
    description:
      "Our team had the privilege of speaking at the “WHAT’S NEXT?” Leadership Summit hosted by the Ghana Biochemistry Students Association at KNUST. We shared insights on entrepreneurship, leadership, and the importance of building something meaningful even while still in school. Watching students engage—listening attentively, asking thoughtful questions, and capturing ideas—was truly inspiring. For us, moments like these reinforce that impact goes beyond building businesses; it’s also about building people.",
    stats: "KNUST",
    images: [
      "/impact.png",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935072/copy_50DD67B9-3650-4FE9-B00D-0FE4B8DC4D0E.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935072/copy_AD491BCD-651C-41AA-905B-7A38F3611188.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935070/copy_64BA41F5-3BF5-47C2-A4FD-4182991A2F49.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935069/copy_B8153B44-3FA8-4271-A81C-9355DBC075F7.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935068/copy_953C18EA-3B3D-4C6E-B99D-A46EF773EC99.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935066/copy_0A4D5BD3-33AE-4106-A76D-CDDA82BE96C5.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935062/copy_4DA39E87-8E23-41E3-A33D-66E8F723EDAB.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935060/copy_B8A5A6FF-32EA-46C7-B3D3-B94846237091.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935047/copy_58435FDC-B298-44B0-B81A-F39D0DF7DFC8.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935046/copy_49D184D1-0F49-496B-8CDC-7E07ABA6ECD1.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935041/copy_324EBE3B-59FE-41A8-9CA3-6697AB8D007B.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935036/copy_453E9F0D-160A-4148-9C16-34A4BF033C2C.jpg",
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
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935393/IMG_8799.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935440/IMG_9201.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935435/IMG_8668.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935443/IMG_9197.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935445/IMG_9194.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935429/IMG_9209.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935430/IMG_9167.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935424/IMG_9171.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935414/IMG_9169.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935399/IMG_9205.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935395/IMG_9216.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935389/IMG_9177.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935386/IMG_9188.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935384/IMG_9193.jpg",
    ],
  },
  {
    id: 3,
    title: "Vice Chancellors Visit & Exchange",
    subtitle: "International Collaboration",
    description:
      "We had the honour of hosting Vice Chancellors from public universities in Germany at our office. We shared the vision behind Ahavor Foods — our “why” and what we are building. Their visit, in collaboration with KNUST and the Centre for Business Development, was aimed at supporting impactful student businesses and creating more opportunities for youth. We are grateful for this moment and excited about what lies ahead.",
    stats: "Global",
    images: [
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935769/IMG_6739.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935773/IMG_6711.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935778/IMG_6721.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791935789/IMG_6726.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791936064/IMG_2682.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791936068/IMG_6713.jpg",
    ],
  },
  {
    id: 4,
    title: "KNUST Food Festival 2026",
    subtitle: "Ahavor Tombrown Experience",
    description:
      "Ahavor proudly represented at the KNUST Food Festival 2026, and it was an incredible experience. Festival attendees tasted Ahavor Tombrown for the very first time — and the response was overwhelming. At the festival, we didn’t just exhibit; we served, we shared, and we let people truly experience Ahavor. Because Ahavor is more than food. It is vision. It is impact. It is purpose. Seeing people light up with satisfaction after tasting Ahavor Tombrown reminds us why we do what we do.",
    stats: "2026",
    images: [
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791936275/IMG_1722.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791936260/IMG_1539.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791936265/IMG_1599.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791936256/IMG_1476.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791936269/IMG_1650.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791936345/IMG_1542.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791936350/IMG_1712.jpg",
    ],
  },
  {
    id: 5,
    title: "Sharing love to the less privileged",
    subtitle: "Love and light",
    description:
      "We extended a helping hand to our less privileged brothers and sisters in the community by sharing our nutritious Tombrown product. We believe that true impact is not just about business success, but also about giving back and making a positive difference in the lives of others. Through this initiative, we were able to share love, light, hope, and nourishment with those who need it most. It was a humbling experience that reinforced our commitment to creating meaningful change beyond just building a business.",
    stats: "Global",
    images: [
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937465/IMG_1994.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937466/IMG_1970.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937467/IMG_1998.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937468/IMG_1966.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937469/IMG_1959.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937469/IMG_1953.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937471/IMG_1947.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937470/IMG_1958.jpg",
    ],
  },
  {
    id: 6,
    title: "Ahavor Volunteering Community",
    subtitle: "Love and light",
    description:
      "Ahavor volunteers dedicated their time and energy to community outreach programs, making a positive impact in the lives of those in need. It was a humbling experience that reinforced our commitment to creating meaningful change beyond just building a business.",
    stats: "Global",
    images: [
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938453/IMG_4098.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938455/IMG_4394.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938456/IMG_4101.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938454/IMG_4402.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938461/IMG_4396.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938463/IMG_0136_Original.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938461/IMG_0517_Original.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938467/IMG_0323_Original.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938458/IMG_4387.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938467/IMG_4362.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938451/IMG_0128_Original.jpg",
    ],
  },
  {
    id: 7,
    title: "Ahavor Packaging Team",
    subtitle: "Love and light",
    description:
      "Ahavor packaging team worked tirelessly to ensure that our products were packaged with care and attention to detail. Their dedication and hard work were instrumental in delivering high-quality products to our customers, and we are grateful for their contributions to the success of Ahavor Foods.",
    stats: "Global",
    images: [
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938726/IMG_6367.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938725/IMG_6309.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938726/IMG_6374.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938726/IMG_6317.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938724/IMG_6316.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791938724/IMG_6326.jpg",
    ],
  },
  {
    id: 8,
    title: "Ahavor Volunteering Community Outreach",
    subtitle: "Love and light",
    description:
      "Ahavor volunteers dedicated their time and energy to community outreach programs, making a positive impact in the lives of those in need. It was a humbling experience that reinforced our commitment to creating meaningful change beyond just building a business.",
    stats: "Global",
    images: [
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939277/IMG_9314.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939280/IMG_1371.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939284/IMG_9364.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939280/IMG_9401.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939279/IMG_1348.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939281/IMG_9427.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939282/IMG_9332.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939283/IMG_9391.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791937470/IMG_1958.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939284/IMG_9367.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939285/IMG_9388.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939285/IMG_1343.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939286/IMG_9334.jpg",
      "https://res.cloudinary.com/lnfrzx0q/image/upload/v1791939286/IMG_1322.jpg",
    ],
  },
];

// Crossfading slideshow for each program's big image
function ProgramSlideshow({ images, title, delay = 0 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    let interval;
    // Staggered start so all programs don't change at the same moment
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 4000);
    }, delay);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [images.length, delay]);

  return (
    <div className="relative w-full h-96 md:h-[480px] group-hover:scale-110 transition-transform duration-500">
      <AnimatePresence>
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
}

export function ImpactContent() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [currentFeaturedImage, setCurrentFeaturedImage] = useState(0);

  // Auto-change hero image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeaturedImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const currentProgram =
    selectedProgram !== null ? programs[selectedProgram] : null;

  return (
    <div className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Featured Large Image - Full Screen */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-screen overflow-hidden -mt-20"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentFeaturedImage}
              src={heroImages[currentFeaturedImage]}
              alt="Ahavor impact highlight"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Dark overlay for text visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              key={`text-${currentFeaturedImage}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl"
            >
              <h2
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                style={{ fontFamily: "Nunito, sans-serif" }}
              >
                Our Impact Journey
              </h2>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Transforming communities through meaningful programs,
                leadership, and the power of authentic impact with Ahavor.
              </p>
            </motion.div>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentFeaturedImage(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentFeaturedImage === idx
                    ? "bg-primary w-6"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/50 rounded-full" />
            </div>
          </motion.div>
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
                {/* Featured Image (auto-cycles through this program's images) */}
                <div
                  className={`relative rounded-3xl overflow-hidden border border-white/20 backdrop-blur-sm ${idx % 2 === 1 ? "md:col-start-2" : ""}`}
                >
                  <ProgramSlideshow
                    images={program.images}
                    title={program.title}
                    delay={idx * 800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-all duration-300 pointer-events-none" />
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

                      {/* Tiny Circular Thumbnails */}
                      <div className="flex -space-x-3 mt-4">
                        {program.images.slice(0, 5).map((img, thumbIdx) => (
                          <motion.div
                            key={thumbIdx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: thumbIdx * 0.1 }}
                            className="relative"
                          >
                            <img
                              src={img}
                              alt={`${program.title} ${thumbIdx + 1}`}
                              className="w-12 h-12 rounded-full border-2 border-white object-cover hover:scale-110 transition-transform cursor-pointer"
                              onClick={() => {
                                setSelectedProgram(programs.indexOf(program));
                                setSelectedImageIndex(thumbIdx);
                              }}
                            />
                          </motion.div>
                        ))}
                        {program.images.length > 5 && (
                          <div className="w-12 h-12 rounded-full border-2 border-white bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                            +{program.images.length - 5}
                          </div>
                        )}
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
            { label: "Students Inspired", value: "1,500+" },
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
