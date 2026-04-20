import Image from "next/image";

import { HeroRoleImageRotator } from "./HeroRoleImageRotator";

export function HeroLanding() {
  return (
    <section
      id="hero"
      className="hero-section relative flex min-h-0 flex-1 flex-col overflow-hidden border-b border-black/5 bg-[linear-gradient(148deg,#ffffff_0%,#ffffff_24%,#DFF9E1_24%,#DFF9E1_76%,#ffffff_76%,#ffffff_100%)] text-black"
    >

      <div className="relative z-[10] mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-10 pt-6 sm:px-8 sm:pb-14 sm:pt-8 lg:px-10 lg:pb-16 lg:pt-8">
        <div className="grid flex-1 items-center gap-8 lg:min-h-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 xl:gap-16">
          {/* Left: Text Content */}
          <div className="relative z-20 flex min-w-0 flex-col justify-center">
            {/* Availability badge */}
            <div className="hero-fade-up mb-6 inline-flex w-fit items-center gap-2.5 rounded-full border border-emerald-200/60 bg-white/70 px-4 py-1.5 shadow-[0_1px_6px_rgba(0,0,0,0.04)] backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium tracking-wide text-emerald-700">
                Available for opportunities
              </span>
            </div>

            {/* Name heading */}
            <div className="hero-fade-up hero-delay-1 inline-flex flex-col items-start">
              <span className="font-mono text-[clamp(0.85rem,1.4vw,1.05rem)] font-medium uppercase tracking-[0.18em] text-black/40">
                Hi, I&apos;m
              </span>
              <h1 className="hero-name-shimmer relative mt-1 whitespace-nowrap bg-gradient-to-r from-emerald-900 via-emerald-500 to-emerald-300 bg-[length:220%_100%] bg-clip-text text-[clamp(3.8rem,9vw,7rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-transparent">
                Soyeon Kim
              </h1>
            </div>

            {/* Role rotator */}
            <div className="hero-fade-up hero-delay-2">
              <HeroRoleImageRotator />
            </div>

            {/* Description */}
            <p className="hero-fade-up hero-delay-3 mt-7 max-w-lg text-[0.95rem] leading-[1.7] text-black/55 sm:text-base">
              Welcome! Feel free to explore my portfolio — you&apos;ll find
              everything about my projects, skills, and professional journey.
              Glad you stopped by.
            </p>

            {/* CTA buttons */}
            <div className="hero-fade-up hero-delay-4 mt-9 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_2px_16px_rgba(16,185,129,0.3)] transition-all duration-300 hover:bg-emerald-700 hover:shadow-[0_4px_24px_rgba(16,185,129,0.4)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="relative z-10">View Projects</span>
                <svg
                  className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-7 py-3 text-sm font-semibold text-black/70 backdrop-blur-sm transition-all duration-300 hover:border-black/20 hover:bg-white hover:text-black hover:-translate-y-0.5 active:translate-y-0"
              >
                Get in Touch
              </a>
            </div>

            {/* Decorative line */}
            <div className="hero-fade-up hero-delay-5 mt-12 flex items-center gap-4">
              <div className="h-px w-12 bg-gradient-to-r from-emerald-400/60 to-transparent" />
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-black/25">
                Scroll to explore
              </span>
            </div>
          </div>

          {/* Right: Photo + decorative shapes */}
          <div className="relative z-0 mx-auto min-w-0 w-full max-w-2xl lg:mx-0 lg:max-w-none lg:justify-self-end">
            <div className="hero-fade-up hero-delay-2 group/hero-decor relative aspect-[4/5] w-full max-w-xl sm:aspect-[3/4] sm:max-w-2xl lg:aspect-auto lg:min-h-[min(82vh,720px)] lg:max-w-full">
              {/* Decorative shape 1 */}
              <div
                className="hero-shape-rotate pointer-events-none absolute -right-4 -top-[3%] z-[1] h-[54%] w-[68%] rounded-[2.5rem] bg-gradient-to-br from-[#5D7BFA] to-[#8B9FFF] opacity-90 shadow-[0_8px_40px_rgba(93,123,250,0.2)] transition-transform duration-700 ease-out will-change-transform group-hover/hero-decor:scale-[1.06] sm:-right-16 sm:-top-[2%] sm:h-[56%] sm:w-[72%] lg:-top-[12%] lg:h-[65%] lg:w-[88%]"
                aria-hidden
              />
              {/* Decorative shape 2 */}
              <div
                className="hero-shape-rotate-reverse pointer-events-none absolute bottom-[5%] right-[4%] z-[2] h-[58%] w-[74%] rounded-[2.8rem] bg-gradient-to-tl from-[#7DD3FC] to-[#BAE6FD] opacity-85 shadow-[0_8px_40px_rgba(125,211,252,0.2)] transition-transform duration-700 ease-out will-change-transform group-hover/hero-decor:scale-[1.08] sm:bottom-[3%] sm:right-[-8%] sm:h-[64%] sm:w-[80%] lg:bottom-[2%] lg:h-[68%] lg:w-[86%]"
                aria-hidden
              />
              {/* Small accent shape */}
              <div
                className="pointer-events-none absolute -left-4 top-[40%] z-[3] h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-300 opacity-60 shadow-lg transition-transform duration-500 group-hover/hero-decor:translate-x-2 group-hover/hero-decor:translate-y-1 sm:-left-6 sm:h-20 sm:w-20 lg:-left-8 lg:h-24 lg:w-24"
                aria-hidden
              />

              {/* Photo container */}
              <div className="absolute inset-0 flex items-end justify-center pb-0 pt-6 sm:items-center sm:pb-6 sm:pt-0">
                <div className="group/photo relative z-10 mx-auto w-full max-w-[min(92vw,560px)] origin-bottom transition-transform duration-500 ease-out will-change-transform hover:scale-[1.02] sm:max-w-[min(90vw,680px)] lg:mx-0 lg:ml-auto lg:max-w-full">
                  <Image
                    src="/졻업사진.png"
                    alt="Soyeon Kim profile"
                    width={3580}
                    height={5971}
                    priority
                    sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 48vw, 90vw"
                    className="relative z-10 h-auto w-full max-h-[min(88vh,880px)] object-contain object-bottom drop-shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out group-hover/photo:drop-shadow-[0_28px_56px_rgba(0,0,0,0.18)] lg:max-h-[min(84vh,840px)] xl:max-h-[min(86vh,920px)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-20 bg-gradient-to-t from-white/60 to-transparent" />
    </section>
  );
}
