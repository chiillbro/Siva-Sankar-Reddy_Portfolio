// app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navVariants = {
    visible: { y: 0 },
    hidden: { y: "-100%" },
  };

  const mobileMenuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-120%" },
  };

  const linkVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      variants={navVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 py-4 bg-gradient-to-b from-background via-primary/5 to-background backdrop-blur-sm z-50 border-b border-muted-foreground"
    >
      <motion.div whileHover={{ scale: 1.05 }} className="text-xl font-bold">
        <Link
          href="/"
          className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-muted-foreground dark:text-foreground"
        >
          Siva Sankar Reddy
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        <div className="flex gap-6">
          {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative transition-colors"
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative text-muted-foreground dark:text-foreground">
                {item}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-px"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </motion.a>
          ))}
        </div>
        <div className="h-6 w-px bg-muted-foreground dark:bg-white mx-4" />
        <ModeToggle />
      </div>

      {/* Mobile Menu Toggle */}
      <motion.button
        className="md:hidden p-2 cursor-pointer z-[1000] text-muted-foreground dark:text-foreground"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className={`absolute top-full left-0 w-full md:hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#0F172A] backdrop-blur-lg shadow-lg`}
      >
        <div className="flex flex-col items-center gap-4 p-6 border-t dark:border-border border-muted-foreground">
          {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="w-full text-center py-3 rounded-lg transition-colors text-muted-foreground dark:text-foreground"
              onClick={() => setIsOpen(false)}
              variants={linkVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {item}
            </motion.a>
          ))}
          <div className="w-full pt-4 border-t dark:border-border border-muted-foreground flex items-center justify-end">
            <ModeToggle />
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}