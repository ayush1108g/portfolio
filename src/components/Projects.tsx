"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Tag, X } from "lucide-react";

interface Project {
  title: string;
  role: string;
  desc: string;
  fullDesc: string[];
  tags: string[];
  link?: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projects: Project[] = [
    {
      title: "General Championship App",
      role: "App Development",
      desc: "React Native mobile app serving 2,000+ students across 50+ events.",
      fullDesc: [
        "Developed the General Championship mobile app using React Native.",
        "Built live scores, leaderboards, and latest news with Firebase, increasing engagement by 20% and turnout by 40%.",
        "Reduced API usage by 20% through efficient API management with Node.js, React Native, and Firebase.",
      ],
      tags: ["React Native", "Node.js", "Firebase"],
    },
    {
      title: "EduSync - College ERP System",
      role: "Full Stack Web Development",
      desc: "Rank 1 IIT BBS Web Hackathon project serving students, teachers, and administrators.",
      fullDesc: [
        "Created an ERP system serving students, teachers, and administrators.",
        "Engineered core modules for class scheduling, attendance tracking, assignment scheduling, and grading.",
        "Implemented location-based attendance that only marks students within 50 meters, reducing proxy attendance.",
      ],
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      link: "https://github.com/ayush1108g/ERP_System",
    },
    {
      title: "SwiftShop",
      role: "Full Stack Web Development",
      desc: "A user-friendly ecommerce web application with authentication, product discovery, shopping, and personalized UI features.",
      fullDesc: [
        "Created a user-friendly ecommerce website with JWT-based authentication, dynamic product catalog, shopping cart and wishlist features.",
        "Implemented advanced search filtering, product commenting for user feedback, and dark/light mode customization.",
        "Built the application with React.js, CSS, Bootstrap, Node.js, Express, and MongoDB for a robust, scalable experience.",
      ],
      tags: ["React.js", "Bootstrap", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/ayush1108g/swiftshop",
    },
  ];

  return (
    <section
      id="projects"
      aria-label="Featured Software Projects"
      className="py-20 bg-slate-900/30"
    >
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl">
            A selection of products built for campus communities and real-world
            workflows.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/40 rounded-xl overflow-hidden border border-slate-700/50 hover:border-violet-500/50 group transition-all flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center p-8">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-200 mb-1">
                    {project.title}
                  </h3>
                  <span className="text-sm text-violet-400 font-medium">
                    {project.role}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs px-2 py-1 bg-slate-900 text-slate-300 rounded border border-slate-700"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-3 text-center text-sm text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    View on GitHub
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full mt-2 py-2 rounded-lg bg-slate-700/50 hover:bg-violet-600 hover:text-white text-slate-300 text-sm font-medium transition-all flex items-center justify-center gap-2"
                >
                  View Details <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80"
                onClick={() => setSelectedProject(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-2xl w-full bg-slate-900 border border-slate-700 rounded-xl p-8"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="absolute top-4 right-4 text-slate-400 hover:text-white"
                >
                  <X />
                </button>
                <h3 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-violet-400 mb-6">{selectedProject.role}</p>
                <ul className="space-y-3 text-slate-300">
                  {selectedProject.fullDesc.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="text-violet-400">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
