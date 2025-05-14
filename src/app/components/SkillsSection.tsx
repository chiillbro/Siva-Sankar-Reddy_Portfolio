/* eslint-disable @typescript-eslint/no-unused-vars */

// app/components/SkillsSection.tsx
// 'use client';

// // import { MotionDiv } from '@/components/motion-div';
// import { Code, Cloud, Database, Cpu, Palette, GitBranch } from 'lucide-react';
// import { cn } from '../lib/utils';
// import { motion } from 'framer-motion';

// const categories = [
//   {
//     name: "Languages",
//     icon: <Code className="w-6 h-6" />,
//     skills: ["Python", "Go", "TypeScript", "SQL", "JavaScript"],
//     color: "text-[#7DD3FC]"
//   },
//   {
//     name: "Frontend",
//     icon: <Palette className="w-6 h-6" />,
//     skills: ["React", "Next", "Redux", "Tailwind", "Framer-motion"],
//     color: "text-[#F472B6]"
//   },
//   {
//     name: "Backend",
//     icon: <Cpu className="w-6 h-6" />,
//     skills: ["Node.js", "Flask", "Django", "WebSockets"],
//     color: "text-[#34D399]"
//   },
//   {
//     name: "Databases",
//     icon: <Database className="w-6 h-6" />,
//     skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
//     color: "text-[#FBBF24]"
//   },
//   {
//     name: "Cloud & DevOps",
//     icon: <Cloud className="w-6 h-6" />,
//     skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Prometheus"],
//     color: "text-[#A78BFA]"
//   },
//   {
//     name: "Architecture",
//     icon: <GitBranch className="w-6 h-6" />,
//     skills: ["Microservices", "Event-Driven", "Data-Driven", "OOP", "TDD", "SOLID", "DDD"],
//     color: "text-[#F87171]"
//   }
// ];

// export default function SkillsSection() {
//   return (
//     <section
//       id="skills"
//       className="min-h-screen relative py-20 px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]"
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mb-20 text-center"
//         >
//           <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//             Technical Arsenal
//           </h2>
//           <p className="text-gray-400">Tools & technologies I wield with expertise</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {categories.map((category, index) => (
//             <motion.div
//               key={category.name}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/30 transition-all"
//             >
//               <div className="flex items-center gap-4 mb-6">
//                 <div className={`p-3 rounded-xl ${category.color} bg-white/10`}>
//                   {category.icon}
//                 </div>
//                 <h3 className={`text-2xl font-semibold ${category.color}`}>
//                   {category.name}
//                 </h3>
//               </div>

//               <div className="grid grid-cols-2 gap-3">
//                 {category.skills.map((skill) => (
//                   <div
//                     key={skill}
//                     className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
//                   >
//                     <div className={`w-2 h-2 rounded-full ${category.color} animate-pulse`} />
//                     <span className="text-gray-300 font-mono text-sm">{skill}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Hover effect */}
//               <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-50 blur-xl transition-opacity" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// ************************************* Version 2 *********************************************** //

// app/components/SkillsSection.tsx
// 'use client';

// import { motion } from 'framer-motion';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Server, Smartphone, Code, Database, Cloud, GitBranch, Settings, Construction } from 'lucide-react'; // Example icons

// // Animation variants
// // Animation variants
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };
// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
// };

// // --- Skills Data ---
// // Categorize skills for better organization
// const skillCategories = [
//   {
//     title: "Frontend Development",
//     icon: Smartphone,
//     skills: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "State Management (Zustand, Redux)", "Data Fetching (Tanstack Query)"],
//   },
//   {
//     title: "Backend Development",
//     icon: Server,
//     skills: ["Node.js", "NestJS", "Express.js", "Python (Flask, FastAPI)", "Go (Golang)", "RESTful APIs", "WebSockets (Socket.IO)", "JWT Auth"],
//   },
//   {
//     title: "Databases & Caching",
//     icon: Database,
//     skills: ["PostgreSQL", "Prisma ORM", "Redis", "MongoDB", "MySQL", "Database Modeling", "Query Optimization"],
//   },
//   {
//     title: "Cloud & DevOps",
//     icon: Cloud,
//     skills: ["AWS (ECS Fargate, EC2, S3, Lambda, RDS)", "Docker", "Terraform (IaC)", "CI/CD (GitHub Actions)", "Containerization"],
//   },
//    {
//     title: "Architecture & Design",
//     icon: Construction, // Example icon
//     skills: ["System Design (HLD/LLD)", "API Design", "OOP/OOD", "SOLID Principles", "Design Patterns"],
//   },
//   {
//     title: "Tools & Workflow",
//     icon: GitBranch,
//     skills: ["Git", "GitHub", "Jira", "Postman", "VS Code", "Docker Desktop", "Agile Methodologies"],
//   },
//   // Optional: Add a "Familiar With" or "Exploring" category
//   // {
//   //   title: "Exploring",
//   //   icon: Settings,
//   //   skills: ["GraphQL", "Kubernetes", "Advanced AI/ML Integrations"],
//   // }
// ];
// // -------------------

// export default function SkillsSection() {
//   return (
//     <section
//       id="skills"
//       className="w-full py-16 md:py-24 px-4 lg:px-8 bg-muted/30 dark:bg-muted/5" // Match Experience background
//     >
//       <motion.div
//         className="max-w-6xl mx-auto"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//         variants={sectionVariants}
//       >
//         {/* Section Title */}
//         <motion.h2
//           variants={itemVariants}
//           className="text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center text-foreground"
//         >
//           My Tech Stack & Skills
//         </motion.h2>

//         {/* Skills Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {skillCategories.map((category) => (
//             <motion.div key={category.title} variants={itemVariants}>
//               <Card className="h-full border hover:border-primary/30 transition-colors duration-300">
//                 <CardHeader className="flex flex-row items-center gap-3 pb-3">
//                     <category.icon className="h-6 w-6 text-primary" />
//                     <CardTitle className="text-lg">{category.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="flex flex-wrap gap-2">
//                     {category.skills.map((skill) => (
//                       <li key={skill}>
//                          <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
//                             {skill}
//                          </span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// ************************************* Version 3 *********************************************** //

// 'use client';

// import { motion } from 'framer-motion';
// import { Code, Server, Database, Cloud, GitBranch, Construction, Palette, TestTubeDiagonal } from 'lucide-react';
// // import { Badge } from '@/components/ui/badge';
// import { cn } from '@/app/lib/utils';

// // --- Refined Skills Data with Proficiency/Focus ---
// // Level: 1=Core/Expert, 2=Proficient/Frequent Use, 3=Familiar/Used
// const coreSkills = [
//   { name: "TypeScript", icon: Code, level: 1 },
//   { name: "React", icon: Code, level: 1 },
//   { name: "Next.js", icon: Code, level: 1 },
//   { name: "Node.js", icon: Server, level: 1 },
//   { name: "NestJS", icon: Server, level: 1 },
//   { name: "PostgreSQL", icon: Database, level: 1 },
//   { name: "Docker", icon: Cloud, level: 1 },
//   { name: "AWS (Core)", icon: Cloud, level: 1 }, // Specify core services later
//   { name: "System Design", icon: Construction, level: 1 },
//   { name: "Git", icon: GitBranch, level: 1 },
// ];

// const proficientSkills = [
//    { name: "Python", icon: Code, level: 2 },
//    { name: "Go (Golang)", icon: Code, level: 2 },
//    { name: "Prisma", icon: Database, level: 2 },
//    { name: "Redis", icon: Database, level: 2 },
//    { name: "WebSockets", icon: Server, level: 2 },
//    { name: "Tailwind CSS", icon: Palette, level: 2 },
//    { name: "REST APIs", icon: Server, level: 2 },
//    { name: "CI/CD (GitHub Actions)", icon: Cloud, level: 2 },
//    { name: "Terraform (IaC)", icon: Cloud, level: 2 },
// ];

// const familiarSkills = [
//     { name: "Zustand/Redux", icon: Code, level: 3 },
//     { name: "Tanstack Query", icon: Code, level: 3 },
//     { name: "Flask/FastAPI", icon: Code, level: 3 },
//     { name: "Jest/RTL/Supertest", icon: TestTubeDiagonal, level: 3 },
//     { name: "MongoDB", icon: Database, level: 3 },
//     { name: "Agile/Scrum", icon: GitBranch, level: 3 },
//     // Add others like Microservices (Conceptual), Serverless (Conceptual) if desired
// ];
// // ------------------------------------------

// // Animation variants
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };

// const skillItemVariant = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 15 } }
// };

// // Helper for styling based on level
// const getSkillStyle = (level: number) => {
//     switch(level) {
//         case 1: return "border-primary bg-primary/10 text-primary-foreground dark:text-primary hover:shadow-primary/20 scale-105"; // Core
//         case 2: return "border-secondary bg-secondary/20 text-secondary-foreground"; // Proficient
//         case 3: return "border-muted bg-muted/10 text-muted-foreground opacity-80"; // Familiar
//         default: return "border-border bg-card";
//     }
// }

// export default function SkillsSection() {
//   return (
//     <section
//       id="skills"
//       className="w-full py-16 md:py-24 px-4 lg:px-8 bg-gradient-to-b from-background to-muted/10" // Subtle gradient background
//     >
//       <motion.div
//         className="max-w-5xl mx-auto" // Slightly wider
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.1 }}
//         variants={sectionVariants}
//       >
//         {/* Section Title */}
//         <motion.div variants={skillItemVariant} className="text-center mb-12 md:mb-16">
//              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">My Toolkit</h2>
//              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Technologies & methodologies I leverage to build robust solutions.</p>
//         </motion.div>

//         {/* Skills Cloud / Grouped Layout */}
//         <div className="space-y-10">
//              {/* Core Skills - Displayed more prominently */}
//              <motion.div variants={skillItemVariant}>
//                   <h3 className="text-xl font-semibold text-center mb-6 text-primary">Core Expertise</h3>
//                   <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
//                       {coreSkills.map((skill) => (
//                           <motion.div
//                               key={skill.name}
//                               variants={skillItemVariant}
//                               whileHover={{ y: -4 }} // Subtle lift on hover
//                               className={cn(
//                                   "flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium shadow-sm cursor-default transition-all duration-200",
//                                   getSkillStyle(skill.level)
//                               )}
//                           >
//                              <skill.icon className="h-4 w-4" />
//                               {skill.name}
//                           </motion.div>
//                       ))}
//                   </div>
//              </motion.div>

//              {/* Proficient Skills */}
//               <motion.div variants={skillItemVariant}>
//                   <h3 className="text-lg font-semibold text-center mb-6 text-foreground">Proficient With</h3>
//                    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3">
//                       {proficientSkills.map((skill) => (
//                            <motion.div
//                               key={skill.name}
//                               variants={skillItemVariant}
//                               whileHover={{ y: -3 }}
//                               className={cn(
//                                   "flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs cursor-default transition-all duration-200", // Slightly smaller, square-ish
//                                   getSkillStyle(skill.level)
//                               )}
//                           >
//                              <skill.icon className="h-3.5 w-3.5" />
//                              {skill.name}
//                           </motion.div>
//                       ))}
//                   </div>
//              </motion.div>

//               {/* Familiar Skills */}
//                <motion.div variants={skillItemVariant}>
//                   <h3 className="text-base font-medium text-center mb-5 text-muted-foreground">Familiar With</h3>
//                    <div className="flex flex-wrap justify-center items-center gap-2">
//                       {familiarSkills.map((skill) => (
//                            <motion.div
//                               key={skill.name}
//                               variants={skillItemVariant}
//                               whileHover={{ y: -2 }}
//                               className={cn(
//                                   "flex items-center gap-1 px-2.5 py-1 rounded-md border text-xs cursor-default transition-all duration-200",
//                                   getSkillStyle(skill.level)
//                               )}
//                           >
//                             {/* Maybe no icon for familiar skills to de-emphasize? */}
//                              {/* <skill.icon className="h-3 w-3" /> */}
//                              {skill.name}
//                           </motion.div>
//                       ))}
//                   </div>
//              </motion.div>

//         </div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Cloud,
  GitBranch,
  Construction,
  Palette,
  TestTubeDiagonal,
  BrainCircuit,
  Layers3,
  TerminalSquare,
  Share2,
  Zap,
  Workflow,
  PenTool,
  SearchCode,
  ShieldCheck,
  DatabaseZap,
  CodeXml,
  Lightbulb,
} from "lucide-react";
import { Badge } from "@/components/ui/badge"; // We'll use Badge for skills
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/app/lib/utils"; // Assuming utils.ts is in lib

// --- Updated Skills Data (Paste the skillSections array from above here) ---
// ... (aiGenAiSkills, backendSkills, etc. and skillSections array)

const aiGenAiSkills = [
  {
    name: "GenAI (RAG)",
    icon: BrainCircuit,
    level: 1,
    description: "Building context-aware Q&A systems.",
  },
  {
    name: "LangChain",
    icon: Layers3,
    level: 1,
    description: "Orchestrating LLM interactions and data pipelines.",
  },
  {
    name: "LLMs (Ollama, TinyLlama)",
    icon: BrainCircuit,
    level: 1,
    description: "Utilizing local and instruction-tuned models.",
  },
  {
    name: "Vector DBs (pgvector)",
    icon: DatabaseZap,
    level: 1,
    description: "Efficient semantic search and storage.",
  },
  {
    name: "Python (for AI/ML)",
    icon: Code,
    level: 1,
    description: "Primary language for AI development.",
  },
  {
    name: "Prompt Engineering",
    icon: PenTool,
    level: 2,
    description: "Crafting effective prompts for desired LLM outputs.",
  },
  {
    name: "Hugging Face",
    icon: Share2,
    level: 2,
    description: "Leveraging transformers and models.",
  },
  {
    name: "Embeddings",
    icon: Zap,
    level: 2,
    description: "Generating and using text embeddings.",
  },
];

const backendSkills = [
  {
    name: "Node.js",
    icon: Server,
    level: 1,
    description: "Core runtime for scalable backends.",
  },
  {
    name: "NestJS",
    icon: Server,
    level: 1,
    description: "Building modular and efficient Node.js applications.",
  },
  {
    name: "FastAPI",
    icon: Server,
    level: 1,
    description: "High-performance Python APIs (used in DocuMentor).",
  },
  {
    name: "TypeScript",
    icon: Code,
    level: 1,
    description: "Enhancing JavaScript with static typing.",
  },
  {
    name: "PostgreSQL",
    icon: Database,
    level: 1,
    description: "Robust relational database management.",
  },
  {
    name: "REST APIs",
    icon: Server,
    level: 1,
    description: "Designing and implementing RESTful services.",
  },
  {
    name: "Go (Golang)",
    icon: Code,
    level: 2,
    description: "For concurrent and high-performance services.",
  },
  {
    name: "WebSockets",
    icon: Share2,
    level: 2,
    description: "Enabling real-time bi-directional communication.",
  },
  {
    name: "Prisma ORM",
    icon: Database,
    level: 2,
    description: "Modern database toolkit for Node.js/TypeScript.",
  },
  {
    name: "JWT Auth",
    icon: ShieldCheck,
    level: 2,
    description: "Securing applications with JSON Web Tokens.",
  },
  {
    name: "MongoDB",
    icon: Database,
    level: 3,
    description: "NoSQL document database experience.",
  },
  {
    name: "Redis",
    icon: Database,
    level: 3,
    description: "In-memory data store for caching and queues.",
  },
];

const frontendSkills = [
  {
    name: "React",
    icon: Code,
    level: 1,
    description: "Building dynamic and interactive UIs.",
  },
  {
    name: "Next.js",
    icon: Code,
    level: 1,
    description: "Full-stack React framework for production.",
  },
  {
    name: "Tailwind CSS",
    icon: Palette,
    level: 1,
    description: "Utility-first CSS for rapid UI development.",
  },
  {
    name: "HTML/CSS",
    icon: Code,
    level: 1,
    description: "Fundamental web technologies.",
  },
  {
    name: "State (Zustand/Redux)",
    icon: Layers3,
    level: 2,
    description: "Managing complex application state.",
  },
  {
    name: "Shadcn/ui",
    icon: Palette,
    level: 2,
    description: "Reusable and accessible UI components.",
  },
  {
    name: "Tanstack Query",
    icon: Zap,
    level: 3,
    description: "Data fetching and caching.",
  },
];

const devOpsCloudSkills = [
  {
    name: "Docker",
    icon: Cloud,
    level: 1,
    description: "Containerizing applications for consistent environments.",
  },
  {
    name: "AWS (Core Services)",
    icon: Cloud,
    level: 1,
    description: "EC2, S3, ECS, Lambda for cloud solutions.",
  },
  {
    name: "CI/CD (GitHub Actions)",
    icon: Workflow,
    level: 2,
    description: "Automating build, test, and deployment pipelines.",
  },
  {
    name: "Vercel/Render/Fly.io",
    icon: Cloud,
    level: 2,
    description: "Modern platforms for web application deployment.",
  },
  {
    name: "Terraform (IaC)",
    icon: Construction,
    level: 3,
    description: "Managing infrastructure as code.",
  },
  {
    name: "Kubernetes (Conceptual)",
    icon: Cloud,
    level: 3,
    description: "Understanding container orchestration principles.",
  },
];

const dsAlgoTestingSkills = [
  {
    name: "Data Structures",
    icon: GitBranch,
    level: 1,
    description: "Efficient data organization and manipulation.",
  },
  {
    name: "Algorithms",
    icon: SearchCode,
    level: 1,
    description: "Problem-solving with optimal algorithms.",
  },
  {
    name: "System Design (HLD/LLD)",
    icon: Construction,
    level: 2,
    description: "Architecting scalable and robust systems.",
  },
  {
    name: "Testing (Jest, RTL)",
    icon: TestTubeDiagonal,
    level: 2,
    description: "Ensuring code quality and reliability.",
  },
  {
    name: "Git & GitHub",
    icon: GitBranch,
    level: 1,
    description: "Version control and collaborative development.",
  },
];

const skillSectionsData = [
  // Renamed to avoid conflict with component name
  {
    title: "AI & Generative AI",
    skills: aiGenAiSkills,
    icon: BrainCircuit,
    delay: 0.1,
  },
  {
    title: "Backend Development",
    skills: backendSkills,
    icon: Server,
    delay: 0.2,
  },
  {
    title: "Frontend Development",
    skills: frontendSkills,
    icon: Palette,
    delay: 0.3,
  },
  {
    title: "DevOps & Cloud",
    skills: devOpsCloudSkills,
    icon: Cloud,
    delay: 0.4,
  },
  {
    title: "Core CS & Testing",
    skills: dsAlgoTestingSkills,
    icon: CodeXml,
    delay: 0.5,
  },
];
// ------------------------------------------

// Animation variants
const sectionOverallVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const cardVariants = (delay: number) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 12, delay: delay },
  },
});

const skillBadgeVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 150, damping: 10 },
  },
};

// Helper for styling based on level (can be expanded with more visual cues)
const getSkillBadgeStyle = (level: number) => {
  switch (level) {
    case 1:
      return "border-primary/80 bg-primary/10 text-primary hover:bg-primary/20 font-medium"; // Core
    case 2:
      return "border-border bg-secondary/70 text-secondary-foreground hover:bg-secondary"; // Proficient
    case 3:
      return "border-muted-foreground/30 bg-muted/50 text-muted-foreground hover:bg-muted/80"; // Familiar
    default:
      return "border-border bg-card";
  }
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="w-full py-20 md:py-28 lg:py-32 px-4 bg-background"
    >
      <motion.div
        className="container mx-auto max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }} // Trigger when 5% is in view
        variants={sectionOverallVariants}
      >
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 80 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3"
          >
            My Technical Toolkit
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A blend of robust technologies and modern practices I use to
            architect and build innovative solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillSectionsData.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={cardVariants(section.delay)} // Stagger card animation
              className="flex" // ensure cards in a row try to match height
            >
              <Card className="w-full h-full flex flex-col bg-card/50 border-border/80 rounded-xl shadow-lg hover:shadow-primary/10 transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center space-x-3 pb-3 pt-5 px-5">
                  <section.icon className="h-7 w-7 text-primary" />
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <Separator className="mx-5 w-auto bg-border/50" />
                <CardContent className="pt-5 px-5 flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {section.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={skillBadgeVariant} // Individual badge animation
                        initial="hidden" // Animate badges as they appear
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.8 }}
                      >
                        <Badge
                          className={cn(
                            "px-2.5 py-1 text-xs sm:text-sm transition-all hover:scale-105 cursor-default shadow-sm",
                            getSkillBadgeStyle(skill.level)
                          )}
                          title={skill.description || skill.name} // Show description on hover
                        >
                          {skill.icon && (
                            <skill.icon className="h-3.5 w-3.5 mr-1.5 opacity-80" />
                          )}
                          {skill.name}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
