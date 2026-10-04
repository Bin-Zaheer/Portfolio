"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="hero section-pad">
      <div className="hero-grid" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <div className="hero-inner container">
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="pulse-dot" /> Creative
          Digital Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
        >
          We build digital
          <span> experiences.</span>
        </motion.h1>

        <motion.p
          className="hero-copy"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          BIN ZAHEER combines design, development
          and visual storytelling to turn ideas
          into memorable digital experiences.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
        >
          <a
            className="button button-primary"
            href="#projects"
          >
            Explore Our Work{" "}
            <ArrowUpRight size={18} />
          </a>
          <a
            className="button button-ghost"
            href="https://www.upwork.com/freelancers/~01f2c2e7c15c944450"
            target="_blank"
            rel="noopener noreferrer"
          >
            See Upwork profile{" "}
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <motion.div
          className="hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>Scroll to explore</span>
          <ArrowDown
            size={17}
            className="bounce"
          />
          <span className="hero-note">
            Design · Code · Motion
          </span>
        </motion.div>
      </div>
    </section>
  );
}
