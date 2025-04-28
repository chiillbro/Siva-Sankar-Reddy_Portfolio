import { ThemeProvider } from "@/components/ui/theme-provider"; // Assuming correct path
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";
import { cn } from "./lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siva Sankar Reddy | Software Engineer", // More descriptive title
  description: "Portfolio of Siva Sankar Reddy, showcasing full-stack development skills in React, Node.js, AWS, and more.",
  // Add keywords later for SEO if desired
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Apply fonts and animated background to body */}
      <body
        className={cn(
            "min-h-screen bg-background font-sans antialiased", // Apply background class
            geistSans.variable,
            geistMono.variable
        )}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark" // Keep dark default
            enableSystem
            disableTransitionOnChange
          >
          {/* Add a main wrapper for potential future use (e.g., skip links) */}
          <div className="relative flex min-h-screen flex-col">
             {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}