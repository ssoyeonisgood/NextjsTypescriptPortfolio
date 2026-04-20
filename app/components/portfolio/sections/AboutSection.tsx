import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-16 border-b border-zinc-200/80 dark:border-zinc-800/80"
    >
      <div className="relative flex min-h-screen w-full items-center overflow-hidden bg-white">
        {/* Noise texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Subtle radial glow top-right */}
        <div className="pointer-events-none absolute -right-32 -top-32 z-[1] h-[800px] w-[800px] rounded-full bg-green-500 opacity-30 blur-[140px]" />

        <div className="relative z-[2] mx-auto grid w-full max-w-[1600px] place-content-center lg:grid-cols-[520px_1fr]">
          {/* Left: Photo with geometric shapes */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-auto">
            {/* Decorative shape — soft blue rounded rectangle */}
            <div className="absolute -left-200 top-[-300px] h-52 w-80 rounded-[28px] bg-[#5D7BFA] opacity-60 sm:h-250 sm:w-250 rotate-45" />
            {/* Decorative shape — deep purple tall panel */}
            <div className="absolute left-14 top-[22%] h-[78%] w-[340px] rounded-[20px] bg-[#7DD3FC] sm:left-16 sm:w-250 sm:h-250 rotate-45" />

            {/* Photo */}
            <div className="absolute bottom-0 -left-16 z-10 w-[360px] sm:-left-28 sm:w-[700px] lg:-left-60 lg:w-[800px]">
              <Image
                src="/Untitled design (8) (1).png"
                alt="Soyeon — profile portrait"
                width={1000}
                height={900}
                className="h-auto w-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="relative z-[20] flex items-center px-6 pb-24 pt-12 sm:px-10 lg:px-20 lg:py-24">
            <div className="max-w-4xl">
              <h2
                className="whitespace-nowrap text-[2.75rem] font-semibold italic leading-[1.08] tracking-tight text-black sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[5rem]"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Get to know about me!
              </h2>

              <p className="mt-12 max-w-2xl text-lg leading-relaxed tracking-[0.22em] text-black/80">
              I'm Soyeon Kim. I recently graduated with a Bachelor's in Software Engineering from Curtin University in Febrary this year. During my studies, I built strong skills in software development, database management, and web technologies.
              <br />
              <br />
              In 2024, I completed a 6-month internship at Sustech Engineering, where I helped convert Word and Excel forms into web-based formats using PHP and Laravel. This experience strengthened my full-stack development skills and taught me how to work effectively in a team environment. I also created a personal project called Recipe Recommender, an AI web app using Remix, Typecript, Tailwind and Vercel AI-SDK, which helped me learn how to integrate APIs and build full-stack applications.
              <br />
              <br />
              Outside of tech, I enjoy watching dramas and playing the game TFT. It's a great way for me to relax. I'm currently watching Breaking Bad, which is a bit of an older drama but still one of the best I've seen. The storytelling, character development, and suspense make it incredibly engaging—I highly recommend it if you enjoy intense, well-written shows.
              <br />
              <br />
              </p>

              <a
                href="mailto:hello@example.com"
                className="group mt-8 inline-flex items-center gap-2.5 rounded-full border-2 border-[#b9f59e] bg-[#b9f59e] px-10 py-4 text-[1.1rem] font-bold uppercase tracking-[0.08em] text-[#1e2a8a] transition-all duration-300 hover:bg-transparent hover:text-[#b9f59e]"
              >
                <span>hello@example.com</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L11.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 11-1.04-1.08l3.158-2.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <p className="mt-14 text-[0.82rem] uppercase tracking-[0.2em] text-black/50">
                Soyeon&ensp;|&ensp;Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
