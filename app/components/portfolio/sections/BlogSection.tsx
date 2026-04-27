"use client";

import "animate.css";
import { useEffect, useRef, useState } from "react";

const BLUE = "#5D7BFA";

const posts = [
  {
    title: "Internship at SUSTECH Engineering: Transforming Document Workflows into Web Systems",
    date: "3, March 2024",
    tags: ["Internship", "Web Application", "Requirement Analysis", "Documentation", "Teamwork", "Agile Development", "Problem Solving"],
    excerpt: `During my internship at SUSTECH Engineering, I worked on improving their document management process. The company relied heavily on Word and Excel files, which were inefficient and error-prone when handling large volumes of data. To address this, our team transformed the workflow into a web-based system by converting forms into dynamic web interfaces using PHP and Laravel, integrated with a MySQL database. We also implemented validation and automation features, significantly improving efficiency and simplifying document management for both staff and clients.
    
    Before development, I collaborated with my team and our internal client to create a design document based on gathered requirements. This defined the goal of enhancing the website by enabling users to complete and submit forms online. It included functional requirements such as dynamic form rendering, submission, and validation, as well as non-functional requirements like responsiveness, security, and data privacy, along with a Work Breakdown Structure (WBS).
    
    Through this experience, I learned how to analyse client needs, translate them into technical requirements, and break them down into actionable tasks. It also reinforced the importance of planning, documentation, and effective collaboration in delivering user-focused solutions.`,
  },
  {
    title: "Capstone Project: Enrollment and Availability Tracker",
    date: "08, November 2024",
    tags: ["Team work", "Web Development", "Software Design", "Documentation", "client Communication", "Agile Development", "Problem Solving"],
    excerpt: `This capstone project tackled a real operational problem at Curtin University: Course Coordinators were managing unit and study plan data across multiple campuses through large, error-prone Excel files. We built a web-based platform that centralised this information into a structured database and made updates far easier to manage.

    From day one, we designed the system from the ground up. Beyond implementation, we produced clear technical documentation, shaped the architecture, and made deliberate engineering decisions as a team. The project sharpened both our software design thinking and our ability to communicate complex ideas clearly.

Over the year, we ran weekly team syncs and maintained close client communication, which helped us identify pain points early and iterate with purpose. Every team member scored above 90, reflecting not only technical quality but also strong collaboration and delivery discipline.`,
  },
  {
    title: "Office Administrator at GT Engineering: From Operations to Building a Website",
    date: "1, January 2025",
    tags: ["Office Administrator", "WordPress", "Website Development", "Client Communication", "Technical Adaptation", "Project Ownership"],
    excerpt: `While working as an Office Administrator at GT Engineering Pty Ltd, a company providing labour and engineering support for industrial projects, I was responsible for managing welder payments and coordinating with client companies to keep daily operations running smoothly.

During this period, the director learned that I was studying software engineering and asked whether I could build the company’s website. At the time, GT Engineering had little online presence, so this became a valuable opportunity to apply my technical skills in a real business environment. Using WordPress, I designed and developed a website that clearly presented the company’s services and strengthened its professional image for potential clients.

This experience pushed me beyond my original role and gave me full ownership of a technical project from start to finish. It taught me how to adapt technical knowledge to practical business needs, communicate effectively with non-technical stakeholders, and deliver a useful solution in a professional setting.`,
  },
  {
    title: "Recipe Recommender: Solving a Daily Problem with AI",
    date: "18, December 2025",
    tags: ["Personal Project", "AI Application", "API Integration", "Full-stack Development", "AI-powered Features", "Problem Solving", "User-focused Solutions"],
    excerpt: `One of my most rewarding personal projects was building Recipe Recommender, an AI-powered web application using Remix, React, TypeScript, Tailwind CSS, and Vercel’s AI SDK. The idea came from a real-life problem after moving in with my partner, where we often struggled with the daily question: “What should we eat?” I wanted to solve this by building a system that could suggest recipes based on available ingredients.

To achieve this, I developed an application where users can upload a photo of ingredients. The image is sent to a server-side API, processed, and passed to a language model (GPT-4.1-mini) via Vercel’s AI SDK, which extracts ingredients and returns recipe suggestions. This project gave me hands-on experience with API integration, full-stack development, and AI-powered features.

One of the main challenges I faced was handling API limitations. Since large language models return responses as generated text, ensuring consistent JSON formatting required careful prompt design. Additionally, I encountered timeout issues during deployment on Netlify’s free tier, where serverless functions would fail if they exceeded execution time limits. To resolve this, I reduced the response size (e.g., limiting the number of recipes returned), optimized the API flow, and improved error handling by debugging with logs and developer tools.

This project strengthened my skills in modern web development and AI integration, and reinforced my ability to turn real-world problems into practical, user-focused solutions`,
  },
  {
    title: "Building My Portfolio with AI: Leveraging Cursor",
    date: "27, April 2026",
    tags: ["AI-Assisted Development", "Cursor AI","Web Development", "Code Quality Improvement", "Technical Ownership", "Collaboration with AI"],
    excerpt: `While building my portfolio website, I used Cursor’s AI to improve development speed and code quality. It helped me quickly scaffold components, debug issues, and explore alternative implementations, allowing me to focus more on structure and user experience. I also leveraged AI to reduce time spent on design decisions, using it to iterate on UI ideas more efficiently.

I treated AI as a support tool, not a replacement. I carefully reviewed all generated code, watching for incorrect logic, unnecessary complexity, and over-reliance on AI outputs. I validated results, simplified where needed, and ensured consistency with my overall architecture. To make the most of AI, I actively used features like Ask, Agent, and Plan, adapting how I interacted with the tool depending on the task.

Additionally, I guided the AI with more specific context, such as frontend design-focused prompts (e.g. /frontend-design), to receive more structured and relevant suggestions. This allowed me to get more professional and targeted assistance, especially when refining UI and layout decisions.

This experience taught me how to effectively collaborate with AI, using it to accelerate development while maintaining full control over code quality, design decisions, and overall system structure.`,
  },
  {
    title: "Working at Setsy: Real-World Development and Team Collaboration",
    date: "27, April 2026",
    tags: ["Software Developer","Real-World Application","GitHub","Cursor AI","Github","Live Product","Team Collaboration"],
    excerpt: `I am currently working as a part-time Software Developer at Setsy, where I build and enhance web application features using TypeScript, Next.js, Prisma, and Vercel. My work involves developing new functionalities and improving existing ones to deliver a better user experience.

Working remotely, I collaborate closely with the team through Slack, ensuring clear communication and alignment on tasks. Once I complete a feature, I create a pull request on GitHub, where senior developers review my code and provide feedback. I then iterate on my implementation based on their comments, refining both code quality and structure.

Throughout this process, I also leverage AI tools such as Cursor to support my development workflow. It helps me quickly explore solutions, debug issues, and improve code efficiency, allowing me to learn independently while working remotely. At the same time, I ensure all AI-assisted outputs are carefully reviewed and aligned with team standards.

Through this experience, I have gained practical insight into real-world development workflows, including version control, code reviews, and remote collaboration. It has strengthened both my technical skills and my ability to learn proactively while contributing effectively within a team.`,
  },
].reverse();

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
  const activePost = posts[activeIndex];
  const nextIndex = (activeIndex + 1) % posts.length;

  return (
    <section
      ref={sectionRef}
      id="blog"
      className="scroll-mt-16 relative flex min-h-[calc(100vh-3.5rem)] items-center overflow-hidden border-b border-zinc-200/80 bg-white sm:min-h-[calc(100vh-4rem)]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0px)" : "translateY(24px)",
        transition: "opacity 700ms ease, transform 700ms ease",
      }}
    >
      <img
        src="/line.png"
        alt=""
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -left-10 top-1/2 z-0 h-auto w-[42rem] -translate-y-1/2 rotate-90",
          isVisible ? "animate__animated animate__flash" : "",
        ].join(" ")}
        style={{ animationDuration: "5.5s", animationDelay: "200ms" }}
      />
      <img
        src="/line.png"
        alt=""
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -right-10 top-1/2 z-0 h-auto w-[42rem] -translate-y-1/2 rotate-265 scale-x-[-1]",
          isVisible ? "animate__animated animate__flash" : "",
        ].join(" ")}
        style={{ animationDuration: "6.2s", animationDelay: "900ms" }}
      />
      <img
        src="/star.png"
        alt=""
        aria-hidden="true"
        className={[
          "pointer-events-none absolute left-10 top-24 z-0 h-auto w-20 opacity-80",
          isVisible ? "animate__animated animate__flash" : "",
        ].join(" ")}
        style={{ animationDuration: "2.2s", animationDelay: "0ms" }}
      />
      <img
        src="/star.png"
        alt=""
        aria-hidden="true"
        className={[
          "pointer-events-none absolute left-14 bottom-28 z-0 h-auto w-14 rotate-12 opacity-70",
          isVisible ? "animate__animated animate__flash" : "",
        ].join(" ")}
        style={{ animationDuration: "2.8s", animationDelay: "500ms" }}
      />
      <img
        src="/star.png"
        alt=""
        aria-hidden="true"
        className={[
          "pointer-events-none absolute right-6 top-28 z-0 h-auto w-20 -rotate-12 opacity-80",
          isVisible ? "animate__animated animate__flash" : "",
        ].join(" ")}
        style={{ animationDuration: "2.4s", animationDelay: "250ms" }}
      />
      <img
        src="/star.png"
        alt=""
        aria-hidden="true"
        className={[
          "pointer-events-none absolute right-16 bottom-24 z-0 h-auto w-14 opacity-70",
          isVisible ? "animate__animated animate__flash" : "",
        ].join(" ")}
        style={{ animationDuration: "3s", animationDelay: "850ms" }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[52vh] bg-gradient-to-b from-[#DFF9E1]/90 via-[#DFF9E1]/45 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
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
          <p className="mt-3 max-w-xl text-base leading-relaxed text-black/40">
            Stories from real projects, practical lessons, and my growth as an engineer.
          </p>
        </div>
        <div className="relative mt-12">
          <div
            className={[
              "mx-auto w-full transition-all duration-500",
              isTransitioning
                ? "translate-y-1 opacity-0"
                : "translate-y-0 opacity-100",
            ].join(" ")}
          >
            <article
              key={`${activePost.title}-${activeIndex}`}
              className="h-[700px] w-full overflow-hidden rounded-3xl border bg-white/95 p-7 shadow-[0_22px_65px_-26px_rgba(93,123,250,0.62)] md:h-[650px]"
              style={{ borderColor: `${BLUE}B3` }}
            >
              <div className="flex h-full flex-col">
                <time className="text-xs uppercase tracking-[0.18em] text-zinc-500">
                  {activePost.date}
                </time>
                <h3 className="mt-3 text-2xl font-semibold leading-snug text-zinc-900">
                  {activePost.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {activePost.tags.map((tag) => (
                    <span
                      key={`${activeIndex}-${tag}`}
                      className="rounded-full border border-[#7DD3FC]/25 bg-[#7DD3FC]/8 px-2.5 py-1 text-[12px] font-medium text-[#7DD3FC]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="my-4 h-px bg-zinc-200/80" />
                <div className="flex-1 overflow-y-auto pr-2">
                  <div className="space-y-4 text-md leading-7 text-zinc-600">
                    {activePost.excerpt
                      .split(/\n\s*\n/)
                      .map((paragraph) => paragraph.trim())
                      .filter(Boolean)
                      .map((paragraph, paragraphIndex) => (
                        <p key={`${activeIndex}-paragraph-${paragraphIndex}`}>{paragraph}</p>
                      ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="mx-auto mt-8 max-w-5xl rounded-2xl border border-[#5D7BFA]/20 bg-white/90 p-4 shadow-[0_10px_30px_-22px_rgba(93,123,250,0.7)]">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#4A67EE] uppercase">
                Browse Stories
              </p>
              <p className="text-xs font-medium text-zinc-500">
                Next: <span className="text-zinc-700">{posts[nextIndex].title}</span>
              </p>
            </div>
            <div className="mb-4 flex items-center justify-center gap-2">
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
            <div className="flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full border border-[#5D7BFA]/30 bg-white px-5 py-2.5 text-sm font-semibold text-[#3F5CE4] cursor-pointer transition hover:-translate-y-0.5 hover:border-[#5D7BFA] hover:bg-[#EEF2FF]"
                aria-label="Previous post"
              >
                <span aria-hidden="true">←</span>
                Previous
              </button>
              <div className="rounded-full border border-[#5D7BFA]/25 bg-white px-4 py-1.5 text-xs font-semibold tracking-[0.14em] text-[#4A67EE] uppercase">
                {String(activeIndex + 1).padStart(2, "0")} / {String(posts.length).padStart(2, "0")}
              </div>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex min-w-[150px] items-center justify-center gap-2 rounded-full border border-[#5D7BFA]/30 bg-[#EEF2FF] px-5 py-2.5 text-sm font-semibold text-[#3F5CE4] cursor-pointer transition hover:-translate-y-0.5 hover:border-[#5D7BFA] hover:bg-[#E3E9FF]"
                aria-label="Next post"
              >
                Next
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
