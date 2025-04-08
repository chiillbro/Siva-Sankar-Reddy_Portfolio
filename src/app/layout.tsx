// app/layout.tsx
import { ThemeProvider } from "@/components/ui/theme-provider";
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Siva Sankar Reddy | Portfolio",
  description: "Portfolio website for Siva Sankar Reddy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-white font-sans">
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
