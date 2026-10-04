"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="section-pad section-light"
    >
      <div className="container">
        <div className="section-kicker">
          01 — About us
        </div>

        <div className="about-layout">
          <motion.div
            className="about-title"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <h2>
              Small team.
              <br />
              <em>Big digital energy.</em>
            </h2>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
          >
            <p className="lead">
              BIN ZAHEER is a creative agency
              built around three disciplines:
              WordPress design, web development
              and video editing.
            </p>
            <p>
              We focus on clean interfaces,
              thoughtful interactions and digital
              work that feels distinctive without
              sacrificing usability. From a
              business website to a polished
              visual campaign, we bring strategy,
              design and execution together.
            </p>

            <div className="about-signature">
              <Sparkles size={19} />
              <span>
                Built with purpose. Crafted with
                detail.
              </span>
              <ArrowUpRight size={18} />
            </div>
          </motion.div>
        </div>

        <div className="stats">
          {[
            ["03", "Creative disciplines"],
            ["01", "Focused team"],
            ["10", "Completed Projects"],
          ].map(([num, label], i) => (
            <motion.div
              className="stat"
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <strong>{num}</strong>
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
