"use client";

import { motion } from "framer-motion";
import { Code2, MonitorCog, Play, ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    icon: MonitorCog,
    title: "WordPress Design",
    text: "Modern, conversion-focused WordPress websites built with polished layouts, responsive design and intuitive user experiences.",
    tags: ["WordPress", "Elementor", "UI/UX"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Web Development",
    text: "Fast and scalable web experiences with modern technologies, clean architecture and responsive front-end development.",
    tags: ["Next.js", "React", "JavaScript"],
  },
  {
    number: "03",
    icon: Play,
    title: "Video Editing",
    text: "Engaging edits for social content, brand videos and digital campaigns with rhythm, transitions and visual storytelling.",
    tags: ["Shorts", "Reels", "Content"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad dark-section">
      <div className="container">
        <div className="section-kicker light">02 — Services</div>
        <div className="section-heading-row">
          <h2>What we<br /><em>do best.</em></h2>
          <p>Three skill sets, one creative direction.</p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                className="service-card"
                key={service.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.65 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -8 }}
              >
                <div className="card-top">
                  <span>{service.number}</span>
                  <Icon size={25} strokeWidth={1.6} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="tags">
                  {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a href="#contact" className="card-arrow" aria-label={`Discuss ${service.title}`}>
                  <ArrowUpRight size={20} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}