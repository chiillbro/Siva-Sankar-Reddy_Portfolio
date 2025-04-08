/* eslint-disable @typescript-eslint/no-unused-vars */

// app/components/SkillsSection.tsx
'use client';

// import { MotionDiv } from '@/components/motion-div';
import { Code, Cloud, Database, Cpu, Palette, GitBranch } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const categories = [
  {
    name: "Languages",
    icon: <Code className="w-6 h-6" />,
    skills: ["Python", "Go", "TypeScript", "SQL", "JavaScript"],
    color: "text-[#7DD3FC]"
  },
  {
    name: "Frontend",
    icon: <Palette className="w-6 h-6" />,
    skills: ["React", "Next", "Redux", "Tailwind", "Framer-motion"],
    color: "text-[#F472B6]"
  },
  {
    name: "Backend",
    icon: <Cpu className="w-6 h-6" />,
    skills: ["Node.js", "Flask", "Django", "WebSockets"],
    color: "text-[#34D399]"
  },
  {
    name: "Databases",
    icon: <Database className="w-6 h-6" />,
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    color: "text-[#FBBF24]"
  },
  {
    name: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6" />,
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Prometheus"],
    color: "text-[#A78BFA]"
  },
  {
    name: "Architecture",
    icon: <GitBranch className="w-6 h-6" />,
    skills: ["Microservices", "Event-Driven", "Data-Driven", "OOP", "TDD", "SOLID", "DDD"],
    color: "text-[#F87171]"
  }
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen relative py-20 px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Technical Arsenal
          </h2>
          <p className="text-gray-400">Tools & technologies I wield with expertise</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${category.color} bg-white/10`}>
                  {category.icon}
                </div>
                <h3 className={`text-2xl font-semibold ${category.color}`}>
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    <div className={`w-2 h-2 rounded-full ${category.color} animate-pulse`} />
                    <span className="text-gray-300 font-mono text-sm">{skill}</span>
                  </div>
                ))}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}