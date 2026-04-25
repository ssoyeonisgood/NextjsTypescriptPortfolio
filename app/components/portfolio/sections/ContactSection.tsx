export function ContactSection() {
  const contacts = [
    {
      label: "LinkedIn",
      value: "linkedin.com/in/your-profile",
      href: "https://linkedin.com/in/your-profile",
    },
    {
      label: "GitHub",
      value: "github.com/your-username",
      href: "https://github.com/your-username",
    },
    {
      label: "Email",
      value: "hello@example.com",
      href: "mailto:hello@example.com",
    },
  ];

  return (
    <section id="contact" className="scroll-mt-16 border-b border-zinc-200/80">
      <div className="relative flex min-h-[calc(100vh-3.5rem)] items-center overflow-hidden border-b border-black/5 bg-[linear-gradient(148deg,#ffffff_0%,#ffffff_24%,#DFF9E1_24%,#DFF9E1_76%,#ffffff_76%,#ffffff_100%)] sm:min-h-[calc(100vh-4rem)]">

        <div className="relative z-[2] mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-block h-[3px] w-8 rounded-full bg-emerald-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-emerald-700/70">
              Contact
            </span>
          </div>
          <h2 className="bg-gradient-to-r from-emerald-700 via-emerald-500 to-teal-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            Connect With Me
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-black/55 sm:text-base">
            Have a project in mind or want to collaborate? Reach out through LinkedIn, GitHub,
            or email.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.label === "Email" ? undefined : "_blank"}
              rel={contact.label === "Email" ? undefined : "noreferrer"}
              className="group rounded-3xl border border-emerald-200/70 bg-white/75 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/10"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-700/70">
                {contact.label}
              </p>
              <p className="mt-2 text-sm font-semibold text-zinc-900 transition group-hover:text-emerald-700">
                {contact.value}
              </p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition group-hover:text-zinc-700">
                Open link
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </p>
            </a>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
