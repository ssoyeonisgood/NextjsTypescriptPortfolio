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

export function BlogSection() {
  return (
    <section
      id="blog"
      className="scroll-mt-16 flex min-h-screen items-center border-b border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950"
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Blog</h2>
        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
          Recent posts-connect this section to your CMS or MDX later.
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
                  Read more -&gt;
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
