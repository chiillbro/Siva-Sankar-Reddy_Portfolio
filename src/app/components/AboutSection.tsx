// /* eslint-disable react/no-unescaped-entities */

// 'use client';

// import { Code, Cpu, Rocket } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useMemo } from 'react';
// import Link from 'next/link';

// export default function AboutSection() {
//   const variants = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//   };

//   const stats = useMemo(() => [
//     { value: '500+', label: 'LeetCode Solutions', icon: <Code className="w-5 h-5" /> },
//     { value: '1+', label: 'Years Experience', icon: <Cpu className="w-5 h-5" /> },
//     { value: '∞', label: 'Curiosity', icon: <Rocket className="w-5 h-5" /> },
//   ], []);

//   return (
//     <section
//       id="about"
//       className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#1E293B] to-[#0F172A]"
//     >
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="max-w-6xl w-full"
//       >
//         <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//           About Me
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             variants={variants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className="space-y-6 text-lg text-gray-300"
//           >
//             <p>
//               I'm a <span className="text-primary font-semibold">passionate Software Engineer</span> with 1+ years
//               of hands-on experience building high-performance, scalable web applications. I’ve solved over 500
//               LeetCode problems and worked on end-to-end application development projects that focus on efficiency
//               and maintainability.
//             </p>
//             <p>
//               At Nirmaan, I transformed a legacy codebase by implementing multi-layer caching and AI-driven analytics,
//               achieving significant improvements in performance and reliability. I also thrive on collaborative learning,
//               continuously exploring emerging technologies to bridge innovation with practical impact.
//             </p>
//             <motion.button
//               initial={{ scale: 0.8 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Link
//                 href="/resume"
//                 className="flex items-center gap-2 px-8 py-3 bg-primary/80 text-white font-semibold rounded-md shadow hover:bg-primary transition"
//               >
//                 View Resume
//                 <Rocket className="w-4 h-4 transition-transform" />
//               </Link>
//             </motion.button>
//           </motion.div>

//           <div className="grid grid-cols-2 gap-4">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 variants={variants}
//                 initial="initial"
//                 whileInView="animate"
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.2 }}
//                 className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors"
//               >
//                 <div className="flex items-center gap-3 mb-3 text-primary">
//                   {stat.icon}
//                   <span className="text-2xl font-bold">{stat.value}</span>
//                 </div>
//                 <p className="text-gray-400 text-sm">{stat.label}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// ******************************************** Section 2 ***********************************************

// app/components/AboutSection.tsx
/* eslint-disable react/no-unescaped-entities */
// 'use client';

// import { Code, Cpu, Activity, Download, Briefcase, GraduationCap } from 'lucide-react'; // Added more icons
// import { motion } from 'framer-motion';
// import { Button } from '@/components/ui/button'; // Import Button
// import Link from 'next/link'; // Use Link for internal nav if needed
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Use Card for stats

// // Animation variants for sections/items
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
// };

// export default function AboutSection() {
//   // Stats moved from Hero
//   const stats = [
//     { value: '1+', label: 'Years Experience', icon: <Briefcase className="w-6 h-6 text-primary" /> },
//     { value: '500+', label: 'DS&A Problems Solved', icon: <Code className="w-6 h-6 text-primary" /> },
//     { value: 'Full-Stack', label: 'Web Development', icon: <Cpu className="w-6 h-6 text-primary" /> },
//     { value: 'B.Tech Robotics', label: 'Education', icon: <GraduationCap className="w-6 h-6 text-primary" /> }, // Example Education
//   ];

//   return (
//     <section
//       id="about"
//       className="min-h-screen w-full py-16 md:py-24 px-4 lg:px-8 bg-background" // Use standard background
//     >
//       <motion.div
//         className="max-w-6xl mx-auto"
//         initial="hidden"
//         whileInView="visible" // Animate when section scrolls into view
//         viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% visible
//         variants={sectionVariants}
//       >
//         {/* Section Title */}
//         <motion.h2
//           variants={itemVariants}
//           className="text-3xl md:text-4xl font-bold mb-12 text-center text-foreground"
//         >
//           About Me
//         </motion.h2>

//         {/* Content Grid */}
//         <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

//           {/* Left Column: Text */}
//           <motion.div variants={itemVariants} className="space-y-5 text-base md:text-lg text-muted-foreground">
//             <p>
//               I'm a results-oriented Software Engineer driven by a passion for building efficient, scalable, and user-centric web applications. With over a year of professional experience and a strong foundation in computer science principles (backed by 500+ DS&A problems solved on platforms like LeetCode), I excel in tackling complex challenges across the full stack.
//             </p>
//             <p>
//               My recent work involved significantly boosting application performance (<span className="font-medium text-foreground">~60% improvement</span>) through strategic caching and code refactoring, designing real-time features with WebSockets, and integrating AI-driven analytics. I thrive in collaborative environments and am constantly learning new technologies to deliver impactful solutions.
//             </p>
//             <p>
//               Currently seeking opportunities where I can leverage my skills in <span className="font-medium text-foreground">React, Next.js, TypeScript, Node.js, NestJS, Python, Go,</span> and <span className="font-medium text-foreground">AWS</span> to contribute to innovative products at a leading tech company.
//             </p>
//             {/* Link to Resume (ensure you have a /resume page or PDF link) */}
//             <Button asChild size="lg" className='mt-4'>
//                 {/* Replace with your actual resume link/page */}
//                  <a href="/SivaSankarReddy_Resume.pdf" download>
//                     <Download className="mr-2 h-4 w-4" /> Download Resume
//                  </a>
//             </Button>
//           </motion.div>

//           {/* Right Column: Stats Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={stat.label}
//                 variants={itemVariants} // Apply item animation
//                 custom={index} // Can be used for staggered delay if needed in parent variant
//               >
//                  <Card className="text-center h-full hover:border-primary/50 transition-colors">
//                    <CardHeader>
//                      <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit">
//                          {stat.icon}
//                      </div>
//                    </CardHeader>
//                    <CardContent>
//                      <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
//                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
//                    </CardContent>
//                  </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// ************************************************ Version 3 ******************************************************* //

/* eslint-disable react/no-unescaped-entities */
// "use client";

// import {
//   Zap,
//   CodeXml,
//   BrainCircuit,
//   GraduationCap,
//   Rocket,
// } from "lucide-react"; // Different icons
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator"; // Use Separator
// import Link from "next/link";

// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
// };

// export default function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="w-full py-20 md:py-32 px-4 lg:px-8 bg-background" // Standard background
//     >
//       <motion.div
//         className="max-w-4xl mx-auto" // Centered content
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={sectionVariants}
//       >
//         {/* Section Title (Optional Subtitle) */}
//         <motion.div
//           variants={itemVariants}
//           className="text-center mb-12 md:mb-16"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
//             My Approach
//           </h2>
//           <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
//             From optimizing backend performance to crafting intuitive
//             interfaces, I focus on building robust and scalable solutions.
//           </p>
//         </motion.div>

//         {/* Content Area */}
//         <motion.div
//           variants={itemVariants}
//           className="space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed"
//         >
//           <p>
//             For me, software engineering is about the continuous pursuit of
//             better solutions. I get a kick out of dissecting complex problems,
//             whether it's architecting a real-time system on AWS Fargate,
//             slashing API latency by{" "}
//             <strong className="text-foreground">over 50%</strong> through
//             multi-layer caching, or refactoring legacy code into maintainable
//             modules. It's the challenge of translating requirements into clean,
//             efficient, and testable code that drives me.
//           </p>
//           <Separator className="my-6 bg-border/50" />
//           <p>
//             My foundation is built on solid Computer Science principles
//             (sharpened by{" "}
//             <strong className="text-foreground">500+ DS&A problems</strong>) and
//             hands-on experience across the stack –{" "}
//             <strong className="text-foreground">React/Next.js</strong> on the
//             frontend,{" "}
//             <strong className="text-foreground">Node.js/NestJS</strong> (along
//             with Python/Go) on the backend, and deploying containerized
//             applications using{" "}
//             <strong className="text-foreground">Docker & CI/CD</strong>. I enjoy
//             the entire lifecycle, from initial design to deployment and beyond.
//           </p>
//           <Separator className="my-6 bg-border/50" />
//           <p>
//             I'm particularly interested in the intersection of efficient systems
//             and intelligent features. Exploring how AI/ML can augment
//             applications, like the context-aware chatbot and analytics
//             integrations I worked on at Nirmaan, is an area I'm excited to delve
//             deeper into. I'm actively looking for{" "}
//             <strong className="text-foreground">SDE 1/2 roles</strong> where I
//             can apply this blend of performance focus and innovative thinking
//             within a product-driven environment.
//           </p>

//           {/* Stats Integrated Subtly (Optional Visuals) */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 text-center">
//             <motion.div variants={itemVariants} className="space-y-1">
//               <Zap className="mx-auto h-6 w-6 text-primary" />
//               <p className="text-xs text-muted-foreground">Performance Focus</p>
//             </motion.div>
//             <motion.div variants={itemVariants} className="space-y-1">
//               <CodeXml className="mx-auto h-6 w-6 text-primary" />
//               <p className="text-xs text-muted-foreground">Full-Stack Build</p>
//             </motion.div>
//             <motion.div variants={itemVariants} className="space-y-1">
//               <BrainCircuit className="mx-auto h-6 w-6 text-primary" />
//               <p className="text-xs text-muted-foreground">Problem Solving</p>
//             </motion.div>
//             <motion.div variants={itemVariants} className="space-y-1">
//               <GraduationCap className="mx-auto h-6 w-6 text-primary" />
//               <p className="text-xs text-muted-foreground">
//                 B.Tech Robotics
//               </p>{" "}
//               {/* Update with correct degree */}
//             </motion.div>
//           </div>

//           <motion.div variants={itemVariants} className="text-center pt-8">
//             <Button asChild size="lg">
//               <Link href="/resume">
//                 View Resume
//                 <Rocket className="w-4 h-4 transition-transform" />
//               </Link>
//             </Button>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  Zap,
  CodeXml,
  BrainCircuit,
  Rocket,
  DatabaseZap,
  Layers3,
} from "lucide-react"; // Added DatabaseZap, Layers3
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Badge } from "@/components/ui/badge"; // For skills highlight

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, duration: 0.5 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 13 },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full py-20 md:py-28 lg:py-32 px-4 bg-muted/30" // Slightly different background for contrast
    >
      <motion.div
        className="container mx-auto max-w-3xl" // Centered and constrained width for readability
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <motion.div
          variants={itemVariants}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3">
            Crafting Intelligent Software
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I bridge robust engineering with cutting-edge AI to build solutions
            that are not only performant but also smart and intuitive.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed bg-card p-6 sm:p-8 rounded-xl shadow-lg"
        >
          <p>
            My journey as a software engineer is fueled by a passion for
            transforming complex challenges into elegant, high-impact solutions.
            I thrive on the entire development lifecycle, from architecting{" "}
            <strong className="text-primary font-semibold">
              scalable backend systems
            </strong>{" "}
            (Node.js/NestJS, Python/FastAPI) and optimizing database
            interactions (PostgreSQL/pgvector, MongoDB) to crafting{" "}
            <strong className="text-primary font-semibold">
              dynamic user interfaces
            </strong>{" "}
            with React/Next.js.
          </p>

          <p>
            I've demonstrated a knack for significantly boosting application
            performance—achieving over a{" "}
            <strong className="text-foreground font-medium">
              60% improvement
            </strong>{" "}
            through strategic caching—and have taken full ownership of
            delivering critical features like real-time communication systems
            and context-aware chatbots. My commitment to clean code and SOLID
            principles is evident in my work refactoring legacy systems to
            enhance maintainability.
          </p>

          <Separator className="my-6 bg-border/40" />

          <p>
            The current wave of{" "}
            <strong className="text-primary font-semibold">
              Generative AI
            </strong>{" "}
            has deeply captured my interest. I'm actively building applications
            like{" "}
            <strong className="text-foreground font-medium">DocuMentor</strong>,
            a RAG-based Q&A assistant, leveraging LangChain, LLMs (via Ollama),
            and vector databases. This hands-on experience is solidifying my
            skills in applying AI to create tangible value. With a strong
            foundation in Data Structures & Algorithms (
            <strong className="text-foreground font-medium">
              500+ LeetCode
            </strong>
            ) and a drive for continuous learning, I'm excited to bring
            innovative solutions to a forward-thinking product company.
          </p>

          <div className="pt-4">
            <h4 className="text-md font-semibold mb-2 text-foreground">
              Key Technical Areas:
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "GenAI (RAG, LangChain)",
                "Full-Stack Web Dev",
                "System Design",
                "API Development",
                "Cloud & DevOps",
                "Database Optimization",
                "DS & Algorithms",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm font-normal"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="text-center mt-12 md:mt-16"
        >
          <Button
            asChild
            size="lg"
            className="group text-base shadow-md hover:shadow-primary/30 transition-shadow"
          >
            <Link href="#contact">
              Let's Connect{" "}
              <Rocket className="ml-2 h-4 w-4 group-hover:rotate-[15deg] transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
