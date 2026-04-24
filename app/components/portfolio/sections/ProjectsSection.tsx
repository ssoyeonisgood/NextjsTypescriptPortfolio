"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "E-commerce Dashboard",
    description:
      "Analytics and inventory management with real-time updates and interactive data visualizations.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
    gradient: "from-[#5D7BFA]/40 via-[#8B9FFF]/30 to-[#5D7BFA]/20",
    accent: "#5D7BFA",
  },
  {
    title: "Community Forum",
    description:
      "Discussion platform with moderation tools, threaded replies, and real-time notifications.",
    stack: ["React", "PostgreSQL"],
    href: "#",
    gradient: "from-emerald-500/35 via-teal-400/25 to-emerald-600/15",
    accent: "#10b981",
  },
  {
    title: "Design System",
    description:
      "Reusable component library with comprehensive documentation for cross-team adoption.",
    stack: ["Storybook", "CSS"],
    href: "#",
    gradient: "from-[#7DD3FC]/40 via-sky-300/25 to-[#7DD3FC]/15",
    accent: "#7DD3FC",
  },
  {
    title: "Recipe Recommender",
    description:
      "AI-powered web app that suggests recipes based on ingredients you have, using Vercel AI SDK.",
    stack: ["Remix", "TypeScript", "AI SDK"],
    href: "#",
    gradient: "from-amber-400/35 via-orange-300/25 to-amber-500/15",
    accent: "#f59e0b",
  },
  {
    title: "Task Automation CLI",
    description:
      "Command-line tool for automating repetitive dev workflows with composable pipelines.",
    stack: ["Node.js", "TypeScript"],
    href: "#",
    gradient: "from-violet-500/35 via-purple-400/25 to-violet-600/15",
    accent: "#8b5cf6",
  },
  {
    title: "Portfolio Website",
    description:
      "This site — designed and built from scratch with Next.js, Tailwind, and attention to detail.",
    stack: ["Next.js", "Tailwind"],
    href: "#",
    gradient: "from-emerald-400/35 via-[#5D7BFA]/25 to-[#7DD3FC]/15",
    accent: "#059669",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="proj-section relative scroll-mt-16 overflow-hidden border-b border-emerald-200/40"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#DFF9E1]/90" />

      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`,
        }}
      />


      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-7xl flex-col justify-center px-5 py-20 sm:min-h-[calc(100vh-4rem)] sm:px-8 lg:px-10">
        <div
          className={`transition-all duration-1000 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-block h-[3px] w-8 rounded-full bg-emerald-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-600/70">
              Selected Work
            </span>
          </div>
          <h2 className="bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400 bg-clip-text text-transparent text-[90px]">
            My Projects
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-black/40">
            A selection of things I&apos;ve built — from full-stack apps to developer tools.
          </p>
        </div>
        <div
          className={`mt-14 transition-all delay-200 duration-1000 ease-out sm:mt-16 lg:mt-20 ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, i) => (
              <a
                key={`${project.title}-${i}`}
                href={project.href}
                className={`proj-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white/50 p-1 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-black/[0.12] hover:bg-white/70 hover:shadow-2xl hover:shadow-emerald-900/[0.08] ${visible ? "proj-card-visible" : ""}`}
                style={{ animationDelay: `${0.2 + i * 0.1}s` }}
              >
                {/* Number badge */}
                <div className="absolute right-3 top-3 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-white/80 font-mono text-[10px] font-bold tabular-nums text-black/30 shadow-sm ring-1 ring-black/[0.04] backdrop-blur-sm transition-all duration-300 group-hover:bg-white group-hover:text-emerald-600 group-hover:ring-emerald-200/60">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Preview area */}
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient}`}
                >
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, rgba(0,0,0,0.15) 0.5px, transparent 0.5px)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-full max-w-[200px] space-y-2.5 transition-transform duration-500 group-hover:scale-[1.04]">
                      <div className="h-2 w-3/4 rounded-full" style={{ backgroundColor: `${project.accent}50` }} />
                      <div className="h-2 w-full rounded-full" style={{ backgroundColor: `${project.accent}30` }} />
                      <div className="h-2 w-2/3 rounded-full" style={{ backgroundColor: `${project.accent}25` }} />
                      <div className="pt-2">
                        <div className="h-8 w-20 rounded-lg" style={{ backgroundColor: `${project.accent}35` }} />
                      </div>
                    </div>
                  </div>

                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: project.accent }}
                  />

                  {/* Shimmer sweep on hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </div>
                <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: project.accent }} />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/25">
                      Project
                    </span>
                  </div>
                  <h3 className="text-base font-bold tracking-[-0.01em] text-black/85 transition-colors duration-300 group-hover:text-emerald-700 sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-black/40 transition-colors duration-300 group-hover:text-black/55">
                    {project.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="my-3 h-px w-full bg-gradient-to-r from-transparent via-black/[0.06] to-transparent transition-all duration-500 group-hover:via-emerald-300/40" />

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-emerald-200/60 bg-white/70 px-2.5 py-0.5 text-[10px] font-medium tracking-wide text-emerald-800 transition-all duration-300 group-hover:border-emerald-300/80 group-hover:bg-emerald-50/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/[0.06] bg-black/[0.03] text-black/30 transition-all duration-300 group-hover:border-emerald-300 group-hover:bg-emerald-50 group-hover:text-emerald-600">
                      <svg
                        className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Hover border glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ boxShadow: `inset 0 0 0 1px ${project.accent}20, 0 0 30px ${project.accent}08` }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
