const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Example Corp",
    period: "2022 - Present",
    description:
      "Led UI architecture for customer-facing products, improved performance, and mentored junior developers.",
  },
  {
    role: "Full Stack Developer",
    company: "Startup Studio",
    period: "2019 - 2022",
    description:
      "Built MVPs with Next.js and Node.js, integrated third-party APIs, and shipped features on tight deadlines.",
  },
  {
    role: "Junior Developer",
    company: "Digital Agency",
    period: "2017 - 2019",
    description:
      "Implemented responsive layouts, collaborated with designers, and maintained legacy codebases.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-16 flex min-h-screen items-center border-b border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950"
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experiences</h2>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Roles and impact-swap in your real timeline and achievements.
        </p>
        <ol className="relative mt-12 space-y-0 border-l border-zinc-200 pl-8 dark:border-zinc-800">
          {experiences.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[33px] top-1.5 flex h-[14px] w-[14px] rounded-full border-2 border-indigo-600 bg-white dark:bg-zinc-950" />
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{job.period}</p>
              <h3 className="mt-1 text-lg font-semibold">{job.role}</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{job.company}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-zinc-700 dark:text-zinc-300">{job.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
