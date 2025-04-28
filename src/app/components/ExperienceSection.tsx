/* eslint-disable @typescript-eslint/no-unused-vars */

// app/components/ExperienceSection.tsx
// 'use client';

// import { Briefcase, Rocket, Code2, ArrowRight } from 'lucide-react';
// import { cn } from '../lib/utils';
// import { motion } from 'framer-motion';

// const experiences = [
//   {
//     company: "Nirmaan",
//     role: "Software Engineer",
//     duration: "July 2024 – Present",
//     achievements: [
//       "Architected caching strategies (client-side React optimizations, Redis integration via Frappe framework, server caching), slashing API latency by 55% and improving app performance by 60%",
//       "Refactored 80% of legacy codebase built by interns, implementing SOLID principles and modular design to reduce technical debt by 45%",
//       "Spearheaded AI-driven analytics integration using Python to deliver real-time insights into projects, orders, and vendor metrics, enabling data-driven decision-making"
//     ],
//     tech: ["Frappe", "Python", "React", "Redis", "PostgreSQL", "Docker"],
//     icon: <Rocket className="w-5 h-5 text-primary" />
//   },
//   {
//     company: "Attica Gold",
//     role: "Full Stack Engineer",
//     duration: "Mar 2024 – July 2024",
//     achievements: [
//       "Engineered CCTV management system handling 50+ concurrent streams using MERN & OpenCV",
//       "Optimized video pipelines with FFmpeg, reducing bandwidth usage by 30%",
//       "Engineered AWS cloud solutions (S3, Lambda) to securely store and forward 10 TB+ footage monthly, achieving 99.9% uptime"
//     ],
//     tech: ["MERN", "Python", "OpenCV", "JWT", "FFmpeg", "Socket.IO", "AWS"],
//     icon: <Code2 className="w-5 h-5 text-primary" />
//   }
// ];

// export default function ExperienceSection() {
//   return (
//     <section
//       id="experience"
//       className="min-h-screen relative flex flex-col items-center py-20 px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
//     >
//       <div className="max-w-6xl w-full">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mb-20"
//         >
//           <h2 className="text-4xl font-bold text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//             Professional Journey
//           </h2>
//           <p className="text-center text-gray-400">Where code meets impact</p>
//         </motion.div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-primary/20 to-transparent -translate-x-1/2" />

//           {experiences.map((exp, index) => (
//             <motion.div
//               key={exp.company}
//               initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className={cn(
//                 "relative mb-16 w-full",
//                 index % 2 === 0 ? "pl-8 md:pl-0 md:pr-8" : "pr-8 md:pr-0 md:pl-8"
//               )}
//             >
//               <div className={cn(
//                 "relative group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm",
//                 "hover:border-primary/30 transition-all",
//                 index % 2 === 0 ? "md:ml-24" : "md:mr-24"
//               )}>
//                 {/* Timeline dot */}
//                 <div className={cn(
//                   "absolute top-8 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary/50",
//                   "flex items-center justify-center -translate-y-1/2",
//                   index % 2 === 0 ? "-left-8 md:-left-12" : "-right-8 md:-right-12"
//                 )}>
//                   {exp.icon}
//                 </div>

//                 <div className="flex flex-col md:flex-row justify-between gap-6 mb-4">
//                   <div>
//                     <h3 className="text-2xl font-semibold text-primary">{exp.role}</h3>
//                     <p className="text-xl font-medium text-gray-300">{exp.company}</p>
//                   </div>
//                   <p className="text-sm text-teal-400 font-mono">{exp.duration}</p>
//                 </div>

//                 <ul className="space-y-3 mb-6">
//                   {exp.achievements.map((item, i) => (
//                     <li key={i} className="flex gap-3 text-gray-400">
//                       <ArrowRight className="flex-shrink-0 w-5 h-5 mt-1 text-primary" />
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <div className="flex flex-wrap gap-2">
//                   {exp.tech.map((tech) => (
//                     <span 
//                       key={tech}
//                       className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-mono"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }








// ************************************* Version 2 *********************************************** //

// app/components/ExperienceSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Briefcase, Building, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge'; // Use Badge for tech tags

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, x: -30 }, // Animate from left
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 80 } },
};

// --- Experience Data ---
// Move data out for clarity, or fetch if needed later
const experiences = [
  {
    role: "Software Engineer",
    company: "Nirmaan (Stratos Infra Technologies)",
    logo: "/path/to/nirmaan-logo.png", // Optional: Add company logos
    location: "Bengaluru, India",
    period: "July 2024 – Present",
    description: [ // Use bullet points for key achievements
      "Accelerated application performance by **60%** and slashed API latency by **55%** through multi-layer caching (React Query, Redis).",
      "Engineered high-performance data table component with server-side operations, improving rendering speed by **60%** for large datasets.",
      "Owned and delivered real-time internal chat & context-aware chatbot using **WebSockets** and Python backend logic.",
      "Modernized codebase (~80% refactored) using TypeScript, SOLID principles, reducing technical debt by **45%**.",
      "Integrated AI analytics (Python) for real-time operational insights.",
    ],
    tags: ["TypeScript", "React", "NestJS", "Python", "Redis", "PostgreSQL", "WebSockets", "Performance Optimization", "Refactoring", "AI/ML"],
  },
  {
    role: "Full Stack Engineer",
    company: "Attica Gold Company",
    logo: "/path/to/attica-logo.png", // Optional
    location: "Bengaluru, India",
    period: "March 2024 – July 2024",
    description: [
      "Developed Proof-of-Concept CCTV management system (MERN, Flask, OpenCV).",
      "Leveraged **AWS (S3, Lambda)** for scalable video footage storage (>10TB/month).",
      "Secured application access using **JWT** authentication and RBAC.",
    ],
    tags: ["React", "Node.js", "Express", "MongoDB", "Python", "Flask", "OpenCV", "AWS", "JWT"],
  },
  // Add more experiences here
];
// -----------------------


export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full py-16 md:py-24 px-4 lg:px-8 bg-muted/30 dark:bg-muted/5" // Slightly different background
    >
      <motion.div
        className="max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger when 10% visible
        variants={sectionVariants}
      >
        {/* Section Title */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-foreground"
        >
          My Journey
        </motion.h2>

        {/* Timeline Container */}
        <div className="relative pl-6 border-l-2 border-border/50">
          {/* Timeline line decorator */}
          <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 pl-8 group" // Added group for hover effects
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-13px] top-[5px] w-6 h-6 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-primary" />
              </div>

              {/* Content Box */}
              <div className="p-5 rounded-lg bg-card border border-transparent group-hover:border-primary/30 transition-colors duration-300 shadow-sm group-hover:shadow-md">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <span className="text-sm font-medium text-primary">{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
                      <Building className="h-4 w-4" />
                      <span>{exp.company}</span>
                      <span className="text-border">|</span>
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                  </div>

                  <ul className="list-disc list-outside space-y-2 pl-5 text-muted-foreground text-base marker:text-primary">
                      {exp.description.map((point, pIndex) => (
                          <li key={pIndex}>{point}</li>
                      ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="font-normal">{tag}</Badge>
                      ))}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}