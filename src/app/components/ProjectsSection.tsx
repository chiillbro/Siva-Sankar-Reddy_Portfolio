// app/components/ProjectsSection.tsx
// 'use client';

// // import { MotionDiv } from '@/components/motion-div';
// import { Button } from '@/components/ui/button';
// import { Github, ExternalLink, Database, MessageSquare } from 'lucide-react';
// import {motion} from 'framer-motion';

// const projects = [
//   {
//     title: "Movies Database",
//     description: "MERN stack application with admin dashboard handling 50k+ monthly movie recommendations",
//     tech: ["MERN", "Redux", "AWS"],
//     metrics: "65% faster search results",
//     links: {
//       code: "https://github.com/chiillbro/Mern-Movies-Database",
//       demo: "https://mern-movies-database.onrender.com/"
//     },
//     icon: <Database className="w-6 h-6" />
//   },
//   {
//     title: "Real-Time Chat App",
//     description: "Scalable messaging platform supporting 1k+ concurrent users with Socket.IO cluster",
//     tech: ["MERN", "WebSockets", "Docker", "NGINX"],
//     metrics: "30ms latency average",
//     links: {
//       code: "https://github.com/chiillbro/Chat-App",
//       demo: "https://chat-app-kowb.onrender.com/"
//     },
//     icon: <MessageSquare className="w-6 h-6" />
//   }
// ];

// export default function ProjectsSection() {
//   return (
//     <section
//       id="projects"
//       className="min-h-screen relative py-20 px-4 bg-gradient-to-b from-[#1E293B] to-[#0F172A]"
//     >
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           className="mb-20 text-center"
//         >
//           <h2 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
//             Featured Builds
//           </h2>
//           <p className="text-gray-400">Solutions that scale with impact</p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/2 p-0.5 shadow-xl"
//             >
//               <div className="rounded-[15px] bg-gray-900/90 backdrop-blur-sm p-8 h-full">
//                 <div className="flex items-start justify-between mb-6">
//                   <div className="flex items-center gap-3">
//                     <div className="p-3 rounded-lg bg-primary/10 text-primary">
//                       {project.icon}
//                     </div>
//                     <h3 className="text-2xl font-semibold">{project.title}</h3>
//                   </div>
//                   <span className="text-sm font-mono text-primary">
//                     {project.metrics}
//                   </span>
//                 </div>

//                 <p className="text-gray-400 mb-6">{project.description}</p>

//                 <div className="flex flex-wrap gap-2 mb-8">
//                   {project.tech.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary/80 font-mono"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="flex gap-4">
//                   <Button
//                     variant="outline"
//                     className="gap-2 group-hover:bg-primary/10 transition-colors"
//                     asChild
//                   >
//                     <a href={project.links.code} target="_blank" rel="noopener">
//                       <Github className="w-4 h-4" />
//                       Code
//                     </a>
//                   </Button>
//                   <Button
//                     variant="outline"
//                     className="gap-2 group-hover:bg-primary/10 transition-colors"
//                     asChild
//                   >
//                     <a href={project.links.demo} target="_blank" rel="noopener">
//                       <ExternalLink className="w-4 h-4" />
//                       Live Demo
//                     </a>
//                   </Button>
//                 </div>
//               </div>

//               {/* Hover gradient effect */}
//               <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// ************************************* Version 2 *********************************************** //

// 'use client';

// import { motion } from 'framer-motion';
// import Image from 'next/image'; // Use Next.js Image for optimization
// import Link from 'next/link';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { Github, ExternalLink, Code } from 'lucide-react';

// // Animation variants
// const sectionVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
// };
// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80 } },
// };

// // --- Project Data ---
// const projects = [
//   {
//     title: "Aether – Real-Time Incident Response",
//     description: "Full-stack platform enabling real-time collaboration (chat, status updates) during critical incidents. Built end-to-end from design to AWS Fargate deployment.",
//     imageUrl: "/images/aether-dashboard.png", // Replace with actual screenshot path in /public/images
//     tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "WebSockets", "Docker", "AWS", "Terraform", "React", "Node.js", "Prisma"],
//     githubUrl: "https://github.com/chiillbro/aether-incident-response", // Your repo link
//     liveUrl: "http://aether-alb-1938841100.eu-north-1.elb.amazonaws.com/", // Your live demo link
//     keyFeatures: [ // Add specific, quantifiable features if possible
//         "Low-latency WebSocket chat (<100ms)",
//         "Role-Based Access Control (Admin, Engineer)",
//         "Automated CI/CD Pipeline (GitHub Actions)",
//         "Persistent Message History & Incident Data",
//     ]
//   },
//   // { // Example structure for another project
//   //   title: "Project Title 2",
//   //   description: "Brief description of the project and its purpose.",
//   //   imageUrl: "/images/project2-screenshot.png",
//   //   tags: ["React", "Firebase", "TailwindCSS"],
//   //   githubUrl: "#",
//   //   liveUrl: "#",
//   //   keyFeatures: ["Feature 1", "Feature 2"]
//   // },
// ];
// // --------------------

// export default function ProjectsSection() {
//   return (
//     <section
//       id="projects"
//       className="w-full py-16 md:py-24 px-4 lg:px-8 bg-background" // Standard background
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
//           Featured Projects
//         </motion.h2>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
//           {projects.map((project) => (
//             <motion.div key={project.title} variants={itemVariants}>
//               <Card className="h-full flex flex-col overflow-hidden group border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
//                 {/* Optional Image - Use placeholder if no image */}
//                 <div className="relative aspect-video overflow-hidden bg-muted border-b">
//                    {project.imageUrl ? (
//                         <Image
//                             src={project.imageUrl}
//                             alt={`${project.title} screenshot`}
//                             fill // Use fill for responsive images within a sized container
//                             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Help browser optimize loading
//                             className="object-cover group-hover:scale-105 transition-transform duration-300"
//                         />
//                    ) : (
//                         <div className="flex items-center justify-center h-full bg-gradient-to-br from-muted to-secondary">
//                             <Code className="w-16 h-16 text-muted-foreground/50" />
//                         </div>
//                    )}

//                 </div>

//                 <CardHeader className="pb-3">
//                   <CardTitle className="text-xl">{project.title}</CardTitle>
//                   <CardDescription className="text-sm line-clamp-3"> {/* Limit description length */}
//                      {project.description}
//                   </CardDescription>
//                 </CardHeader>

//                 <CardContent className="flex-grow space-y-4">
//                     {/* Key Features List */}
//                     {project.keyFeatures && project.keyFeatures.length > 0 && (
//                         <div>
//                             <h4 className="text-sm font-semibold mb-1.5 text-foreground">Key Features:</h4>
//                             <ul className="list-disc list-outside pl-5 space-y-1 text-sm text-muted-foreground">
//                                 {project.keyFeatures.map((feature, idx) => <li key={idx}>{feature}</li>)}
//                             </ul>
//                         </div>
//                     )}

//                     {/* Tech Stack Tags */}
//                      <div>
//                         <h4 className="text-sm font-semibold mb-1.5 text-foreground">Tech Stack:</h4>
//                         <div className="flex flex-wrap gap-1.5">
//                             {project.tags.map((tag) => (
//                             <Badge key={tag} variant="secondary" className="font-normal text-xs">{tag}</Badge>
//                             ))}
//                         </div>
//                      </div>
//                 </CardContent>

//                 <CardFooter className="mt-auto pt-4 border-t justify-end gap-2">
//                   {project.githubUrl && (
//                     <Button variant="outline" size="sm" asChild>
//                       <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                         <Github className="mr-1.5 h-4 w-4" /> GitHub
//                       </Link>
//                     </Button>
//                   )}
//                   {project.liveUrl && (
//                     <Button variant="default" size="sm" asChild>
//                       <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="mr-1.5 h-4 w-4" /> Live Demo
//                       </Link>
//                     </Button>
//                   )}
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// frontend/app/sections/projects-section.tsx (assuming you moved it here or similar)
// OR keep it as frontend/app/projects/page.tsx or wherever it's routed from.
// For this example, I'll assume it's a component.

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, ListChecks, Wrench } from "lucide-react"; // Added ListChecks, Wrench

// Animation variants (keep as is)
const sectionVariants = {
  hidden: { opacity: 0, y: 20 }, // Slight y offset for entry
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, duration: 0.5 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

// --- Updated Project Data (paste the full array from above here) ---
const projects = [
  {
    title: "DocuMentor – AI Document Q&A",
    description:
      "Full-stack GenAI application enabling users to upload PDFs and receive context-aware answers using a RAG pipeline. Deployed to cloud platforms.",
    imageUrl: "/images/documentor-screenshot.png", // Replace!
    tags: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "LangChain",
      "Ollama",
      "TinyLlama",
      "PGVector",
      "PostgreSQL",
      "Docker",
      "TailwindCSS",
      "Shadcn/ui",
      "Vercel",
      "Render/Fly.io",
    ],
    githubUrl:
      "https://github.com/chiillbro/documentor-ai", // Replace!
    liveUrl: "https://documentor-ai-two.vercel.app/", // Replace!
    keyFeatures: [
      "RAG pipeline for contextual Q&A on PDF content",
      "Streaming of LLM responses for real-time feel",
      "Vector similarity search with PostgreSQL/pgvector",
      "Containerized & Cloud-Deployed (FastAPI, Next.js)",
    ],
  },
  {
    title: "Aether – Real-Time Incident Response",
    description:
      "Full-stack platform enabling real-time collaboration (chat, status updates) during critical incidents. Built end-to-end from design to AWS Fargate deployment.",
    imageUrl: "/images/aether-dashboard.png",
    tags: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "WebSockets",
      "Docker",
      "AWS ECS",
      "Terraform",
      "Prisma",
    ],
    githubUrl: "https://github.com/chiillbro/aether-incident-response",
    liveUrl: "http://aether-alb-1938841100.eu-north-1.elb.amazonaws.com/",
    keyFeatures: [
      "Low-latency WebSocket chat & status updates (<100ms)",
      "Role-Based Access Control",
      "Automated CI/CD (GitHub Actions)",
      "Infrastructure as Code (Terraform)",
    ],
  },
  {
    title: "MERN Movies Hub",
    description:
      "A MERN stack application for browsing movies and allowing authenticated users to post reviews. Features an admin panel for content management.",
    imageUrl: "/images/mern-movies-dashboard.png", // Replace!
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redux",
      "JWT",
      "TailwindCSS",
      "Multer",
    ],
    githubUrl: "https://github.com/siva-sankar-reddy-asam/mern-movies", // Replace!
    liveUrl: "https://mern-movies-database.onrender.com/", // Replace or remove if no live demo
    keyFeatures: [
      "User authentication (JWT) & review posting",
      "Admin panel for movie CRUD operations",
      "Global movie search functionality",
    ],
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A MERN stack application demonstrating real-time messaging using WebSockets, user presence indicators, and JWT-based authentication.",
    imageUrl: "/images/chat-app-dashboard.png", // Replace!
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.IO",
      "Zustand",
      "JWT",
      "TailwindCSS",
    ],
    githubUrl: "https://github.com/siva-sankar-reddy-asam/mern-chat-app", // Replace!
    liveUrl: "https://chat-app-kowb.onrender.com/", // Replace or remove if no live demo
    keyFeatures: [
      "Instant messaging with Socket.IO",
      "User online/offline status indicators",
      "Secure JWT authentication",
    ],
  },
];
// --------------------

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full py-16 md:py-24 lg:py-32 px-4" // Consistent padding
    >
      <motion.div
        className="container mx-auto max-w-6xl" // Use container for centering and max-width
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // amount: 0.1 means 10% of element in view
        variants={sectionVariants}
      >
        <motion.div
          variants={itemVariants}
          className="mb-12 md:mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="mt-3 md:mt-4 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
            A selection of projects showcasing my skills in full-stack
            development, AI integration, and real-time systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {" "}
          {/* Slightly increased gap */}
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="flex"
            >
              {" "}
              {/* Added flex for consistent card height in grid column */}
              <Card className="h-full w-full flex flex-col overflow-hidden group border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl bg-card rounded-xl">
                {" "}
                {/* Increased shadow, rounded-xl */}
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  {" "}
                  {/* Enforce aspect ratio */}
                  {project.imageUrl &&
                  project.imageUrl !== "/images/placeholder.png" ? ( // Check for placeholder explicitly if needed
                    <Image
                      src={project.imageUrl}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw" // Simpler sizes for 2-col grid
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-muted via-card to-muted/50">
                      <Code className="w-16 h-16 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2 pt-4">
                  {" "}
                  {/* Adjusted padding */}
                  <CardTitle className="text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3 h-[3.75rem]">
                    {" "}
                    {/* Fixed height for 3 lines */}
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-4 pt-2 pb-4">
                  {" "}
                  {/* Adjusted padding */}
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold mb-1.5 text-foreground/90 flex items-center">
                        <ListChecks className="mr-2 h-4 w-4 text-primary/80" />{" "}
                        Key Features:
                      </h4>
                      <ul className="list-disc list-outside pl-6 space-y-0.5 text-xs text-muted-foreground">
                        {" "}
                        {/* Smaller font for features */}
                        {project.keyFeatures.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="truncate" title={feature}>
                            {feature}
                          </li>
                        ))}{" "}
                        {/* Show only first 3, truncate */}
                        {project.keyFeatures.length > 3 && (
                          <li className="text-primary/80 text-xs hover:underline cursor-pointer">
                            ...and more
                          </li>
                        )}{" "}
                        {/* Indicate more features */}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-semibold mb-1.5 text-foreground/90 flex items-center">
                      <Wrench className="mr-2 h-4 w-4 text-primary/80" /> Tech
                      Stack:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 7).map(
                        (
                          tag // Show max 7-8 tags initially
                        ) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="font-normal text-xs px-1.5 py-0.5"
                          >
                            {tag}
                          </Badge>
                        )
                      )}
                      {project.tags.length > 7 && (
                        <Badge
                          variant="outline"
                          className="font-normal text-xs px-1.5 py-0.5"
                        >
                          +{project.tags.length - 7} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="mt-auto pt-4 border-t justify-end gap-2.5 bg-muted/30 p-4">
                  {" "}
                  {/* Added background, adjusted padding */}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="transition-all hover:bg-secondary/80"
                    >
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1.5 h-4 w-4" /> GitHub
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button
                      variant="default"
                      size="sm"
                      asChild
                      className="transition-all hover:opacity-90"
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1.5 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
