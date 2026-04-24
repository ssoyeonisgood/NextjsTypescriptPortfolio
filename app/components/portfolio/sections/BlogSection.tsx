"use client";

import { useMemo, useState } from "react";

const posts = [
  {
    title: "Why I prefer composition over inheritance in React",
    date: "Mar 12, 2026",
    excerpt: "Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.",
  },
  {
    title: "Notes on accessibility in modern SPAs",
    date: "Feb 3, 2026",
    excerpt: "Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.",
  },
  {
    title: "Shipping faster with feature flags",
    date: "Jan 18, 2026",
    excerpt: "Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.",
  },
  {
    title: "Shipping faster with feature flags",
    date: "Jan 18, 2026",
    excerpt: "Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.",
  },
  {
    title: "Shipping faster with feature flags",
    date: "Jan 18, 2026",
    excerpt: "Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.Focus management, landmarks, and keyboard flows that matter.",
  },
];

export function BlogSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const visiblePosts = useMemo(() => {
    const total = posts.length;
    const prevIndex = (activeIndex - 1 + total) % total;
    const nextIndex = (activeIndex + 1) % total;

    return [
      { ...posts[prevIndex], position: "left" as const },
      { ...posts[activeIndex], position: "center" as const },
      { ...posts[nextIndex], position: "right" as const },
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
      id="blog"
      className="scroll-mt-16 relative flex min-h-[calc(100vh-3.5rem)] items-center overflow-hidden border-b border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950 sm:min-h-[calc(100vh-4rem)]"
    >
      <div className="pointer-events-none absolute -left-28 top-12 h-72 w-72 rounded-full bg-emerald-300/30 blur-3xl dark:bg-emerald-500/20" />
      <div className="pointer-events-none absolute -right-24 bottom-14 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl dark:bg-cyan-500/15" />

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
                    "h-[360px] w-full justify-self-center overflow-hidden rounded-3xl border p-7 transition-all duration-500 md:h-[400px]",
                    isCenter
                      ? "z-10 scale-100 border-emerald-300/70 bg-white/95 shadow-[0_20px_60px_-24px_rgba(16,185,129,0.6)] dark:border-emerald-500/30 dark:bg-zinc-900/90 md:h-[460px] md:w-[98%] md:scale-105"
                      : "border-zinc-200/90 bg-white/70 opacity-70 blur-[0.2px] dark:border-zinc-800 dark:bg-zinc-900/60 md:w-[90%] md:scale-90",
                  ].join(" ")}
                >
                  <div className="flex h-full flex-col">
                    <time className="text-xs uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                      {post.date}
                    </time>
                    <h3 className="mt-3 text-xl font-semibold leading-snug text-zinc-900 dark:text-zinc-100">
                      {post.title}
                    </h3>
                    <div className="my-4 h-px bg-zinc-200/80 dark:bg-zinc-700/70" />
                    <div className="flex-1 overflow-y-auto pr-2">
                      <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
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
              className="rounded-full border border-zinc-300 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-zinc-100"
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
                      ? "w-8 bg-emerald-600 dark:bg-emerald-400"
                      : "w-2.5 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-700 dark:hover:bg-zinc-500",
                  ].join(" ")}
                  aria-label={`Go to post ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={goNext}
              className="rounded-full border border-zinc-300 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-emerald-400 hover:text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-zinc-100"
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
