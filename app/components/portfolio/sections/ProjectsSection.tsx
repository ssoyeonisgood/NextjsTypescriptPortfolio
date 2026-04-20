const projects = [
  {
    title: "E-commerce Dashboard",
    description: "Analytics and inventory management with real-time updates.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    href: "#",
  },
  {
    title: "Community Forum",
    description: "Discussion platform with moderation tools and notifications.",
    stack: ["React", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Design System",
    description: "Reusable components and documentation for product teams.",
    stack: ["Storybook", "CSS"],
    href: "#",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-16 flex min-h-screen items-center border-b border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-950"
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">My Projects</h2>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Selected work-link to demos, repos, or case studies.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.title}>
              <a
                href={project.href}
                className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-indigo-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-indigo-700"
              >
                <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-200/80 to-zinc-200 dark:from-indigo-900/50 dark:to-zinc-800" />
                <h3 className="mt-4 text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
