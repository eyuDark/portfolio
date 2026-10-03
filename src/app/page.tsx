import Sidebar from "@/components/layout/Sidebar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import ContactTerminal from "@/components/sections/ContactTerminal";
import CVDownload from "@/components/ui/CVDownload";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content - Scrollable */}
      <main className="ml-64 flex-1">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ContactTerminal />
      </main>

      {/* Floating CV Download Button */}
      <CVDownload />
    </div>
  );
}
