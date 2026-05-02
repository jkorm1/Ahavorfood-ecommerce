"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const CEO = {
  name: "Christian Frimpong",
  role: "Chief Executive Officer",
  description:
    "Leading the vision and strategy of Ahavor Foods with passion and innovation.",
  image: "/christian.jpg",
};

const TEAM_IMAGE = "/show6.jpg"; // 替换为实际的图片路径

const heads = [
  {
    name: "Adu Kofi Owusu",
    role: "Head of Operations",
    description: "Ensuring quality and efficiency in every batch of Tombrown.",
    image: "/kofi.jpg",
    members: [
      {
        name: "Bro Taufik & Nathaniel",
        role: "Operations",
        description: "Dedicated team members ensuring smooth daily operations.",
        images: ["/taufik.jpg", "/nathaniel.jpg"],
      },
    ],
  },
  {
    name: "Josephine Dankwa",
    role: "Head of Sales and Distribution",
    description:
      "Connecting Ahavor Foods with customers and expanding our reach.",
    image: "/josephine.jpg",
    members: [
      {
        name: "Peace Mensah",
        role: "Sales and Distribution",
        description: "Supporting sales efforts and customer satisfaction.",
        image: "/peace.jpg",
      },
    ],
  },
  {
    name: "Joseph Korm",
    role: "Head of Marketing and Distribution",
    description: "Building the Ahavor brand and driving market growth.",
    image: "/jkorm.png",
    members: [
      {
        name: "Kofi Yeboah",
        role: "Marketing and Distribution",
        description: "Assisting in marketing strategies and brand visibility.",
        image: "/kofi-yeboah.jpg",
      },
    ],
  },
];

function MemberCard({ member, size = "md", delay = 0 }) {
  const isLg = size === "lg";
  const isSm = size === "sm";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center"
    >
      <div
        className={`bg-card border border-border rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center p-5 group ${
          isLg
            ? "w-full max-w-64"
            : isSm
              ? "w-full max-w-44"
              : "w-full max-w-52"
        }`}
      >
        {/* Avatar(s) */}
        <div className="flex justify-center gap-3 mb-4">
          {member.images ? (
            member.images.map((img, i) => (
              <div
                key={i}
                className={`rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors ${
                  isLg ? "w-20 h-20" : "w-14 h-14"
                }`}
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
              className={`rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-colors ${
                isLg ? "w-24 h-24" : isSm ? "w-14 h-14" : "w-16 h-16"
              }`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Info */}
        <h3
          className={`font-bold text-secondary mb-1 ${isLg ? "text-lg" : "text-sm"}`}
          style={{ fontFamily: "Nunito, sans-serif" }}
        >
          {member.name}
        </h3>
        <p
          className={`text-primary font-bold uppercase tracking-wide mb-2 ${isLg ? "text-xs" : "text-[10px]"}`}
        >
          {member.role}
        </p>
        <p className="text-muted-foreground leading-relaxed text-xs">
          {member.description}
        </p>
      </div>
    </motion.div>
  );
}

// Vertical connector line
function VLine({ height = 32 }) {
  return <div className="w-px bg-border mx-auto" style={{ height }} />;
}

// Horizontal branching connector for N children
function HBranch({ count }) {
  if (count === 1) return <VLine height={32} />;
  return (
    <div className="flex flex-col items-center w-full">
      <VLine height={16} />
      <div className="relative w-full flex justify-center">
        {/* horizontal bar */}
        <div
          className="absolute top-0 border-t border-border"
          style={{
            left: `calc(${50 / count}%)`,
            right: `calc(${50 / count}%)`,
          }}
        />
        {/* drop lines */}
        <div className="flex w-full justify-around pt-0">
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center"
              style={{ flex: 1 }}
            >
              <div className="w-px bg-border" style={{ height: 16 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Team() {
  return (
    <section id="team" className="relative py-20 px-6 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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

        {/* ── ORG TREE ── */}
        <div className="flex flex-col items-center">
          {/* Level 1 – CEO */}
          <MemberCard member={CEO} size="lg" delay={0} />

          {/* CEO → Heads connector */}
          <VLine height={32} />
          {/* Horizontal bar spanning the 3 heads */}
          <div className="relative w-full max-w-4xl flex justify-center">
            <div
              className="absolute top-0 border-t border-border"
              style={{ left: "16.67%", right: "16.67%" }}
            />
          </div>
          {/* Three drop lines */}
          <div className="w-full max-w-4xl flex justify-around">
            {heads.map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{ flex: 1 }}
              >
                <div className="w-px bg-border" style={{ height: 32 }} />
              </div>
            ))}
          </div>

          {/* Level 2 – Department Heads */}
          <div className="w-full max-w-4xl flex justify-around items-start gap-4">
            {heads.map((head, hi) => (
              <div key={hi} className="flex flex-col items-center flex-1">
                <MemberCard member={head} size="md" delay={0.1 + hi * 0.1} />

                {/* Head → Members connector */}
                {head.members?.length > 0 && (
                  <>
                    <VLine height={32} />

                    {/* Level 3 – Team Members */}
                    <div className="flex flex-wrap justify-center gap-4">
                      {head.members.map((member, mi) => (
                        <MemberCard
                          key={mi}
                          member={member}
                          size="sm"
                          delay={0.3 + hi * 0.1 + mi * 0.05}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Team Banner Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mt-16 w-full"
        >
          <div className="relative w-full h-auto min-h-[300px] md:min-h-[400px] overflow-hidden rounded-3xl">
            <img
              src={TEAM_IMAGE}
              alt="Team Banner"
              className="w-full h-auto object-contain"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20 text-center bg-card p-8 rounded-3xl border border-border shadow-sm max-w-2xl mx-auto"
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
