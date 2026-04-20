import Image from "next/image";
import 'animate.css';

import { HeroRoleImageRotator } from "./HeroRoleImageRotator";

const BLUE = "#5D7BFA";
const SKY = "#7DD3FC";

export function HeroLanding() {
  return (
    <section
      id="hero"
      className="relative flex min-h-0 flex-1 flex-col border-b border-black/5 bg-[linear-gradient(148deg,#ffffff_0%,#ffffff_24%,#DFF9E1_24%,#DFF9E1_76%,#ffffff_76%,#ffffff_100%)] text-black dark:bg-[linear-gradient(148deg,#ffffff_0%,#ffffff_24%,#DFF9E1_24%,#DFF9E1_76%,#ffffff_76%,#ffffff_100%)] dark:text-black"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-10 pt-4 sm:px-6 sm:pb-12 sm:pt-6 lg:px-8 lg:pb-14 lg:pt-6">
 <div className="grid flex-1 items-center gap-10 lg:min-h-0 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-10 lg:py-2 xl:gap-14">
          <div className="relative z-20 flex min-w-0 flex-col justify-center pr-2 sm:pr-4 lg:pr-6">
            <div className="inline-flex flex-col items-start">
              <h1 className="text-[clamp(1.35rem,2.5vw,2rem)] leading-tight tracking-[0.01em] text-emerald-800">
                Hi, I&apos;m
              </h1>
              <div className="relative">
                <h1 className="hero-name-shimmer whitespace-nowrap text-[140px] font-extrabold leading-[1.1] tracking-tight">
                  Soyeon Kim,
                </h1>
                <span className="hero-name-scan-bar pointer-events-none absolute inset-x-0 bottom-3 h-2" aria-hidden />
              </div>
            </div>
            <HeroRoleImageRotator />
            <p className="mt-6 max-w-md text-base leading-relaxed text-black/80 sm:text-lg">
            It’s a pleasure to meet you. I invite you to explore my website, where you can learn more about my work, projects, and professional experience.
            </p>
            <div className="mt-8">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-black shadow-sm ring-1 ring-black/5 transition hover:bg-white/90"
              >
                View projects
              </a>
            </div>
          </div>

          <div className="relative z-0 mx-auto min-w-0 w-full max-w-2xl lg:mx-0 lg:max-w-none lg:translate-x-8 lg:justify-self-end xl:translate-x-14 2xl:translate-x-20">
            <div className="group/hero-decor relative aspect-[4/5] w-full max-w-xl sm:aspect-[3/4] sm:max-w-2xl lg:aspect-auto lg:min-h-[min(82vh,720px)] lg:max-w-full">
              <div
                className="pointer-events-none absolute -right-6 -top-[4%] z-[1] h-[56%] w-[70%] rotate-[-14deg] rounded-[3rem] transition-transform duration-500 ease-out will-change-transform motion-reduce:transition-none motion-reduce:group-hover/hero-decor:scale-100 group-hover/hero-decor:scale-[1.07] sm:-right-20 sm:-top-[2%] sm:h-[58%] sm:w-[74%] lg:-top-[15%] lg:h-[70%] lg:w-[90%]"
                style={{ backgroundColor: BLUE }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute bottom-[4%] right-[6%] z-[2] h-[60%] w-[76%] rotate-[10deg] rounded-[3.25rem] transition-transform duration-500 ease-out will-change-transform motion-reduce:transition-none motion-reduce:group-hover/hero-decor:scale-100 group-hover/hero-decor:scale-[1.09] sm:bottom-[3%] sm:right-[-10%] sm:h-[66%] sm:w-[82%] lg:bottom-[2%] lg:h-[70%] lg:w-[88%]"
                style={{ backgroundColor: SKY }}
                aria-hidden
              />
              <div className="absolute inset-0 flex items-end justify-center pb-0 pt-6 sm:items-center sm:pb-6 sm:pt-0">
                <div className="group/photo relative z-10 mx-auto w-full max-w-[min(92vw,560px)] origin-bottom transition-transform duration-300 ease-out will-change-transform hover:scale-[1.02] sm:max-w-[min(90vw,680px)] lg:mx-0 lg:ml-auto lg:max-w-full">
                
                  <Image
                    src="/졻업사진.png"
                    alt="프로필 사진"
                    width={3580}
                    height={5971}
                    priority
                    sizes="(min-width: 1280px) 50vw, (min-width: 1024px) 48vw, 90vw"
                    className="relative z-10 h-auto w-full max-h-[min(88vh,880px)] object-contain object-bottom drop-shadow-sm transition-[filter] duration-300 ease-out group-hover/photo:drop-shadow-[0_28px_56px_rgba(0,0,0,0.2)] lg:max-h-[min(84vh,840px)] xl:max-h-[min(86vh,920px)]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
