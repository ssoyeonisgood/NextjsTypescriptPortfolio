import { Header } from "./Header";
import { HeroLanding } from "./HeroLanding";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "Example Corp",
    period: "2022 — Present",
    description:
      "Led UI architecture for customer-facing products, improved performance, and mentored junior developers.",
  },
  {
    role: "Full Stack Developer",
    company: "Startup Studio",
    period: "2019 — 2022",
    description:
      "Built MVPs with Next.js and Node.js, integrated third-party APIs, and shipped features on tight deadlines.",
  },
  {
    role: "Junior Developer",
    company: "Digital Agency",
    period: "2017 — 2019",
    description:
      "Implemented responsive layouts, collaborated with designers, and maintained legacy codebases.",
  },
];

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

const posts = [
  {
    title: "Why I prefer composition over inheritance in React",
    date: "Mar 12, 2026",
    excerpt: "Patterns that keep components flexible and easier to test.",
    href: "#",
  },
  {
    title: "Notes on accessibility in modern SPAs",
    date: "Feb 3, 2026",
    excerpt: "Focus management, landmarks, and keyboard flows that matter.",
    href: "#",
  },
  {
    title: "Shipping faster with feature flags",
    date: "Jan 18, 2026",
    excerpt: "Reducing risk while iterating with small, reversible changes.",
    href: "#",
  },
];

export function Portfolio() {
  return (
    <div id="top" className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
      <Header />
      <div className="flex min-h-[calc(100dvh-3.5rem)] flex-col bg-white dark:bg-white sm:min-h-[calc(100dvh-4rem)]">
        <HeroLanding />
      </div>

      <main>
        {/* About */}
        <section
          id="about"
          className="scroll-mt-16 border-b border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-950"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">About Me</h2>
            <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
              A short introduction you can replace with your story, values, and what you&apos;re looking for
              next.
            </p>
            <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
              <div className="space-y-4 text-zinc-700 leading-relaxed dark:text-zinc-300">
                <p>
                  I&apos;m a developer who enjoys the intersection of design and engineering—building interfaces
                  that feel fast, accessible, and intentional. Outside of work, I contribute to open source and
                  write about patterns I learn along the way.
                </p>
                <p>
                  My toolkit includes modern JavaScript/TypeScript, React and Next.js, and pragmatic UX
                  decisions backed by data and user feedback.
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

        {/* Experience */}
        <section
          id="experience"
          className="scroll-mt-16 border-b border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Experiences</h2>
            <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Roles and impact—swap in your real timeline and achievements.
            </p>
            <ol className="relative mt-12 space-y-0 border-l border-zinc-200 pl-8 dark:border-zinc-800">
              {experiences.map((job, i) => (
                <li key={i} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[33px] top-1.5 flex h-[14px] w-[14px] rounded-full border-2 border-indigo-600 bg-white dark:bg-zinc-950" />
                  <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{job.period}</p>
                  <h3 className="mt-1 text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{job.company}</p>
                  <p className="mt-3 max-w-2xl text-zinc-700 leading-relaxed dark:text-zinc-300">
                    {job.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-16 border-b border-zinc-200/80 bg-white dark:border-zinc-800/80 dark:bg-zinc-950"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">My Projects</h2>
            <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Selected work—link to demos, repos, or case studies.
            </p>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <li key={p.title}>
                  <a
                    href={p.href}
                    className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-zinc-50 p-6 transition hover:border-indigo-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-indigo-700"
                  >
                    <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-indigo-200/80 to-zinc-200 dark:from-indigo-900/50 dark:to-zinc-800" />
                    <h3 className="mt-4 text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {p.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {p.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Blog */}
        <section
          id="blog"
          className="scroll-mt-16 border-b border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950"
        >
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Blog</h2>
            <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Recent posts—connect this section to your CMS or MDX later.
            </p>
            <ul className="mt-12 divide-y divide-zinc-200 dark:divide-zinc-800">
              {posts.map((post) => (
                <li key={post.title} className="py-6 first:pt-0">
                  <a href={post.href} className="group block">
                    <time className="text-sm text-zinc-500 dark:text-zinc-400">{post.date}</time>
                    <h3 className="mt-2 text-lg font-semibold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                      {post.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
                    <span className="mt-3 inline-block text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      Read more →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-16 bg-white dark:bg-zinc-950">
          <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Get in Touch</h2>
            <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Have a project in mind or want to collaborate? Send a message—I&apos;ll get back to you soon.
            </p>
            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <form className="space-y-4" action="#" method="post">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none ring-indigo-500/0 transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="mt-1.5 w-full resize-y rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-zinc-700 dark:bg-zinc-900"
                    placeholder="Tell me about your project…"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-500 sm:w-auto"
                >
                  Send message
                </button>
              </form>
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/50">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                  Elsewhere
                </h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <a
                      href="mailto:hello@example.com"
                      className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                    >
                      hello@example.com
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-zinc-700 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-zinc-700 hover:text-indigo-600 dark:text-zinc-300 dark:hover:text-indigo-400">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-zinc-50 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
