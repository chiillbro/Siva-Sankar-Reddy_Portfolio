/* eslint-disable @typescript-eslint/no-unused-vars */

// app/components/ExperienceSection.tsx
'use client';

import { Briefcase, Rocket, Code2, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Nirmaan",
    role: "Software Engineer",
    duration: "July 2024 – Present",
    achievements: [
      "Architected caching strategies (client-side React optimizations, Redis integration via Frappe framework, server caching), slashing API latency by 55% and improving app performance by 60%",
      "Refactored 80% of legacy codebase built by interns, implementing SOLID principles and modular design to reduce technical debt by 45%",
      "Spearheaded AI-driven analytics integration using Python to deliver real-time insights into projects, orders, and vendor metrics, enabling data-driven decision-making"
    ],
    tech: ["Frappe", "Python", "React", "Redis", "PostgreSQL", "Docker"],
    icon: <Rocket className="w-5 h-5 text-primary" />
  },
  {
    company: "Attica Gold",
    role: "Full Stack Engineer",
    duration: "Mar 2024 – July 2024",
    achievements: [
      "Engineered CCTV management system handling 50+ concurrent streams using MERN & OpenCV",
      "Optimized video pipelines with FFmpeg, reducing bandwidth usage by 30%",
      "Engineered AWS cloud solutions (S3, Lambda) to securely store and forward 10 TB+ footage monthly, achieving 99.9% uptime"
    ],
    tech: ["MERN", "Python", "OpenCV", "JWT", "FFmpeg", "Socket.IO", "AWS"],
    icon: <Code2 className="w-5 h-5 text-primary" />
  }
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="min-h-screen relative flex flex-col items-center py-20 px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
    >
      <div className="max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Professional Journey
          </h2>
          <p className="text-center text-gray-400">Where code meets impact</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-primary/20 to-transparent -translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={cn(
                "relative mb-16 w-full",
                index % 2 === 0 ? "pl-8 md:pl-0 md:pr-8" : "pr-8 md:pr-0 md:pl-8"
              )}
            >
              <div className={cn(
                "relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
                "hover:border-primary/30 transition-all",
                index % 2 === 0 ? "md:ml-24" : "md:mr-24"
              )}>
                {/* Timeline dot */}
                <div className={cn(
                  "absolute top-8 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary/50",
                  "flex items-center justify-center -translate-y-1/2",
                  index % 2 === 0 ? "-left-8 md:-left-12" : "-right-8 md:-right-12"
                )}>
                  {exp.icon}
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-6 mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-primary">{exp.role}</h3>
                    <p className="text-xl font-medium text-gray-300">{exp.company}</p>
                  </div>
                  <p className="text-sm text-teal-400 font-mono">{exp.duration}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3 text-gray-400">
                      <ArrowRight className="flex-shrink-0 w-5 h-5 mt-1 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}