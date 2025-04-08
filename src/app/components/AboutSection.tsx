/* eslint-disable react/no-unescaped-entities */

'use client';

import { Code, Cpu, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import Link from 'next/link';

export default function AboutSection() {
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  const stats = useMemo(() => [
    { value: '500+', label: 'LeetCode Solutions', icon: <Code className="w-5 h-5" /> },
    { value: '1+', label: 'Years Experience', icon: <Cpu className="w-5 h-5" /> },
    { value: '∞', label: 'Curiosity', icon: <Rocket className="w-5 h-5" /> },
  ], []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#1E293B] to-[#0F172A]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl w-full"
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-300"
          >
            <p>
              I'm a <span className="text-primary font-semibold">passionate Software Engineer</span> with 1+ years
              of hands-on experience building high-performance, scalable web applications. I’ve solved over 500
              LeetCode problems and worked on end-to-end application development projects that focus on efficiency
              and maintainability.
            </p>
            <p>
              At Nirmaan, I transformed a legacy codebase by implementing multi-layer caching and AI-driven analytics,
              achieving significant improvements in performance and reliability. I also thrive on collaborative learning,
              continuously exploring emerging technologies to bridge innovation with practical impact.
            </p>
            <motion.button
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link 
                href="/resume" 
                className="flex items-center gap-2 px-8 py-3 bg-primary/80 text-white font-semibold rounded-md shadow hover:bg-primary transition"
              >
                View Resume
                <Rocket className="w-4 h-4 transition-transform" />
              </Link>
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={variants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3 text-primary">
                  {stat.icon}
                  <span className="text-2xl font-bold">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
