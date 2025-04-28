// 'use client';

// import { motion } from 'framer-motion';
// import { Linkedin, Github, Mail, FileText } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <motion.footer
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="border-t dark:border-border border-primary/50 bg-background/95 backdrop-blur-sm"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-bold mb-4 text-primary">
//               Siva Sankar Reddy
//             </h3>
//             <p className="text-muted-foreground mb-2">
//               Software Engineer
//             </p>
//             <p className="text-muted-foreground">
//               Building innovative solutions with modern tech
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-sm text-muted-foreground dark:text-foreground font-bold mb-4 uppercase tracking-wider">
//               Navigation
//             </h4>
//             <ul className="space-y-2">
//               {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
//                 <li key={item}>
//                   <a
//                     href={`#${item.toLowerCase()}`}
//                     className="text-muted-foreground hover:text-gray-300 transition-colors"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Connect */}
//           <div>
//             <h4 className="text-sm text-muted-foreground dark:text-foreground font-bold mb-4 uppercase tracking-wider">
//               Connect
//             </h4>
//             <div className="flex flex-col gap-3">
//               <Button
//                 variant="outline"
//                 className="justify-start gap-2"
//                 asChild
//               >
//                 <a
//                   href="https://linkedin.com/in/sivasankarra"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Linkedin className="w-4 h-4" />
//                   LinkedIn
//                 </a>
//               </Button>
//               <Button
//                 variant="outline"
//                 className="justify-start gap-2"
//                 asChild
//               >
//                 <a
//                   href="https://github.com/chiillbro"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Github className="w-4 h-4" />
//                   GitHub
//                 </a>
//               </Button>
//               <Button
//                 variant="outline"
//                 className="justify-start gap-2"
//                 asChild
//               >
//                 <a
//                   href="/resume"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FileText className="w-4 h-4" />
//                   Resume
//                 </a>
//               </Button>
//             </div>
//           </div>

//           {/* CTA Section */}
//           <div>
//             <h4 className="text-sm text-muted-foreground dark:text-foreground font-bold mb-4 uppercase tracking-wider">
//               Opportunities
//             </h4>
//             <p className="text-muted-foreground mb-4">
//               Actively seeking Software Engineering roles at top-tier product companies.
//             </p>
//             <Button className="w-full gap-2" asChild>
//               <a href="#contact">
//                 <Mail className="w-4 h-4" />
//                 Let’s Collaborate
//               </a>
//             </Button>
//           </div>
//         </div>

//         {/* Copyright & Legal */}
//         <div className="border-t dark:border-border border-primary/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <div className="text-sm text-muted-foreground text-center">
//             © {currentYear} Siva Sankar Reddy. All rights reserved.
//           </div>
//           <div className="flex gap-4">
//             <Link
//               href="/privacy"
//               className="text-sm text-muted-foreground hover:text-gray-300 transition-colors"
//             >
//               Privacy Policy
//             </Link>
//             <Link
//               href="/terms"
//               className="text-sm text-muted-foreground hover:text-gray-300 transition-colors"
//             >
//               Terms of Use
//             </Link>
//           </div>
//         </div>

//         {/* Compliance Text */}
//         <div className="mt-4 text-center text-xs text-muted-foreground">
//           *All trademarks are property of their respective owners. 
//         </div>
//       </div>
//     </motion.footer>
//   );
// }





// ************************************* Version 2 *********************************************** //



// app/components/Footer.tsx
'use client';
// import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-border/50 bg-background px-4 py-6 md:px-8 md:py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {currentYear} Siva Sankar Reddy Asam. All rights reserved.
        </p>

        {/* Social Links (Optional - can be redundant if in Contact) */}
        <div className="flex items-center gap-3">
             <a href="mailto:aasamsivasankarreddynani143@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
            </a>
            <a href="https://github.com/chiillbro" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-4 w-4" />
            </a>
            <a href="https://linkedin.com/in/sivasankarra" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-4 w-4" />
            </a>
        </div>

         {/* Back to Top (Optional) */}
         <Button variant="ghost" size="icon" onClick={scrollToTop} className="h-8 w-8 rounded-full hidden sm:flex" aria-label="Scroll back to top">
            <ArrowUp className="h-4 w-4 text-muted-foreground"/>
         </Button>

      </div>
    </footer>
  );
}