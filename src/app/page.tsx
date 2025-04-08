// app/page.tsx
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import SectionLayout from "./components/SectionLayout";

// Section configuration
const SECTIONS = [
  { Component: require("./components/AboutSection").default, id: "about" },
  { Component: require("./components/ExperienceSection").default, id: "experience" },
  { Component: require("./components/ProjectsSection").default, id: "projects" },
  { Component: require("./components/SkillsSection").default, id: "skills" },
  { Component: require("./components/ContactSection").default, id: "contact" },
];

const SectionWrapper = ({ Component, id }: { Component: React.ComponentType; id: string }) => (
  <SectionLayout id={id}>
    <ErrorBoundary fallback={<SectionError id={id} />}>
      <Suspense fallback={<SectionLoading />}>
        <Component />
      </Suspense>
    </ErrorBoundary>
  </SectionLayout>
);

const SectionError = ({ id }: { id: string }) => (
  <div className="text-center py-20 text-red-500">
    Error loading {id} section - Please try refreshing the page
  </div>
);

const SectionLoading = () => (
  <div className="text-center py-20 text-muted-foreground">Loading section...</div>
);

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen w-full">
      <Navbar />
      <HeroSection />
      
      {SECTIONS.map(({ Component, id }) => (
        <SectionWrapper key={id} Component={Component} id={id} />
      ))}

      <Footer />
    </main>
  );
}