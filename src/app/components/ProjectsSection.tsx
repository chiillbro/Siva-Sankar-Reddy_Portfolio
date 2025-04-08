// app/components/ProjectsSection.tsx
'use client';

// import { MotionDiv } from '@/components/motion-div';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Database, MessageSquare } from 'lucide-react';
import {motion} from 'framer-motion';

const projects = [
  {
    title: "Movies Database",
    description: "MERN stack application with admin dashboard handling 50k+ monthly movie recommendations",
    tech: ["MERN", "Redux", "AWS"],
    metrics: "65% faster search results",
    links: {
      code: "https://github.com/chiillbro/Mern-Movies-Database",
      demo: "https://mern-movies-database.onrender.com/"
    },
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Real-Time Chat App",
    description: "Scalable messaging platform supporting 1k+ concurrent users with Socket.IO cluster",
    tech: ["MERN", "WebSockets", "Docker", "NGINX"],
    metrics: "30ms latency average",
    links: {
      code: "https://github.com/chiillbro/Chat-App",
      demo: "https://chat-app-kowb.onrender.com/"
    },
    icon: <MessageSquare className="w-6 h-6" />
  }
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen relative py-20 px-4 bg-gradient-to-b from-[#1E293B] to-[#0F172A]"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Featured Builds
          </h2>
          <p className="text-gray-400">Solutions that scale with impact</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/2 p-0.5 shadow-xl"
            >
              <div className="rounded-[15px] bg-gray-900/90 backdrop-blur-sm p-8 h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                  </div>
                  <span className="text-sm font-mono text-primary">
                    {project.metrics}
                  </span>
                </div>

                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary/80 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="gap-2 group-hover:bg-primary/10 transition-colors"
                    asChild
                  >
                    <a href={project.links.code} target="_blank" rel="noopener">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="gap-2 group-hover:bg-primary/10 transition-colors"
                    asChild
                  >
                    <a href={project.links.demo} target="_blank" rel="noopener">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}