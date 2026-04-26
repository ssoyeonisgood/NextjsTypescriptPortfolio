"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  description: string;
  stack: string[];
  website: string | null;
  websiteLabel?: "Website" | "Demo" | "Video";
  showWebsiteButton?: boolean;
  github: string | null;
  gradient: string;
  accent: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "Recipe Recommender",
    description:
      "AI-powered web app that suggests recipes based on an image of ingredients you upload, using Vercel AI SDK.",
    stack: ["Remix", "TypeScript", "AI SDK"],
    website: "https://recipe-reco.netlify.app/",
    websiteLabel: "Website",
    github: "https://github.com/ssoyeonisgood/recipe-recommender-remix",
    image: "/recipoe-recommender.png",
    gradient: "from-amber-400/35 via-orange-300/25 to-amber-500/15",
    accent: "#f59e0b",
  },
  {
    title: "Enrollment and Availability Tracker",
    description:
      "A web application that allows students to track enrollment and availability of courses at Curtin University.",
    stack: ["React", "JavaScript", "postgreSQL", "Docker"],
    website: "https://drive.google.com/drive/folders/1N3WLZHC5kn2z_BYL03TsJ5_pV3AY28aF?usp=sharing",
    websiteLabel: "Demo",
    github: null,
    gradient: "from-[#5D7BFA]/40 via-[#8B9FFF]/30 to-[#5D7BFA]/20",
    image: "/capstone.png",
    accent: "#5D7BFA",
  },
  {
    title: "Nextjs Typescript Portfolio Website",
    description:
      "A portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    website: "#",
    websiteLabel: "Website",
    showWebsiteButton: false,
    github: "https://github.com/ssoyeonisgood/NextjsTypescriptPortfolio",
    image: "/portfolio.png",
    gradient: "from-emerald-500/35 via-teal-400/25 to-emerald-600/15",
    accent: "#10b981",
  },
  {
    title: "URL Shortener using AWS CDK",
    description:
      "A serverless URL shortener using Amazon API Gateway and AWS Lambda, handling URL creation and redirection workflows.",
    stack: ["AWS CDK", "TypeScript", "API Gateway", "Lambda", "DynamoDB"],
    website: "#",
    websiteLabel: "Demo",
    showWebsiteButton: false,
    github: "https://github.com/ssoyeonisgood/url-shortner-cdk",
    image: "/aws_.png",
    gradient: "from-[#7DD3FC]/40 via-sky-300/25 to-[#7DD3FC]/15",
    accent: "#7DD3FC",
  },
  {
    title: "Weather-logger-python",
    description:
      "Developed a Python data pipeline to collect real-time weather data using APIs, storing results in CSV for historical tracking.",
    stack: ["Python", "API", "CSV", "Pandas"],
    website: "https://drive.google.com/drive/folders/1rFWnGi7ojOdxG5ywVKY-vF9bi2U3mhqS?usp=sharing",
    websiteLabel: "Demo",
    github: "https://github.com/ssoyeonisgood/Weather-logger-python",
    image: "/weather.png",
    gradient: "from-violet-500/35 via-purple-400/25 to-violet-600/15",
    accent: "#8b5cf6",
  }
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const isValidLink = (link: string | null) => Boolean(link && link !== "#");
  const handleActionClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string | null) => {
    if (!isValidLink(link)) {
      e.preventDefault();
    }
  };

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
        </div>
        <div
          className={`mt-3 transition-all delay-200 duration-1000 ease-out ${visible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <article
                key={`${project.title}-${i}`}
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
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <>
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
                    </>
                  )}

                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-[40px] transition-opacity duration-500 group-hover:opacity-100"
                    style={{ backgroundColor: project.accent }}
                  />

                  {/* Shimmer sweep on hover */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </div>
                <div className="flex flex-1 flex-col px-4 pb-4 pt-4">
                  
                  <h3 className="text-base font-bold tracking-[-0.01em] text-black/85 transition-colors duration-300 group-hover:text-emerald-700 sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-black/40 transition-colors duration-300 group-hover:text-black/55">
                    {project.description}
                  </p>

                  {/* Bottom accent line */}
                  <div className="my-3 h-px w-full bg-gradient-to-r from-transparent via-black/[0.06] to-transparent transition-all duration-500 group-hover:via-emerald-300/40" />

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
                  <div className="mt-4 flex items-center gap-2">
                    {project.showWebsiteButton !== false && (
                      <a
                        href={project.website ?? "#"}
                        target={isValidLink(project.website) ? "_blank" : undefined}
                        rel={isValidLink(project.website) ? "noreferrer" : undefined}
                        onClick={(e) => handleActionClick(e, project.website)}
                        className="inline-flex h-7 w-[50%] items-center justify-center rounded-full border border-[#7DD3FC] bg-[#7DD3FC]/50 px-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-black/65 transition-all duration-300 hover:bg-black/[0.06]"
                      >
                        {project.websiteLabel ?? "Website"}
                      </a>
                    )}
                    <a
                      href={project.github ?? "#"}
                      target={isValidLink(project.github) ? "_blank" : undefined}
                      rel={isValidLink(project.github) ? "noreferrer" : undefined}
                      onClick={(e) => handleActionClick(e, project.github)}
                      className={`inline-flex h-7 items-center justify-center rounded-full border border-[#5D7BFA] bg-[#5D7BFA]/50 px-3 text-[10px] font-semibold uppercase tracking-[0.08em] text-black/65 transition-all duration-300 hover:bg-black/[0.06] ${project.showWebsiteButton === false ? "w-full" : "w-[50%]"}`}
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Hover border glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ boxShadow: `inset 0 0 0 1px ${project.accent}20, 0 0 30px ${project.accent}08` }}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
