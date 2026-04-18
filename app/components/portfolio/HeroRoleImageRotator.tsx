"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  { src: "/frontendDeveloper.png", alt: "Frontend Developer" },
  { src: "/Backend2.png", alt: "Backend Developer" },
  { src: "/Fullstack2.png", alt: "Graduate Developer" },
] as const;

const INTERVAL_MS = 3000;

export function HeroRoleImageRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mt-2 w-full min-w-0 overflow-visible sm:mt-3">
      <div
        className="relative w-[118%] max-w-none sm:w-[128%] lg:w-[138%] [aspect-ratio:9486/1541]"
        aria-live="polite"
        aria-label="Role titles"
      >
        {SLIDES.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(min-width: 1280px) 800px, (min-width: 1024px) 700px, 100vw"
            priority={i === 0}
            className={
              i === index
                ? "object-contain object-left opacity-100 transition-opacity duration-700 ease-in-out motion-reduce:transition-none z-[2]"
                : "object-contain object-left opacity-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none pointer-events-none z-[1]"
            }
          />
        ))}
      </div>
    </div>
  );
}
