"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Usama Bin Zaheer",
    role: "WordPress Designer",
    image: "/Team1.webp",
  },
  {
    name: "Huzaifa Bin Zaheer",
    role: "Web Developer",
    image: "/Team2.webp",
  },
  {
    name: "Haris Bin Zaheer",
    role: "Video Editor",
    image: "/Team3.webp",
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="section-pad dark-section team-section"
    >
      <div className="container">
        <div className="section-kicker light">
          04 — The team
        </div>
        <div className="section-heading-row">
          <h2>
            Three people.
            <br />
            <em>One vision.</em>
          </h2>
          <p>
            A compact creative team with
            complementary skills.
          </p>
        </div>

        <div className="team-grid">
          {team.map((person, i) => (
            <motion.article
              className="team-card"
              key={person.name}
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="team-image">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  sizes="(max-width: 800px) 100vw, 33vw"
                />
                <div className="team-overlay">
                  <span>
                    <ArrowUpRight size={20} />
                  </span>
                </div>
              </div>
              <div className="team-info">
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
                <span className="team-num">
                  0{i + 1}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
