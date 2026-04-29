"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const team = [
  {
    name: "Christian Frimpong",
    role: "Chief Executive Officer",
    description:
      "Leading the vision and strategy of Ahavor Foods with passion and innovation.",
    color: "from-primary/20 to-primary/5", // Using Ahavor Primary Orange
    image: "/christian.jpg",
  },
  {
    name: "Adu Kofi Owusu",
    role: "Head of Operations",
    description: "Ensuring quality and efficiency in every batch of Tombrown.",
    color: "from-secondary/20 to-secondary/5", // Using Ahavor Teal
    image: "/kofi.jpg",
  },
  {
    name: "Josephine Dankwa",
    role: "Head of Sales and Distribution",
    description:
      "Connecting Ahavor Foods with customers and expanding our reach.",
    color: "from-primary/20 to-primary/5",
    image: "/josephine.jpg",
  },
  {
    name: "Joseph Korm",
    role: "Head of Marketing and Distribution",
    description: "Building the Ahavor brand and driving market growth.",
    color: "from-secondary/20 to-secondary/5",
    image: "/jkorm.png",
  },
  {
    name: "Bro Taufik & Nathaniel",
    role: "Operations",
    description: "Dedicated team members ensuring smooth daily operations.",
    color: "from-primary/20 to-primary/5",
    images: ["/taufik.jpg", "/nathaniel.jpg"],
  },

  {
    name: "Peace Mensah",
    role: "Sales and Distribution",
    description: "Supporting sales efforts and customer satisfaction.",
    color: "from-secondary/20 to-secondary/5",
    image: "/peace.jpg",
  },
  {
    name: "Kofi Yeboah",
    role: "Marketing and Distribution",
    description: "Assisting in marketing strategies and brand visibility.",
    color: "from-primary/20 to-primary/5",
    image: "/kofi-yeboah.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Team() {
  return (
    <section id="team" className="relative py-20 px-6 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
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
            Meet the <span className="text-primary">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicated individuals driving the mission of Ahavor Foods.
          </p>
        </motion.div>

        {/* Team members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {team.map((member, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group">
              {/* Team member card */}
              <div className="h-full bg-card rounded-3xl p-6 shadow-sm border border-border hover:shadow-md transition-all duration-300 flex flex-col items-center text-center">
                {/* Team member images */}
                <div className={`flex justify-center gap-4 mb-6`}>
                  {member.images ? (
                    member.images.map((img, idx) => (
                      <div
                        key={idx}
                        className={`w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors bg-gradient-to-br ${member.color}`}
                      >
                        <img
                          src={img}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))
                  ) : (
                    <div
                      className={`w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors bg-gradient-to-br ${member.color}`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

                {/* Member info */}
                <div>
                  <h3
                    className="text-xl font-bold mb-2 text-secondary"
                    style={{ fontFamily: "Nunito, sans-serif" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-primary font-bold mb-3 text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center bg-card p-8 rounded-3xl border border-border shadow-sm max-w-2xl mx-auto"
        >
          <h3
            className="text-2xl font-bold text-secondary mb-6"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Contact Us
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p className="font-medium text-foreground mb-4">Ahavor Foods</p>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <p>KNUST, Kumasi – Ghana</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <p>0504984721</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <p>ahavorfoods@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
