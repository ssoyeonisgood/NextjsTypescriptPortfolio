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
    <div className="mt-2 w-full min-w-0 overflow-visible sm:mt-3">
      <div
        className="relative h-[3.2rem] w-full sm:h-[3.6rem]"
        aria-live="polite"
        aria-label="Role titles"
      >
        <Image
          key={`role-slide-${index}`}
          src={SLIDES[index].src}
          alt={SLIDES[index].alt}
          fill
          sizes="(min-width: 1280px) 900px, (min-width: 1024px) 720px, 100vw"
          priority={index === 0}
          className="animate__animated animate__flipInX object-contain object-left motion-reduce:animate-none"
        />
      </div>
    </div>
  );
}
