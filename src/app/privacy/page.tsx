'use client';

import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-12 bg-gradient-to-b from-[#1E293B] to-[#0F172A] text-gray-300 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Privacy Policy</h1>
        <p className="mb-4">
          Welcome to my portfolio website. Your privacy is important to me, and this Privacy Policy
          outlines how I handle any information you provide.
        </p>
        <p className="mb-4">
          <strong>Information Collection:</strong> I do not collect any personal data from visitors beyond what is voluntarily provided through the contact form. 
          The information provided is solely used for communication purposes.
        </p>
        <p className="mb-4">
          <strong>Cookies:</strong> This website does not use cookies or any tracking technology to collect information about your browsing activities.
        </p>
        <p className="mb-4">
          <strong>Data Security:</strong> All data you provide is securely transmitted and stored. No third parties have access to your personal information.
        </p>
        <p className="mb-4">
          By using this website, you acknowledge and consent to the practices outlined in this Privacy Policy.
        </p>
        <p className="mb-4">
          If you have any questions or concerns regarding your data, feel free to reach out.
        </p>
      </div>
    </motion.section>
  );
}
