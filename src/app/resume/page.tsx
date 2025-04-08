// app/resume/page.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Download, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Resume() {
  const resumeUrl = '/SIVA_SANKAR_REDDY_RESUME.pdf';
  const fileName = 'SIVA_SANKAR_REDDY_RESUME.pdf';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Siva Sankar Reddy
          </h1>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:your.email@example.com">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+918688660794">
                <Phone className="w-4 h-4 mr-2" />
                +91 868 866 0794
              </a>
            </Button>
          </div>
        </motion.div>

         {/* PDF Viewer */}
         <div className="w-full h-screen rounded-lg overflow-hidden shadow-xl border border-border">
          <iframe
            src={resumeUrl}
            className="w-full h-full"
            title="Resume Preview"
          />
        </div>

        {/* Fixed Download Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="fixed bottom-8 right-8"
        >
          <Button
            size="lg"
            className="rounded-full shadow-lg hover:shadow-primary/20 transition-shadow"
            asChild
          >
            <a href={resumeUrl} download={fileName}>
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}