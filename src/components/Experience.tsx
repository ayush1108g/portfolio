"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp } from "lucide-react";

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const jobs = [
    {
      role: "MTS - Engineering",
      company: "ZL Technologies",
      period: "July 2026 - Present",
      tech: ["Software Engineering", "Backend Development"],
      points: ["Working on engineering projects at ZL Technologies."],
    },
    {
      role: "Software Development Intern",
      company: "Media.Net",
      period: "May 2025 - July 2025",
      tech: ["Javascript", "Node.js", "LLMs"],
      points: [
        "Optimized a pattern-search service by 90% by replacing expensive table-join operations with query-based filtering, while leveraging the existing Aho–Corasick tree for efficient multi-pattern searching.",
        "Engineered a benchmarking pipeline to evaluate LLM-based keyword generation for quality, relevance, and cost.",
        "Reduced API costs by 20% and latency by 40% through batching, prompt engineering, and automation scripts.",
        "Architected a spam classification system integrating LLMs with ClickHouse data for real-time, three-modal analysis.",
      ],
    },
    {
      role: "Frontend Development Intern",
      company: "MathonGo",
      period: "June 2024 - Aug 2024",
      tech: ["Next.js", "Redux", "Storybook"],
      points: [
        "Developed an LMS using Next.js, improving performance and page load time by 20%.",
        "Built a scalable library of 30+ reusable components with Shadcn-UI and managed state with Redux.",
        "Collaborated with cross-functional teams to deliver high-quality, tested frontend components using Storybook.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-20 relative"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-violet-500 rounded-full"></div>
        </motion.div>
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-10 space-y-8">
          {jobs.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-violet-500 z-10" />
              <div
                className="bg-slate-800/20 rounded-xl border border-slate-700/50 p-6 cursor-pointer hover:bg-slate-800/40 transition-colors"
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {job.role}
                    </h3>
                    <p className="text-violet-400 font-medium text-lg">
                      {job.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-900/50 px-3 py-1.5 rounded-full whitespace-nowrap">
                    <Calendar className="w-4 h-4" />
                    {job.period}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full border border-slate-700 bg-slate-900/30 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium mt-2">
                  {expandedIndex === index ? (
                    <>
                      Hide Responsibilities <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      View Responsibilities <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </div>
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <ul className="mt-4 space-y-3 pt-4 border-t border-slate-700/50">
                        {job.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                          >
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
