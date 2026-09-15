"use client";

import { Code2, Github, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="py-10 border-t border-slate-800 bg-slate-950"
    >
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Code2 className="text-violet-500 w-5 h-5" aria-hidden="true" />
          <span className="font-bold text-slate-300">
            Ayush<span className="text-violet-500">.</span>
          </span>
        </div>
        <p className="text-slate-600 text-sm">
          <span className="text-slate-500 font-medium">
            &copy; {currentYear} Ayush Gupta
          </span>
          . All rights reserved.
        </p>
      </div>
      <nav aria-label="Coding and professional profiles" className="mt-6">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
          <li>
            <a
              href="https://github.com/ayush1108g"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-violet-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ayush-gupta-1020a9253/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-400 hover:text-violet-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/u/Ayush_gupta_2004/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-violet-400 transition-colors"
            >
              LeetCode
            </a>
          </li>
          <li>
            <a
              href="https://www.codechef.com/users/ayush1108gupta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-violet-400 transition-colors"
            >
              CodeChef
            </a>
          </li>
          <li>
            <a
              href="https://codeforces.com/profile/Ayush_Gupta_1108"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-violet-400 transition-colors"
            >
              Codeforces
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
