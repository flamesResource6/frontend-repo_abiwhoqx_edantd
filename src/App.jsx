import React from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <div className="fixed left-0 right-0 top-0 z-50 mx-auto mt-4 flex max-w-5xl items-center justify-center">
      <nav className="flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-sm text-white/80 backdrop-blur-xl">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="rounded-full px-3 py-1 text-white/80 transition hover:bg-white/10 hover:text-white">
            {l.label}
          </a>
        ))}
      </nav>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-[Inter]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
