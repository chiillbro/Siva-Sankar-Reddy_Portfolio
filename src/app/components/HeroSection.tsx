// /* eslint-disable react/no-unescaped-entities */

// 'use client';

// import { motion } from 'framer-motion';
// import { Code, Cloud, Cpu, Rocket } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// export default function HeroSection() {
//   // Updated tech stack array to include your key technologies
//   const techStack = [
//     { name: 'React', icon: <Code className="w-5 h-5" /> },
//     { name: 'Next', icon: <Rocket className="w-5 h-5" /> },
//     { name: 'Node.js', icon: <Cpu className="w-5 h-5" /> },
//     { name: 'AWS', icon: <Cloud className="w-5 h-5" /> },
//     { name: 'Python', icon: <Code className="w-5 h-5" /> },
//     { name: 'Golang', icon: <Code className="w-5 h-5" /> },
//   ];

//   // Updated metrics that align with your experience level
//   const metrics = [
//     { value: '500+', label: 'LeetCode Problems' },
//     { value: '1+', label: 'Years Experience' },
//     { value: '5+', label: 'Projects Deployed' },
//     { value: '∞', label: 'Passion' },
//   ];

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen max-sm:pt-26 pb-6 flex items-center justify-center text-center overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A]"
//     >
//       {/* Gradient Background Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

//       {/* Animated Grid Pattern Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,_#80808012_1px,transparent_1px),linear-gradient(to_bottom,_#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

//       <div className="relative max-w-6xl px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-white bg-gradient-to-r from-foreground to-foreground/70">
//             Hi, I'm <span className="text-primary">Siva Sankar</span>
//           </h1>

//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             className="mt-6"
//           >
//             <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
//               <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-lg md:text-xl">
//                 Software Engineer
//               </span>
//             </div>
//           </motion.div>

//           {/* Metrics Grid */}
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
//             {metrics.map((metric, index) => (
//               <motion.div
//                 key={metric.label}
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.6 + index * 0.1 }}
//                 className="p-4 rounded-xl bg-background border border-primary dark:border-border backdrop-blur-sm"
//               >
//                 <div className="text-2xl font-bold text-primary">{metric.value}</div>
//                 <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Tech Stack Badges */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1 }}
//             className="flex flex-wrap justify-center gap-3 mt-8"
//           >
//             {techStack.map((tech) => (
//               <div
//                 key={tech.name}
//                 className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-primary dark:border-border text-sm hover:bg-accent/20 text-primary dark:text-white transition-colors"
//               >
//                 {tech.icon}
//                 <span className="text-muted-foreground">{tech.name}</span>
//               </div>
//             ))}
//           </motion.div>

//           {/* Call-to-Action Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2 }}
//             className="mt-12"
//           >
//             <Button
//               size="lg"
//               className="group rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20"
//               asChild
//             >
//               <Link href="#contact">
//                 <Rocket className="mr-2 h-5 w-5 group-hover:rotate-45 transition-transform" />
//                 Let's Connect
//               </Link>
//             </Button>
//             <p className="mt-4 text-sm text-muted-foreground">
//               Actively seeking Software Engineering roles at top product companies.
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// **************************************** Version 2 ****************************************** //

// app/components/HeroSection.tsx
/* eslint-disable react/no-unescaped-entities */
// 'use client';

// import { motion, useScroll, useTransform } from 'framer-motion'; // Import more hooks
// import { Code, Database, Cloud, Cpu, Rocket, ArrowDown } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import { Badge } from '@/components/ui/badge';

// // Simplified stack, focus on core backend/frontend/cloud
// const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Golang', 'PostgreSQL', 'Docker', 'AWS'];

// export default function HeroSection() {
//     // Parallax effect for background elements on scroll (optional)
//     const { scrollYProgress } = useScroll();
//     const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']); // Move background elements slower

//     // Animation variants
//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.1, delayChildren: 0.2 }
//         }
//     };
//     const itemVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
//     };

//   return (
//     // Use section for semantics, ensure enough padding top for navbar
//     <section
//       id="home" // Changed ID to home
//       className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-4 pt-28 pb-16 md:pt-32" // Adjusted padding
//     >
//         {/* Optional: Subtle Animated background elements (move slower on scroll) */}
//         <motion.div
//             className="absolute inset-0 z-[-1] opacity-20 dark:opacity-10"
//             style={{ y }} // Apply parallax scroll
//         >
//             {/* Add SVG shapes, gradients, or particle effects here */}
//              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full filter blur-3xl animate-pulse"></div>
//              <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-secondary/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
//         </motion.div>

//       <motion.div
//         className="relative z-10 max-w-4xl" // Increased max-width
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//           {/* Title Badge */}
//           <motion.div variants={itemVariants}>
//                 <Badge variant="outline" className="py-1 px-4 border-primary/30 text-sm sm:text-base">
//                     Software Engineer | Full-Stack Developer
//                 </Badge>
//           </motion.div>

//           {/* Main Heading */}
//           <motion.h1
//             variants={itemVariants}
//             className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground"
//            >
//             Hi, I'm <span className="text-primary whitespace-nowrap">Siva Sankar Reddy</span>
//           </motion.h1>

//           {/* Sub-heading / Bio */}
//           <motion.p
//             variants={itemVariants}
//             className="mt-4 md:mt-6 max-w-xl mx-auto text-base sm:text-lg md:text-xl text-muted-foreground"
//           >
//             I build scalable, real-time web applications with a focus on performance and robust architecture. {/* Keep the description of what you do */}
//             <span className="block mt-2"> {/* Add a block span for separation */}
//               Currently seeking challenging SDE 1/2 opportunities at innovative, product-driven companies where I can contribute to impactful solutions.
//             </span>
//           </motion.p>

//           {/* Tech Stack Pills */}
//           <motion.div
//              variants={itemVariants}
//              className="flex flex-wrap justify-center gap-2 mt-8"
//             >
//             {techStack.map((tech) => (
//               <Badge key={tech} variant="secondary" className="px-3 py-1 text-xs sm:text-sm font-medium">
//                 {tech}
//               </Badge>
//             ))}
//           </motion.div>

//           {/* Call-to-Action Buttons */}
//           <motion.div
//             variants={itemVariants}
//             className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
//           >
//             <Button
//               size="lg"
//               className="group rounded-md px-6 py-3 text-base w-full sm:w-auto" // Slightly smaller, standard radius
//               asChild
//             >
//               <Link href="#projects">
//                 View Projects
//                 <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </Button>
//              <Button
//                 size="lg"
//                 variant="outline"
//                 className="group rounded-md px-6 py-3 text-base w-full sm:w-auto"
//                 asChild
//              >
//                 <Link href="#contact">
//                     Get In Touch
//                 </Link>
//              </Button>
//           </motion.div>

//        </motion.div>

//         {/* Scroll Down Hint (Optional) */}
//         <motion.div
//              initial={{ opacity: 0 }}
//              animate={{ opacity: 1 }}
//              transition={{ delay: 1.5, duration: 1 }}
//              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//          >
//             <ArrowDown className="h-6 w-6 text-muted-foreground animate-bounce" />
//          </motion.div>
//     </section>
//   );
// }

// *********************************** Version 3 ********************************************** //

/* eslint-disable react/no-unescaped-entities */
// "use client";

// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// // Optional: Import a library for particle effects or use CSS
// // import Particles from 'react-tsparticles'; // Example if using ts-particles

// export default function HeroSection() {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { delay: 0.1, duration: 0.5 } },
//   };

//   const textVariant = (delay: number) => ({
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { delay: delay, type: "spring", stiffness: 80 },
//     },
//   });

//   return (
//     <section
//       id="home"
//       className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-4 pt-24 pb-16 md:pt-32" // Adjusted padding
//     >
//       {/* --- Subtle Background Effect --- */}
//       {/* Example: Static grid + subtle moving dots or use a particle library */}
//       <div className="absolute inset-0 z-[-2] bg-background" />
//       <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,oklch(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.2)_1px,transparent_1px)] bg-[size:30px_30px] mask-gradient" />
//       {/* Add ts-particles or similar here if desired */}
//       {/* ----------------------------- */}

//       <motion.div
//         className="relative z-10 max-w-3xl" // Slightly narrower focus
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {/* Main Heading */}
//         <motion.h1
//           variants={textVariant(0.3)}
//           className="text-4xl sm:text-5xl md:text-6xl font-bold !leading-tight tracking-tighter text-foreground" // Use !leading-tight for closer lines
//         >
//           I'm <span className="text-primary">Siva Sankar Reddy</span>.<br /> I
//           build <span className="whitespace-nowrap">performant & scalable</span>{" "}
//           web solutions.
//         </motion.h1>

//         {/* Concise Bio / Philosophy */}
//         <motion.p
//           variants={textVariant(0.5)}
//           className="mt-6 max-w-lg mx-auto text-md sm:text-lg text-muted-foreground"
//         >
//           Driven by the challenge of solving complex problems, from optimizing
//           system architecture to crafting seamless user experiences. Always
//           learning, always building.
//           {/* Alternative inspired by your example:
//             "Fueled by the challenge, I engineer efficient systems and intuitive interfaces. From backend architecture to frontend finesse—I love bringing complex ideas to life through code."
//             */}
//         </motion.p>

//         {/* Interactive Element - Example: Typing Effect (requires a library like react-type-animation) */}
//         {/* Or a simple code block display */}
//         <motion.div
//           variants={textVariant(0.7)}
//           className="mt-8 font-mono text-xs sm:text-sm text-left bg-card border rounded-md p-4 max-w-md mx-auto shadow-sm"
//         >
//           <span className="text-muted-foreground">{">"}</span>{" "}
//           <span className="text-primary">currentStack</span> = [ <br />
//           <span className="pl-4">"React", "Next.js", "TypeScript",</span>
//           <br />
//           <span className="pl-4">"Node.js", "NestJS", "PostgreSQL",</span>
//           <br />
//           <span className="pl-4">"Docker", "AWS", "Go", "Python"</span> <br />
//           ];
//           <br />
//           <span className="text-muted-foreground">{">"}</span>{" "}
//           <span className="text-primary">status</span> = "Actively seeking SDE
//           1/2 roles";
//           <br />
//           <span className="text-muted-foreground animate-subtle-pulse">
//             _
//           </span>{" "}
//           {/* Blinking cursor */}
//         </motion.div>

//         {/* Call-to-Action Buttons */}
//         <motion.div
//           variants={textVariant(0.9)}
//           className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
//         >
//           <Button size="lg" className="group w-full sm:w-auto" asChild>
//             <Link href="#projects">
//               Explore Projects{" "}
//               <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
//             </Link>
//           </Button>
//           <Button
//             size="lg"
//             variant="outline"
//             className="w-full sm:w-auto"
//             asChild
//           >
//             <Link href="#contact">Contact Me</Link>
//           </Button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react"; // Added Sparkles for AI touch

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.5 },
    }, // Stagger children for sequential animation
  };

  const textVariant = (delay: number) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay, type: "spring", stiffness: 80, damping: 12 },
    },
  });

  const codeBlockVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.7, type: "spring", stiffness: 80 },
    },
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden px-4 pt-28 pb-20 md:pt-36" // Increased top padding
    >
      {/* Subtle Background Grid (keep as is, it's nice) */}
      <div className="absolute inset-0 z-[-2] bg-background" />
      <div className="absolute inset-0 z-[-1] bg-[linear-gradient(to_right,oklch(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--border)/0.1)_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <motion.div
        className="relative z-10 max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible" // Changed from whileInView for immediate hero animation
      >
        <motion.div variants={textVariant(0.2)} className="mb-4">
          <Link
            href="#projects"
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium text-primary hover:bg-muted/80 transition-colors"
          >
            <Sparkles className="h-4 w-4 mr-2 animate-subtle-pulse" />{" "}
            Introducing DocuMentor AI
            <ArrowRight className="ml-2 h-3 w-3" />
          </Link>
        </motion.div>

        <motion.h1
          variants={textVariant(0.4)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold !leading-tight tracking-tighter text-foreground"
        >
          I'm <span className="text-primary">Siva Sankar Reddy</span>.<br />{" "}
          Building{" "}
          <span className="whitespace-nowrap">Intelligent & Scalable</span> Web
          Solutions.
        </motion.h1>

        <motion.p
          variants={textVariant(0.6)}
          className="mt-6 max-w-xl mx-auto text-md sm:text-lg text-muted-foreground"
        >
          A full-stack engineer passionate about crafting high-performance
          applications and exploring the frontiers of{" "}
          <strong className="text-foreground/90">Generative AI</strong>. Let's
          build something impactful.
        </motion.p>

        <motion.div
          variants={codeBlockVariant} // Use a slightly different variant for the code block
          className="mt-8 font-mono text-xs sm:text-sm text-left bg-card border border-border/70 rounded-lg p-4 sm:p-6 max-w-md mx-auto shadow-lg backdrop-blur-sm bg-card/80" // Added backdrop blur & transparency
        >
          <span className="text-muted-foreground/80">{">"}</span>{" "}
          <span className="text-primary">siva.focus</span> = [ <br />
          <span className="pl-4">"GenAI (RAG, LangChain, LLMs)",</span>
          <br />
          <span className="pl-4">"React/Next.js", "Node.js/FastAPI",</span>
          <br />
          <span className="pl-4">"PostgreSQL/pgvector", "Docker",</span>
          <br />
          <span className="pl-4">"Cloud Deployment (AWS, Vercel)"</span> <br />
          ];
          <br />
          <span className="text-muted-foreground/80">{">"}</span>{" "}
          <span className="text-primary">siva.status</span> = "Seeking SDE 1/2
          Innovator Roles";
          <br />
          <span className="text-muted-foreground/80 animate-pulse">_</span>{" "}
          {/* Blinking cursor */}
        </motion.div>

        <motion.div
          variants={textVariant(0.9)}
          className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4"
        >
          <Button
            size="lg"
            className="group w-full sm:w-auto text-base shadow-md hover:shadow-primary/30 transition-shadow"
            asChild
          >
            <Link href="#projects">
              View My Work{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto text-base shadow-sm hover:shadow-md transition-shadow"
            asChild
          >
            <Link href="/SIVA_SANKAR_REDDY_RESUME.pdf" target="_blank" download>
              {" "}
              {/* Link to your resume PDF */}
              Download Resume
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
