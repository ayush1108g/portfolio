"use client";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Award, ChevronDown, ChevronUp, Trophy, Users } from "lucide-react";
import { useState } from "react";

const achievements = [
  {
    icon: <Trophy className="w-6 h-6 text-amber-400" />,
    title: "ROBOFEST 4.0",
    text: "Won 2nd place and INR 1M by building a two-wheeled self-balancing robot.",
    details: [
      "Designed and developed the robot with IR-based line-following for autonomous indoor navigation.",
      "Implemented PID control on Arduino Nano using a 6-axis IMU to calibrate stepper motors and achieve real-time balance, stability, and precise motion while supporting a 1 kg payload.",
      "Optimized dynamic movement and response time for warehouse automation and indoor logistics applications.",
    ],
    link: "https://github.com/ayush1108g/Two-Wheeled-Self-Balancing-Robot",
  },
  {
    icon: <Award className="w-6 h-6 text-violet-400" />,
    title: "Competitive Programming",
    text: "Secured Global Rank 27 in CodeChef Starters 155; achieved 4-star CodeChef and Specialist Codeforces ratings.",
  },
  {
    icon: <Trophy className="w-6 h-6 text-emerald-400" />,
    title: "GC-2024 Hackathon",
    text: "Ranked 1st in Software and Web Development Hackathon with a team of three.",
  },
  {
    icon: <Users className="w-6 h-6 text-pink-400" />,
    title: "Coding Society Governor",
    text: "Led and mentored a community of 150+ students through contests and peer-learning sessions at IIT Bhubaneswar.",
  },
];

const OpenSource = () => {
  const [expandedAchievement, setExpandedAchievement] = useState<string | null>(
    null,
  );

  return (
    <section
      id="achievements"
      aria-label="Achievements and Leadership"
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
            Achievements & Leadership
          </h2>
          <div className="w-20 h-1 bg-violet-500 rounded-full" />
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 flex gap-4 cursor-pointer hover:border-violet-500/50 transition-colors"
              onClick={() =>
                achievement.details &&
                setExpandedAchievement(
                  expandedAchievement === achievement.title
                    ? null
                    : achievement.title,
                )
              }
              onKeyDown={(event) => {
                if (
                  achievement.details &&
                  (event.key === "Enter" || event.key === " ")
                ) {
                  event.preventDefault();
                  setExpandedAchievement(
                    expandedAchievement === achievement.title
                      ? null
                      : achievement.title,
                  );
                }
              }}
              tabIndex={achievement.details ? 0 : undefined}
              role={achievement.details ? "button" : undefined}
              aria-expanded={
                achievement.details
                  ? expandedAchievement === achievement.title
                  : undefined
              }
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-slate-900/60 flex items-center justify-center">
                {achievement.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {achievement.text}
                </p>
                {achievement.details && (
                  <>
                    <div className="mt-3 flex items-center gap-2 text-sm text-violet-400">
                      {expandedAchievement === achievement.title
                        ? "Hide details"
                        : "View details"}
                      {expandedAchievement === achievement.title ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                    <AnimatePresence>
                      {expandedAchievement === achievement.title && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="mt-3 overflow-hidden space-y-2 list-disc list-inside text-sm leading-relaxed text-slate-400"
                        >
                          {achievement.details.map((detail) => (
                            <li key={detail}>{detail}</li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </>
                )}
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-block mt-3 text-sm text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    View project on GitHub
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
