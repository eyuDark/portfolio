"use client";

import { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import MobileNav from "@/components/layout/MobileNav";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import ContactTerminal from "@/components/sections/ContactTerminal";
import CVDownload from "@/components/ui/CVDownload";
import MatrixRain from "@/components/three/MatrixRain";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      <MatrixRain />

      <MobileNav open={navOpen} setNavOpen={setNavOpen} />

      <Sidebar />

      <main className="relative z-10 ml-0 md:ml-64 flex-1 pt-14 md:pt-0">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ContactTerminal />
      </main>

      <CVDownload hidden={navOpen} />
    </div>
  );
}
