"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    role: "Software Engineer",
    company: "Setsy",
    period: "2026.01 — Present",
    description:
      "Building and maintaining software products as a software engineer.",
    active: true,
  },
  {
    role: "Export & Import Operator",
    company: "GML Perth Pty Ltd",
    period: "2026.01 — Present",
    description:
      "Managing export and import operations, handling logistics and documentation.",
    active: true,
  },
  {
    role: "Office Administrator",
    company: "GT Engineering",
    period: "2024.08 — 2025.02",
    description:
      "Handled office administration, coordinated engineering projects, and managed documentation.",
  },
  {
    role: "Software Assistant",
    company: "Sustech Engineering Pty Ltd",
    period: "2024.03 — 2024.06",
    description:
      "Assisted in software development and engineering support tasks.",
  },
  {
    role: "Software Engineer Intern",
    company: "Sustech Engineering Pty Ltd",
    period: "2023.12 — 2024.03",
    description:
      "Contributed to engineering software projects as an intern, gaining hands-on development experience.",
  },
  {
    role: "Barista",
    company: "Gelare",
    period: "2022.12 — 2024.03",
    description:
      "Delivered quality customer service and managed daily café operations.",
  },
  {
    role: "Sushi Maker",
    company: "Super Tetsudo",
    period: "2020.05 — 2022.12",
    description:
      "Prepared sushi and Japanese cuisine, maintained food safety standards.",
  },
];

function TimelineNumber({ index }: { index: number }) {
  return (
    <span className="font-mono text-[10px] font-medium tabular-nums text-black/20 sm:text-xs">
      {String(index + 1).padStart(2, "0")}
    </span>
  );
}

export function ExperienceSection() {
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
      id="experience"
      className="exp-section relative flex min-h-[calc(100vh-3.5rem)] scroll-mt-16 items-center overflow-hidden bg-white sm:min-h-[calc(100vh-4rem)]"
    >
      {/* Soft mesh gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[15%] -top-[10%] h-[70%] w-[55%] rounded-full blur-[80px]" style={{ background: "radial-gradient(circle, rgba(93,123,250,0.12) 0%, transparent 70%)" }} />
        <div className="absolute -left-[10%] bottom-[5%] h-[50%] w-[45%] rounded-full blur-[90px]" style={{ background: "radial-gradient(circle, rgba(125,211,252,0.14) 0%, transparent 70%)" }} />
        <div className="absolute left-1/2 top-1/3 h-[35%] w-[30%] -translate-x-1/2 rounded-full blur-[70px]" style={{ background: "radial-gradient(circle, rgba(93,123,250,0.08) 0%, transparent 70%)" }} />
      </div>

      {/* Subtle dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d1d5db 0.6px, transparent 0.6px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Floating decorative elements — #7DD3FC (sky) & #5D7BFA (indigo) */}
      <div className="pointer-events-none absolute right-[8%] top-[12%] exp-float-slow h-28 w-28 rotate-12 rounded-3xl border-2 sm:h-36 sm:w-36 lg:h-44 lg:w-44" style={{ borderColor: "rgba(93,123,250,0.35)" }} />
      <div className="pointer-events-none absolute bottom-[15%] left-[5%] exp-float-medium h-16 w-16 rotate-45 rounded-xl border-2 sm:h-20 sm:w-20" style={{ borderColor: "rgba(125,211,252,0.4)" }} />

      {/* Floating rings */}
      <div className="pointer-events-none absolute left-[15%] top-[8%] exp-float-medium">
        <div className="h-10 w-10 rounded-full border-2 sm:h-14 sm:w-14" style={{ borderColor: "rgba(93,123,250,0.4)" }} />
      </div>
      <div className="pointer-events-none absolute right-[12%] bottom-[20%] exp-float-slow">
        <div className="h-20 w-20 rounded-full border-2 sm:h-28 sm:w-28" style={{ borderColor: "rgba(125,211,252,0.35)" }} />
      </div>

      {/* Floating dots */}
      <div className="pointer-events-none absolute left-[25%] top-[22%] exp-float-fast">
        <div className="h-3 w-3 rounded-full" style={{ backgroundColor: "rgba(93,123,250,0.45)" }} />
      </div>
      <div className="pointer-events-none absolute right-[20%] top-[35%] exp-float-medium">
        <div className="h-3.5 w-3.5 rounded-full" style={{ backgroundColor: "rgba(125,211,252,0.5)" }} />
      </div>
      <div className="pointer-events-none absolute left-[8%] bottom-[35%] exp-float-slow">
        <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: "rgba(93,123,250,0.35)" }} />
      </div>
      <div className="pointer-events-none absolute right-[6%] top-[55%] exp-float-fast">
        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: "rgba(125,211,252,0.45)" }} />
      </div>

      {/* Floating plus signs */}
      <div className="pointer-events-none absolute left-[12%] top-[50%] exp-float-medium text-2xl font-light select-none" style={{ color: "rgba(93,123,250,0.4)" }}>+</div>
      <div className="pointer-events-none absolute right-[15%] top-[15%] exp-float-slow text-xl font-light select-none" style={{ color: "rgba(125,211,252,0.45)" }}>+</div>

      {/* Small floating diamond */}
      <div className="pointer-events-none absolute right-[30%] bottom-[12%] exp-float-fast">
        <div className="h-5 w-5 rotate-45 border-2" style={{ borderColor: "rgba(93,123,250,0.35)" }} />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        {/* Section header */}
        <div className={`exp-header ${visible ? "exp-visible" : ""}`}>
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-block h-[3px] w-8 rounded-full bg-emerald-500" />
            <span className="font-mono text-[11px] tracking-[0.25em] text-emerald-600/70 uppercase">
              Career Timeline
            </span>
          </div>
          <h2 className="bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400 bg-clip-text text-transparent text-[90px]">
            Experience
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-black/40">
            My professional journey — from hospitality to software engineering.
          </p>
        </div>

        {/* Timeline list */}
        <div className="mt-14 sm:mt-16 lg:mt-20">
          {experiences.map((job, i) => (
            <div
              key={`${job.company}-${job.period}`}
              className={`exp-card group relative ${visible ? "exp-card-visible" : ""}`}
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            >
              {/* Row container */}
              <div className="relative border-t border-black/[0.08] transition-colors duration-500 group-hover:border-emerald-300/60">
                <div className="grid items-start gap-4 py-6 sm:grid-cols-[40px_170px_1fr_1.5fr] sm:items-center sm:gap-6 sm:py-7 lg:grid-cols-[48px_200px_1fr_1.8fr]">
                  {/* Index number */}
                  <div className="hidden sm:block">
                    <TimelineNumber index={i} />
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2.5">
                    <span className="sm:hidden">
                      <TimelineNumber index={i} />
                    </span>
                    {job.active && (
                      <span className="relative flex h-2 w-2 shrink-0">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                      </span>
                    )}
                    <span className="font-mono text-xs tracking-wider text-black sm:text-[13px]">
                      {job.period}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold tracking-[-0.01em] text-black/85 transition-colors duration-300 group-hover:text-emerald-700 sm:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-0.5 text-base font-medium text-black/35 transition-colors duration-300 group-hover:text-black/55">
                      {job.company}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="max-w-2xl text-base leading-relaxed text-black/30 transition-colors duration-300 group-hover:text-black/50 sm:text-lg">
                    {job.description}
                  </p>
                </div>

                {/* Hover accent bar */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-300 transition-all duration-700 ease-out group-hover:w-full" />

                {/* Hover background glow */}
                <div className="pointer-events-none absolute inset-0 -z-10 rounded-lg bg-gradient-to-r from-emerald-50/0 to-emerald-50/0 transition-all duration-500 group-hover:from-emerald-50/50 group-hover:to-teal-50/30" />
              </div>
            </div>
          ))}

          {/* Bottom border */}
          <div className="border-t border-black/[0.06]" />
        </div>
      </div>
    </section>
  );
}
