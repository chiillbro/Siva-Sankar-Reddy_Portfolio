// // app/components/Navbar.tsx
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import { ModeToggle } from "@/components/ui/mode-toggle";
// import { Menu, X } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { scrollY } = useScroll();
//   const [hidden, setHidden] = useState(false);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious();
//     if (latest > (previous || 0) && latest > 150) {
//       setHidden(true);
//     } else {
//       setHidden(false);
//     }
//   });

//   const navVariants = {
//     visible: { y: 0 },
//     hidden: { y: "-100%" },
//   };

//   const mobileMenuVariants = {
//     open: { opacity: 1, y: 0 },
//     closed: { opacity: 0, y: "-120%" },
//   };

//   const linkVariants = {
//     hover: { scale: 1.05 },
//     tap: { scale: 0.95 },
//   };

//   return (
//     <motion.nav
//       variants={navVariants}
//       animate={hidden ? "hidden" : "visible"}
//       transition={{ duration: 0.35, ease: "easeInOut" }}
//       className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 py-4 bg-gradient-to-b from-background via-primary/5 to-background backdrop-blur-sm z-50 border-b border-muted-foreground"
//     >
//       <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold">
//         <Link
//           href="/"
//           className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-muted-foreground dark:text-foreground"
//         >
//           Siva Sankar Reddy
//         </Link>
//       </motion.div>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center gap-8">
//         <div className="flex gap-6">
//           {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
//             <motion.a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="relative transition-colors"
//               variants={linkVariants}
//               whileHover="hover"
//               whileTap="tap"
//             >
//               <span className="relative text-muted-foreground dark:text-foreground">
//                 {item}
//                 <motion.span
//                   className="absolute bottom-0 left-0 w-0 h-px"
//                   whileHover={{ width: "100%" }}
//                   transition={{ duration: 0.3 }}
//                 />
//               </span>
//             </motion.a>
//           ))}
//         </div>
//         <div className="h-6 w-px bg-muted-foreground dark:bg-white mx-4" />
//         <ModeToggle />
//       </div>

//       {/* Mobile Menu Toggle */}
//       <motion.button
//         className="md:hidden p-2 cursor-pointer z-[1000] text-muted-foreground dark:text-foreground"
//         onClick={() => setIsOpen(!isOpen)}
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//       </motion.button>

//       {/* Mobile Menu */}
//       <motion.div
//         variants={mobileMenuVariants}
//         initial="closed"
//         animate={isOpen ? "open" : "closed"}
//         className={`absolute top-full left-0 w-full md:hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] backdrop-blur-lg shadow-lg`}
//       >
//         <div className="flex flex-col items-center gap-4 p-6 border-t dark:border-border border-muted-foreground">
//           {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
//             <motion.a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="w-full text-center py-3 rounded-lg transition-colors text-muted-foreground dark:text-foreground"
//               onClick={() => setIsOpen(false)}
//               variants={linkVariants}
//               whileHover="hover"
//               whileTap="tap"
//             >
//               {item}
//             </motion.a>
//           ))}
//           <div className="w-full pt-4 border-t dark:border-border border-muted-foreground flex items-center justify-end">
//             <ModeToggle />
//           </div>
//         </div>
//       </motion.div>
//     </motion.nav>
//   );
// }



















// ********************************************************** Version 2 ************************************************ //

// app/components/Navbar.tsx
// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import { ModeToggle } from "@/components/ui/mode-toggle";
// import { Menu, X, Flame } from "lucide-react"; // Use Flame icon consistent with sidebar later
// import { cn } from "../lib/utils";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { scrollY } = useScroll();
//   const [hidden, setHidden] = useState(false);
//   const [scrolled, setScrolled] = useState(false); // Track if user has scrolled at all

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious() ?? 0; // Handle initial undefined case
//     // Hide navbar on scroll down, show on scroll up
//     if (latest > previous && latest > 100) { // Only hide after scrolling down a bit
//       setHidden(true);
//     } else {
//       setHidden(false);
//     }
//     // Add background blur when scrolled past top
//     setScrolled(latest > 50);
//   });

//   const navVariants = {
//     visible: { y: 0, opacity: 1 },
//     hidden: { y: "-100%", opacity: 0 },
//   };

//   const mobileMenuVariants = {
//     open: { opacity: 1, height: 'auto', transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
//     closed: { opacity: 0, height: 0, transition: { staggerChildren: 0.05, staggerDirection: -1 } },
//   };

//    const mobileLinkVariants = {
//       open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
//       closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } }
//     };

//   return (
//     <motion.nav
//       variants={navVariants}
//       animate={hidden ? "hidden" : "visible"}
//       transition={{ duration: 0.3, ease: [0.1, 0.25, 0.3, 1] }} // Smoother ease
//       className={cn(
//           "fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 py-3 z-50 transition-all duration-300",
//           // Apply background/border only when scrolled or mobile menu is open
//           scrolled || isOpen ? "bg-background/80 backdrop-blur-lg border-b border-border/80" : "border-b border-transparent"
//       )}
//     >
//       {/* Logo/Name */}
//       <motion.div
//          whileHover={{ scale: 1.05 }}
//          className="text-xl font-semibold tracking-tight"
//          >
//         <Link href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
//             <Flame className="h-5 w-5 text-primary" />
//             <span>Siva Sankar Reddy</span>
//         </Link>
//       </motion.div>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex items-center gap-4">
//         <nav className="flex gap-5">
//           {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
//             <motion.a
//               key={item}
//               href={`#${item.toLowerCase()}`}
//               className="relative group text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
//               whileTap={{ scale: 0.95 }}
//             >
//               {item}
//               {/* Underline animation */}
//               <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></span>
//             </motion.a>
//           ))}
//         </nav>
//         {/* Separator */}
//         <div className="h-5 w-px bg-border mx-2" />
//         <ModeToggle />
//       </div>

//       {/* Mobile Menu Toggle */}
//       <motion.button
//         className="md:hidden p-1 text-foreground z-[60]" // Ensure button is above menu background
//         onClick={() => setIsOpen(!isOpen)}
//         whileTap={{ scale: 0.9 }}
//         aria-label="Toggle menu"
//       >
//         {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//       </motion.button>

//       {/* Mobile Menu Container */}
//       {/* Use AnimatePresence if removing from DOM, otherwise variants are fine */}
//         <motion.div
//             variants={mobileMenuVariants}
//             initial="closed"
//             animate={isOpen ? "open" : "closed"}
//             className={cn(
//                 `absolute top-full left-0 w-full md:hidden overflow-hidden`, // Let height control visibility
//                  scrolled || isOpen ? "bg-background/95 backdrop-blur-md shadow-lg border-t border-border" : "" // Apply bg only when scrolled/open
//             )}
//         >
//             <motion.div className="flex flex-col items-center gap-2 p-4">
//               {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
//                 <motion.a
//                   key={`mobile-${item}`}
//                   href={`#${item.toLowerCase()}`}
//                   className="w-full text-center py-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
//                   onClick={() => setIsOpen(false)} // Close menu on click
//                   variants={mobileLinkVariants} // Apply stagger animation variant
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {item}
//                 </motion.a>
//               ))}
//               <div className="w-full pt-4 mt-2 border-t border-border flex justify-center">
//                 <ModeToggle />
//               </div>
//             </motion.div>
//         </motion.div>
//     </motion.nav>
//   );
// }












// *************************************************** Version 3 ************************************** //

// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Command as CommandIcon, Settings, Code, Mail } from "lucide-react"; // Use Command icon
import { cn } from "../lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  // CommandSeparator,
} from "@/components/ui/command"; // Use shadcn Command for palette

// Define Command Palette items
const commandItems = [
    { group: 'Navigation', items: [
        { label: 'Home', href: '#home', icon: <CommandIcon className="mr-2 h-4 w-4"/> }, // Using CommandIcon for Home temporarily
        { label: 'About', href: '#about', icon: <Code className="mr-2 h-4 w-4"/> },
        { label: 'Experience', href: '#experience', icon: <Settings className="mr-2 h-4 w-4"/> }, // Replace with better icons
        { label: 'Projects', href: '#projects', icon: <Code className="mr-2 h-4 w-4"/> },
        { label: 'Skills', href: '#skills', icon: <Code className="mr-2 h-4 w-4"/> },
        { label: 'Contact', href: '#contact', icon: <Mail className="mr-2 h-4 w-4"/> },
    ]},
    // Add more groups like Actions (e.g., Download Resume) or Social Links later
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openCommand, setOpenCommand] = useState(false); // State for command palette
  const { scrollY } = useScroll();

  // Navbar hide/show logic
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 100);
    setScrolled(latest > 50);
  });

  // Keyboard shortcut for command palette (Cmd+K / Ctrl+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpenCommand((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpenCommand(false);
    command();
  };

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-110%" } }} // Move further up
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
            "fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 py-2 z-50 transition-colors duration-300",
            scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "border-b border-transparent"
        )}
      >
        {/* Minimal Logo/Name */}
        <Link href="/" className="font-mono text-sm font-medium text-foreground hover:text-primary transition-colors" aria-label="Home">
          SSR//A
        </Link>

        {/* Desktop: Command Palette Trigger + Theme Toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="text-xs h-8 px-2 text-muted-foreground hidden md:flex items-center gap-1.5"
            onClick={() => setOpenCommand(true)}
          >
            Navigation <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">⌘K</kbd>
          </Button>
          {/* Mobile: Command Palette Trigger */}
           <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-8 w-8"
                onClick={() => setOpenCommand(true)}
                aria-label="Open Navigation"
           >
               <CommandIcon className="h-4 w-4"/>
           </Button>
          <ModeToggle />
        </div>
      </motion.nav>

      {/* Command Palette */}
      <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
        <CommandInput placeholder="Navigate or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {commandItems.map((group) => (
            <CommandGroup key={group.group} heading={group.group}>
              {group.items.map((item) => (
                 <CommandItem
                    key={item.href}
                    value={item.label} // Value used for searching
                    onSelect={() => runCommand(() => {
                        // Use smooth scroll for internal links
                        const element = document.querySelector(item.href);
                        if (element) {
                           element.scrollIntoView({ behavior: 'smooth' });
                        } else {
                           // Handle external links or routes differently if needed
                           window.location.href = item.href;
                        }
                    })}
                    className="cursor-pointer"
                  >
                  {item.icon}
                  <span>{item.label}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
           {/* Example Action */}
           {/* <CommandSeparator />
           <CommandGroup heading="Actions">
                <CommandItem onSelect={() => runCommand(() => document.getElementById('download-resume-btn')?.click())} className="cursor-pointer">
                   <Download className="mr-2 h-4 w-4"/> Download Resume
                </CommandItem>
           </CommandGroup> */}
        </CommandList>
      </CommandDialog>
    </>
  );
}