"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Define structure for an update item
interface UpdateItem {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  badge: string;
  benefits?: string[];
}

// Data for all updates - Add new objects here for more updates
const updatesData: UpdateItem[] = [
  {
    id: "volunteer-1",
    title: "Join Our Volunteer Team",
    description:
      "We are looking for passionate individuals to join the Ahavor Foods family. This is a great opportunity to gain experience, make new friends, and contribute to our mission of nourishing lives and empowering futures.",
    image: "/volunteer-flyer.jpg", // Ensure this image exists in your public folder
    link: "https://forms.gle/shLeZh6FyLoINL99A",
    linkText: "Apply Now",
    badge: "Current Opportunity",
    benefits: [
      "Flexible working hours",
      "Certificate of service provided",
      "Networking opportunities",
    ],
  },
  // Example of a second update (e.g., an event)
  // {
  //   id: "event-1",
  //   title: "Ahavor Food Fair",
  //   description: "Join us for our annual food fair showcasing the best of local cuisine and healthy living. There will be tasting sessions, cooking demos, and more.",
  //   image: "/food-fair-flyer.jpg",
  //   link: "#",
  //   linkText: "Learn More",
  //   badge: "Upcoming Event",
  // },
];

export function Updates() {
  const isSingleUpdate = updatesData.length === 1;

  return (
    <section
      id="updates"
      className="relative py-20 px-6 overflow-hidden bg-secondary/5"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full filter blur-3xl animate-pulse-glow"></div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            Latest <span className="text-primary">Updates</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay connected with Ahavor Foods. Here you will find latest news,
            volunteer opportunities, and community events.
          </p>
        </motion.div>

        {/* Single Update Layout: Horizontal Rectangle */}
        {isSingleUpdate &&
          updatesData.map((update, idx) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card border-2 border-primary/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2">
                {/* Image Section - Left */}
                <div className="relative h-[400px] md:h-[500px] bg-muted">
                  <Image
                    src={update.image}
                    alt={update.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content Section - Right */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-bold bg-primary/10 text-primary rounded-full w-max uppercase tracking-wider">
                    {update.badge}
                  </span>
                  <h3
                    className="text-3xl font-bold mb-4 text-secondary"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {update.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {update.description}
                  </p>

                  {update.benefits && (
                    <div className="space-y-3 mb-8">
                      {update.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <p className="text-sm font-medium text-foreground">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button
                    asChild
                    className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-6 px-8 rounded-full shadow-glow-primary transition-all"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    <a
                      href={update.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {update.linkText}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Multiple Updates Layout: Vertical Cards Grid */}
        {!isSingleUpdate && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {updatesData.map((update, idx) => (
              <motion.div
                key={update.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border-2 border-primary/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Image Section - Top */}
                <div className="relative h-[300px] w-full bg-muted">
                  <Image
                    src={update.image}
                    alt={update.title}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>

                {/* Content Section - Bottom */}
                <div className="p-8 flex-1 flex flex-col">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-bold bg-primary/10 text-primary rounded-full w-max uppercase tracking-wider">
                    {update.badge}
                  </span>
                  <h3
                    className="text-2xl font-bold mb-4 text-secondary"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {update.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                    {update.description}
                  </p>

                  {update.benefits && (
                    <div className="space-y-3 mb-8">
                      {update.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                          <p className="text-sm font-medium text-foreground">
                            {benefit}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button
                    asChild
                    className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-6 px-8 rounded-full shadow-glow-primary transition-all"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    <a
                      href={update.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {update.linkText}
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
