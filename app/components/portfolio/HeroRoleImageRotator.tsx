"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  { src: "/Backend.png", alt: "Backend Developer" },
  { src: "/Frontend.png", alt: "Frontend Developer" },
  { src: "/Fullstack.png", alt: "Fullstack Developer" },
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
    <div className="mt-3 w-full min-w-0 overflow-visible sm:mt-4">
      <div
        className="relative h-[3.2rem] w-full overflow-hidden rounded-xl sm:h-[3.6rem]"
        aria-live="polite"
        aria-label="Role titles"
      >
        {SLIDES.map((slide, i) => {
          const distance = (i - index + SLIDES.length) % SLIDES.length;
          const isCurrent = distance === 0;
          const isNext = distance === 1;
          const isPrev = distance === SLIDES.length - 1;

          const positionClass = isCurrent
            ? "translate-x-0 z-[3]"
            : isNext
              ? "translate-x-full z-[2]"
              : isPrev
                ? "-translate-x-full z-[2]"
                : "translate-x-[200%] z-[1]";

          return (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(min-width: 1280px) 900px, (min-width: 1024px) 720px, 100vw"
              priority={i === 0}
              className={`object-contain object-left transition-transform duration-700 ease-in-out motion-reduce:transition-none ${positionClass} ${isCurrent || isNext || isPrev ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />
          );
        })}
      </div>
    </div>
  );
}
