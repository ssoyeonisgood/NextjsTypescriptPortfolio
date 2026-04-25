"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const BLUE = "#5D7BFA";
const SKY = "#7DD3FC";

const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Java",
  "C#",
  "HTML",
  "CSS",
  "Bootstrap",
  "Shadcn UI",
  "Material UI",
  "Tailwind CSS",
  "PHP",
  "Laravel",
  "Node.js",
  "Python",
  "SQL",
  "Git",
  "AWS",
  "Docker",
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="scroll-mt-16 border-b border-zinc-200/80"
    >
      <div className="relative flex min-h-screen w-full min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-[#DFF9E1]">
        {/* Noise texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.045]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Radial glow — emerald tint matching hero */}
        <div className="pointer-events-none absolute -left-40 top-1/4 z-[1] h-[600px] w-[600px] rounded-full bg-emerald-600/20 blur-[120px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 z-[1] h-[500px] w-[500px] rounded-full bg-emerald-700/15 blur-[100px]" />

        <div
          className={`relative z-[2] mx-auto grid w-full max-w-7xl gap-6 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:px-8 lg:py-28 xl:gap-20`}
        >
          {/* Left: Photo with decorative shapes */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 ease-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}
          >
            <div className="group/about-photo relative aspect-[3/4] w-full max-w-md lg:max-w-lg">
              {/* Decorative shape — blue rounded rectangle */}
              <div
                className="pointer-events-none absolute -left-6 -top-6 z-[1] h-[55%] w-[65%] rotate-[-12deg] rounded-[2.5rem] transition-transform duration-500 ease-out group-hover/about-photo:scale-[1.06]"
                style={{ backgroundColor: BLUE }}
                aria-hidden
              />
              {/* Decorative shape — sky panel */}
              <div
                className="pointer-events-none absolute -bottom-4 -right-4 z-[2] h-[60%] w-[70%] rotate-[8deg] rounded-[2.75rem] transition-transform duration-500 ease-out group-hover/about-photo:scale-[1.08]"
                style={{ backgroundColor: SKY }}
                aria-hidden
              />

              {/* Photo container */}
              <div className="relative z-10 h-full w-full overflow-hidden rounded-[2rem] bg-white/40 shadow-2xl shadow-emerald-900/10 ring-1 ring-white/60 backdrop-blur-sm">
                <Image
                  src="/Untitled design (8) (1).png"
                  alt="Soyeon — profile portrait"
                  fill
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover/about-photo:scale-[1.03]"
                  sizes="(min-width: 1024px) 45vw, 80vw"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`flex flex-col justify-center transition-all duration-1000 delay-200 ease-out ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}
          >
            {/* Section label */}
            <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-100/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 ring-1 ring-emerald-200/50">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
              About Me
            </span>

            <h2 className="text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-emerald-950 sm:text-[3.25rem] lg:text-[3.75rem]">
              Get to know
              <br />
              <span className="bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                about me!
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-[0.95rem] leading-[1.85] tracking-wide text-black/75 sm:text-base">
            <p>I’m Soyeon Kim, <strong>Software Engineering graduate from Curtin University</strong>. During my studies, I gained practical experience through <strong>a 6-month internship at Sustech Engineering</strong>, where I contributed to transforming traditional Word and Excel-based workflows into scalable web applications using PHP and Laravel. This experience strengthened my ability to build efficient, user-focused systems.</p>

            <p>I’m currently working as <strong>a part-time Software Developer at Setsy</strong>, building web applications with TypeScript, Next.js, Prisma, and Vercel. Alongside this, I work as <strong>an Export & Import Operator</strong>, where I’ve developed strong attention to detail and adaptability in fast-paced environments.</p>

            <p>I enjoy building projects that combine creativity and technical problem-solving. One of my key projects is <strong>an AI-powered Recipe Recommender web application</strong>, built with Remix, TypeScript, Tailwind CSS, and the Vercel AI SDK.</p>

            <p>I am highly motivated to continuously learn and adapt to new technologies, with a strong interest in building intuitive and impactful web applications.</p> 
            </div>

            {/* Skills */}
            <div className="mt-10">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-black/40">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.map((skill, i) => (
                  <span
                    key={skill}
                    className={`rounded-full border border-emerald-200/60 bg-white/70 px-4 py-1.5 text-[0.8rem] font-semibold tracking-wide text-emerald-800 shadow-sm backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}
                    style={{ transitionDelay: `${600 + i * 60}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-emerald-800 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.06em] text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-900/25"
              >
                <span>Contact Me</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L11.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.158-2.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="/Soyeon_Kim_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-800/20 bg-white/50 px-7 py-3 text-sm font-semibold tracking-wide text-emerald-900 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-800/40 hover:bg-white/80"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
                  <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
                </svg>
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
