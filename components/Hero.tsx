"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowDown,
  Linkedin,
  Sparkles,
} from "lucide-react";

const LINKEDIN_URL =
  "https://www.linkedin.com/in/huzaifa-bin-zaheer-24546a41a/";

export default function Hero() {
  return (
    <section className="hero section-pad">
      <div className="hero-grid" />
      <div className="orb orb-one" />
      <div className="orb orb-two" />

      <div className="hero-inner container">
        <div className="flex flex-col items-stretch gap-12 xl:flex-row xl:items-center xl:justify-between">
          <div className="min-w-0 flex-1">
            <motion.div
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="pulse-dot" />{" "}
              Creative Digital Agency
            </motion.div>

            <motion.h1
              className="hero-title"
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
              BIN ZAHEER combines design,
              development and visual storytelling
              to turn ideas into memorable digital
              experiences.
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
          </div>

          <div className="relative mx-auto w-full max-w-[390px] xl:mx-0 xl:rotate-[2deg] xl:transition-transform xl:duration-500 xl:hover:rotate-0">
            {/* Layer behind the card — book page effect */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rotate-[-3deg] rounded-[1.8rem] border border-[#d9ff3f]/30 bg-[#d9ff3f]/[0.06]"
            />

            {/* Second paper layer */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-1.5 translate-y-1 rotate-[1deg] rounded-[1.8rem] border border-white/10 bg-[#171715]"
            />

            <motion.a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
              whileHover={{ y: -6 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
              }}
              className="group relative block w-full overflow-hidden rounded-[1.7rem] border border-white/15 bg-[#10100f] p-6 text-white shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] sm:p-7"
            >
              {/* Neon-lime top accent */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#b9dc21] via-[#d9ff3f] to-[#a9c928]" />

              {/* Subtle corner glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#d9ff3f]/10 blur-[60px] transition duration-500 group-hover:bg-[#d9ff3f]/20"
              />

              {/* Header */}
              <div className="relative flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0A66C2] text-white shadow-[0_0_25px_rgba(217,255,63,0.12)]">
                    <Linkedin
                      size={22}
                      strokeWidth={2.5}
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold tracking-wide text-[#f6f5f1]">
                      LinkedIn
                    </p>
                    <p className="mt-1 text-xs text-white/45">
                      Professional network
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-[#d9ff3f]/25 bg-[#d9ff3f]/[0.08] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-[#d9ff3f]">
                  Connect
                </span>
              </div>

              {/* Profile */}
              <div className="relative mt-9 flex items-center gap-4">
                <div className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center overflow-hidden rounded-[1.35rem] border border-[#d9ff3f]/30 bg-gradient-to-br from-[#d9ff3f] to-[#b9dc21] text-2xl font-black tracking-tight text-[#11110f] shadow-[0_8px_30px_rgba(217,255,63,0.10)]">
                  HZ
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/35" />
                </div>

                <div className="min-w-0">
                  <p className="text-lg font-bold leading-snug tracking-tight text-[#f6f5f1] sm:text-xl">
                    Frontend Web Developer
                  </p>

                  <p className="mt-2 text-sm leading-6 text-white/50">
                    Building modern, responsive
                    digital experiences.
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="relative mt-7 flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "UI / UX",
                  "Responsive Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-[11px] font-medium text-white/65 transition-colors duration-300 group-hover:border-[#d9ff3f]/30 group-hover:text-[#f6f5f1]"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="relative my-7 h-px bg-gradient-to-r from-[#d9ff3f]/30 via-white/10 to-transparent" />

              {/* CTA */}
              <div className="relative flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-[#f6f5f1]">
                    Let’s connect professionally
                  </p>

                  <p className="mt-1.5 text-xs text-white/40">
                    View my LinkedIn profile
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d9ff3f] text-[#11110f] transition duration-300 group-hover:rotate-45 group-hover:bg-[#f6f5f1]">
                  <ArrowUpRight size={21} />
                </div>
              </div>

              {/* Bottom detail */}
              <div className="relative mt-6 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/25">
                <span className="h-px w-6 bg-[#d9ff3f]/50" />
                Design · Code · Collaboration
              </div>
            </motion.a>
          </div>
        </div>

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
