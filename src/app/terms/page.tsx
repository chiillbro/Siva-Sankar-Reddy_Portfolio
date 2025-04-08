'use client';

import { motion } from 'framer-motion';

export default function TermsOfUse() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 bg-gradient-to-b from-[#1E293B] to-[#0F172A] text-gray-300 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Terms of Use</h1>
        <p className="mb-4">
          Welcome to my portfolio website. By accessing and using this website, you agree to comply with and be bound
          by these Terms of Use.
        </p>
        <p className="mb-4">
          <strong>Intellectual Property:</strong> All content featured on this site is the intellectual property of Siva Sankar Reddy 
          and is protected by applicable copyright laws. You may not reproduce or distribute content without permission.
        </p>
        <p className="mb-4">
          <strong>Usage:</strong> This website is provided for informational purposes only. Any reliance on the content
          is at your own risk. The materials here are subject to change without prior notice.
        </p>
        <p className="mb-4">
          <strong>Third-Party Links:</strong> This website may contain links to external sites. I do not endorse or assume any
          responsibility for the content or practices of these sites.
        </p>
        <p className="mb-4">
          <strong>Limitation of Liability:</strong> Under no circumstances shall I be liable for any damages arising 
          from the use of or inability to use this website.
        </p>
        <p className="mb-4">
          By using this website, you agree to these Terms of Use. I reserve the right to modify these terms at any time.
        </p>
      </div>
    </motion.section>
  );
}
