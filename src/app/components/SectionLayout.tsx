"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";

interface SectionLayoutProps {
  children: ReactNode;
  className?: string;
  id?: string
}

const SectionLayout: FC<SectionLayoutProps> = ({ id, children, className }) => {
  return (
    <motion.div
      id={id}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className={clsx(
        "mybackground p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default SectionLayout;
