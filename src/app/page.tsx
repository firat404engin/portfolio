"use client";

import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Projects from '@/components/Sections/Projects';
import Contact from '@/components/Sections/Contact';
import AnimatedSection from '@/components/Animation/AnimatedSection';

export default function Home() {
  return (
    <div className="container mx-auto px-4 space-y-32">
      <Hero />
      
      <AnimatedSection direction="right">
        <About />
      </AnimatedSection>

      <AnimatedSection direction="left">
        <Projects />
      </AnimatedSection>

      <AnimatedSection direction="right">
        <Contact />
      </AnimatedSection>
    </div>
  );
}
