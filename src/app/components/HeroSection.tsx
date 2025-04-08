/* eslint-disable react/no-unescaped-entities */

'use client';

import { motion } from 'framer-motion';
import { Code, Cloud, Cpu, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  // Updated tech stack array to include your key technologies
  const techStack = [
    { name: 'React', icon: <Code className="w-5 h-5" /> },
    { name: 'Next', icon: <Rocket className="w-5 h-5" /> },
    { name: 'Node.js', icon: <Cpu className="w-5 h-5" /> },
    { name: 'AWS', icon: <Cloud className="w-5 h-5" /> },
    { name: 'Python', icon: <Code className="w-5 h-5" /> },
    { name: 'Golang', icon: <Code className="w-5 h-5" /> },
  ];

  // Updated metrics that align with your experience level
  const metrics = [
    { value: '500+', label: 'LeetCode Problems' },
    { value: '1+', label: 'Years Experience' },
    { value: '5+', label: 'Projects Deployed' },
    { value: '∞', label: 'Passion' },
  ];

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]"
    >
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      {/* Animated Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,_#80808012_1px,transparent_1px),linear-gradient(to_bottom,_#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-white bg-gradient-to-r from-foreground to-foreground/70">
            Hi, I'm <span className="text-primary">Siva Sankar</span>
          </h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-lg md:text-xl">
                Software Engineer
              </span>
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="p-4 rounded-xl bg-background border border-primary dark:border-border backdrop-blur-sm"
              >
                <div className="text-2xl font-bold text-primary">{metric.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-primary dark:border-border text-sm hover:bg-accent/20 text-primary dark:text-white transition-colors"
              >
                {tech.icon}
                <span className="text-muted-foreground">{tech.name}</span>
              </div>
            ))}
          </motion.div>

          {/* Call-to-Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12"
          >
            <Button
              size="lg"
              className="group rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
              asChild
            >
              <Link href="#contact">
                <Rocket className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
                Let's Connect
              </Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              Actively seeking Software Engineering roles at top product companies.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
