"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  MoveUpRight,
} from "lucide-react";

const projects = [
  {
    title: "Project JoshThorpe",
    category: "Development",
    year: "2026",
    link: "https://josh-thorpe-one.vercel.app/",
    description:
      "A refined digital experience built around bold visuals, clean structure and effortless interaction.",
    image: "/pro.webp",
  },
  {
    title: "Project ShopMy",
    category: "Development",
    year: "2026",
    link: "https://www.shopmy.com/",
    description:
      "A modern, performance-focused interface engineered with a sharp visual system and fluid interactions.",
    image: "/pro2.webp",
  },
  {
    title: "Project Funkyy Apps",
    category: "Web Design",
    year: "2026",
    link: "https://www.funkyyapps.com/",
    description:
      "An immersive visual direction combining movement, atmosphere and a strong cinematic identity.",
    image: "/pro3.webp",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);

  const nextProject = () => {
    setActive(
      (prev) => (prev + 1) % projects.length,
    );
  };

  const previousProject = () => {
    setActive(
      (prev) =>
        (prev - 1 + projects.length) %
        projects.length,
    );
  };

  const project = projects[active];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#f7f5ef] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#d9c7a3]/20 blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[#e9dfca]/30 blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-8 lg:mb-20 lg:flex-row lg:items-end"
        >
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-[1px] w-10 bg-[#26231f]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#6e695f]">
                03 — Selected Work
              </span>
            </div>

            <h2 className="max-w-4xl text-[clamp(3.5rem,8vw,8.5rem)] font-light leading-[0.82] tracking-[-0.065em] text-[#24211d]">
              Ideas made
              <br />
              <span className="font-serif italic text-[#6e665a]">
                visible.
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-[#777168] lg:pb-2">
            A selection of digital experiences
            crafted with intention, precision and
            a strong focus on visual storytelling.
          </p>
        </motion.div>

        {/* FEATURED PROJECT */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid overflow-hidden rounded-[2rem] border border-[#ded9ce] bg-[#eeece6] lg:grid-cols-[1.65fr_0.75fr]"
            >
              <a
                href={project.link}
                className="group relative block min-h-[430px] overflow-hidden sm:min-h-[550px] lg:min-h-[680px]"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.045]"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#171512]/55 via-transparent to-transparent opacity-80" />

                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md sm:left-8 sm:top-8">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  <span className="text-[10px] uppercase tracking-[0.22em] text-white">
                    Featured Project
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between sm:bottom-8 sm:left-8 sm:right-8">
                  <span className="text-sm text-white/70">
                    {project.year}
                  </span>

                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f7f5ef] text-[#24211d] transition-transform duration-500 group-hover:rotate-45">
                    <ArrowUpRight
                      size={22}
                      strokeWidth={1.5}
                    />
                  </span>
                </div>
              </a>
              <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                <div>
                  <div className="mb-12 flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-[#817a70]">
                      {project.category}
                    </span>

                    <span className="font-serif text-sm italic text-[#817a70]">
                      0{active + 1} / 0
                      {projects.length}
                    </span>
                  </div>

                  <h3 className="max-w-md text-4xl font-light leading-[0.95] tracking-[-0.045em] text-[#24211d] sm:text-5xl lg:text-[4.5rem]">
                    {project.title}
                  </h3>

                  <div className="my-8 h-px w-full bg-[#d8d3c9]" />

                  <p className="max-w-md text-sm leading-7 text-[#716c64] sm:text-[15px]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-14">
                  <div className="mb-7 h-px w-full bg-[#d7d2c8]">
                    <motion.div
                      animate={{
                        width: `${((active + 1) / projects.length) * 100}%`,
                      }}
                      transition={{
                        duration: 0.5,
                      }}
                      className="h-full bg-[#302c27]"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.2em] text-[#292621]"
                    >
                      View Project
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#cfc9bd] transition-all duration-300 group-hover:bg-[#292621] group-hover:text-white">
                        <MoveUpRight size={14} />
                      </span>
                    </a>

                    <div className="flex gap-2">
                      <button
                        onClick={previousProject}
                        aria-label="Previous project"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d2cdc2] text-[#302c27] transition-all duration-300 hover:bg-[#302c27] hover:text-white"
                      >
                        <ChevronLeft
                          size={18}
                          strokeWidth={1.5}
                        />
                      </button>

                      <button
                        onClick={nextProject}
                        aria-label="Next project"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d2cdc2] text-[#302c27] transition-all duration-300 hover:bg-[#302c27] hover:text-white"
                      >
                        <ChevronRight
                          size={18}
                          strokeWidth={1.5}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {projects.map((item, index) => (
              <button
                key={item.title}
                onClick={() => setActive(index)}
                className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 ${
                  active === index
                    ? "border-[#c9c1b3] bg-[#ebe7de]"
                    : "border-transparent bg-transparent hover:bg-[#eeece6]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-[10px] tracking-[0.15em] ${
                        active === index
                          ? "text-[#292621]"
                          : "text-[#989188]"
                      }`}
                    >
                      0{index + 1}
                    </span>

                    <div>
                      <p className="text-sm font-medium text-[#292621]">
                        {item.title}
                      </p>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-[#8b857c]">
                        {item.category}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={15}
                    className={`transition-all duration-300 ${
                      active === index
                        ? "rotate-0 opacity-100"
                        : "rotate-45 opacity-30"
                    }`}
                  />
                </div>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#292621] transition-all duration-500 ${
                    active === index
                      ? "w-full"
                      : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col justify-between gap-8 border-t border-[#dcd7cd] pt-8 sm:flex-row sm:items-center"
        >
          <p className="max-w-xl text-sm leading-6 text-[#7c766d]">
            Every project starts with an idea and
            ends with an experience people
            remember.
          </p>

          <a
            href="#contact"
            className="group flex w-fit items-center gap-4 text-xs uppercase tracking-[0.2em] text-[#292621]"
          >
            Start a project
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#cbc5ba] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#292621] group-hover:text-white">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
