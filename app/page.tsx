import { Header } from "./components/portfolio/Header";
import { HeroLanding } from "./components/portfolio/HeroLanding";
import { AboutSection } from "./components/portfolio/sections/AboutSection";
import { BlogSection } from "./components/portfolio/sections/BlogSection";
import { ContactSection } from "./components/portfolio/sections/ContactSection";
import { ExperienceSection } from "./components/portfolio/sections/ExperienceSection";
import { ProjectsSection } from "./components/portfolio/sections/ProjectsSection";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Header />
      <div className="flex min-h-[calc(100dvh-3.5rem)] flex-col bg-white dark:bg-white sm:min-h-[calc(100dvh-4rem)]">
        <HeroLanding />
      </div>

      <main>
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}