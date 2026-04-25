"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const BLUE = "#5D7BFA";

const posts = [
  {
    title: "Why I prefer composition over inheritance in React",
    date: "Mar 12, 2026",
    readingTime: "6 min read",
    tags: ["React", "Architecture"],
    excerpt: "Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.",
  },
  {
    title: "Notes on accessibility in modern SPAs",
    date: "Feb 3, 2026",
    readingTime: "8 min read",
    tags: ["A11y", "Frontend"],
    excerpt: "Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.",
  },
  {
    title: "Shipping faster with feature flags",
    date: "Jan 18, 2026",
    readingTime: "5 min read",
    tags: ["Product", "Delivery"],
    excerpt: "Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.",
  },
  {
    title: "Shipping faster with feature flags",
    date: "Jan 18, 2026",
    readingTime: "5 min read",
    tags: ["Team", "Workflow"],
    excerpt: "Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.",
  },
  {
    title: "Shipping faster with feature flags",
    date: "Jan 18, 2026",
    readingTime: "7 min read",
    tags: ["Scale", "Experimentation"],
    excerpt: "Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.",
  },
];

export function BlogSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const visiblePosts = useMemo(() => {
    const total = posts.length;
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    return [
      { ...posts[prevIndex], position: "left" as const, index: prevIndex },
      { ...posts[activeIndex], position: "center" as const, index: activeIndex },
      { ...posts[nextIndex], position: "right" as const, index: nextIndex },
    ];
  }, [activeIndex]);

  const changeSlide = (nextIndex: number) => {
    if (isTransitioning || nextIndex === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(nextIndex);
      setIsTransitioning(false);
    }, 180);
  };

  const goPrev = () => changeSlide((activeIndex - 1 + posts.length) % posts.length);
  const goNext = () => changeSlide((activeIndex + 1) % posts.length);

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="scroll-mt-16 relative flex min-h-[calc(100vh-3.5rem)] items-center overflow-hidden border-b border-zinc-200/80 bg-white sm:min-h-[calc(100vh-4rem)]"
      style={{
        opacity: isVisible ? 1 : 0.45,
        transform: isVisible
          ? "perspective(1200px) rotateX(0deg) scale(1) translateY(0px)"
          : "perspective(1200px) rotateX(10deg) scale(0.96) translateY(48px)",
        filter: isVisible ? "blur(0px)" : "blur(6px)",
        clipPath: isVisible
          ? "inset(0% 0% 0% 0% round 0rem)"
          : "inset(12% 0% 0% 0% round 2.5rem)",
        transition:
          "transform 1400ms cubic-bezier(0.22, 1, 0.36, 1), filter 1200ms ease, clip-path 1400ms cubic-bezier(0.22, 1, 0.36, 1), opacity 4000ms ease",
      }}
    >
      <img
        src="/line.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-10 top-1/2 z-0 h-auto w-[42rem] -translate-y-1/2 rotate-90 "
      />
      <img
        src="/line.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 z-0 h-auto w-[42rem] -translate-y-1/2 rotate-265 scale-x-[-1]"
      />
      <img
        src="/star.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-10 top-24 z-0 h-auto w-20 opacity-80"
      />
      <img
        src="/star.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-14 bottom-28 z-0 h-auto w-14 rotate-12 opacity-70"
      />
      <img
        src="/star.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-28 z-0 h-auto w-20 -rotate-12 opacity-80"
      />
      <img
        src="/star.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-16 bottom-24 z-0 h-auto w-14 opacity-70"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[52vh] bg-gradient-to-b from-[#DFF9E1]/90 via-[#DFF9E1]/45 to-transparent" />

      <div className="relative mx-auto w-full max-w-[90rem] px-4 py-20 sm:px-6 lg:px-8">
        {/* Section header */}
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-block h-[3px] w-8 rounded-full bg-emerald-500" />
            <span className="font-mono text-[11px] tracking-[0.25em] text-emerald-600/70 uppercase">
              Latest Notes
            </span>
          </div>
          <h2 className="bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400 bg-clip-text text-transparent text-[90px]">
            Blog
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-black/40">
            Recent posts - connect this section to your CMS or MDX later.
          </p>
        </div>
        <div className="relative mt-12">
          <div
            className={[
              "grid grid-cols-1 items-center gap-5 transition-all duration-500 md:grid-cols-[0.95fr_1.1fr_0.95fr]",
              isTransitioning
                ? "translate-y-1 opacity-0"
                : "translate-y-0 opacity-100",
            ].join(" ")}
          >
            {visiblePosts.map((post) => {
              const isCenter = post.position === "center";

              return (
                <article
                  key={`${post.position}-${post.title}`}
                  className={[
                    "h-[700px] w-full justify-self-center overflow-hidden rounded-3xl border p-7 transition-all duration-500 md:h-[700px]",
                    isCenter
                      ? "z-10 scale-100 bg-white/95 shadow-[0_20px_60px_-24px_rgba(93,123,250,0.55)] md:h-[530px] md:w-[110%] md:scale-105"
                      : "bg-white/70 opacity-70 blur-[0.2px] md:w-[90%] md:scale-90",
                  ].join(" ")}
                  style={{ borderColor: `${BLUE}${isCenter ? "B3" : "80"}` }}
                >
                  <div className="flex h-full flex-col">
                    <time className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                      {post.date}
                    </time>
                    <h3 className="mt-3 text-xl font-semibold leading-snug text-zinc-900">
                      {post.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={`${post.index}-${tag}`}
                          className="rounded-full border border-[#7DD3FC]/25 bg-[#7DD3FC]/8 px-2.5 py-1 text-[12px] font-medium text-[#7DD3FC]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="my-4 h-px bg-zinc-200/80" />
                    <div className="flex-1 overflow-y-auto pr-2">
                      <p className="text-sm leading-7 text-zinc-600">{post.excerpt}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="rounded-full border border-zinc-300 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-700 cursor-pointer transition hover:-translate-y-0.5 hover:border-[#7DD3FC] hover:text-zinc-900"
              aria-label="Previous post"
            >
              Prev
            </button>
            <div className="flex items-center gap-2">
              {posts.map((post, index) => (
                <button
                  key={`${post.title}-${index}`}
                  type="button"
                  onClick={() => changeSlide(index)}
                  className={[
                    "h-2.5 rounded-full transition-all",
                    activeIndex === index
                      ? "w-8 bg-[#7DD3FC]"
                      : "w-2.5 bg-zinc-300 hover:bg-zinc-400",
                  ].join(" ")}
                  aria-label={`Go to post ${index + 1}`}
                />
              ))}
            </div>
            <div className="rounded-full border border-[#5D7BFA]/25 bg-white/85 px-3 py-1 text-xs font-medium tracking-[0.12em] text-[#4A67EE] uppercase">
              {String(activeIndex + 1).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="rounded-full border border-zinc-300 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-700 cursor-pointer transition hover:-translate-y-0.5 hover:border-[#7DD3FC] hover:text-zinc-900"
              aria-label="Next post"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
