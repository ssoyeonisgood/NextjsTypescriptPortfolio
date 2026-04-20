export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-16 flex min-h-screen items-center border-b border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-950"
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About Me</h2>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          A short introduction you can replace with your story, values, and what you&apos;re looking for next.
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <div className="space-y-4 leading-relaxed text-zinc-700 dark:text-zinc-300">
            <p>
              I&apos;m a developer who enjoys the intersection of design and engineering - building interfaces that
              feel fast, accessible, and intentional. Outside of work, I contribute to open source and write
              about patterns I learn along the way.
            </p>
            <p>
              My toolkit includes modern JavaScript/TypeScript, React and Next.js, and pragmatic UX decisions
              backed by data and user feedback.
            </p>
          </div>
          <aside className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
              Highlights
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-400">▹</span>
                Based in your city
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-400">▹</span>
                Open to remote roles
              </li>
              <li className="flex gap-2">
                <span className="text-indigo-600 dark:text-indigo-400">▹</span>
                Speaking &amp; writing
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
