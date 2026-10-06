"use client";

import { useRef } from "react";

const achievements = [
  {
    number: "01",
    title: "Vista CV Hackathon",
    description:
      "Won the Vista CV Hackathon by building a retail inventory counting system using image classification and object detection.",
    highlight: "97.9% exact-count accuracy",
  },
  {
    number: "02",
    title: "Google Student Launchpad",
    description:
      "Selected for the Google Student Launchpad Programme through a competitive nationwide application process.",
    highlight: "Selected",
  },
  {
    number: "03",
    title: "GirlScript Summer of Code",
    description:
      "Selected as a contributor for GSSoC 2026, contributing to open-source development projects.",
    highlight: "GSSoC 2026",
  },
];

const activities = [
  {
    number: "01",
    title: "CodeFest CTF",
    description:
      "Participated in cybersecurity, cryptography, and problem-solving challenges.",
  },
  {
    number: "02",
    title: "SWOC & CoPS Week",
    description:
      "Participated in developer and open-source initiatives focused on collaborative software development.",
  },
  {
    number: "03",
    title: "DebugIT",
    description:
      "Participated in a competitive debugging and programming event focused on software troubleshooting.",
  },
];

function HorizontalScroller({
  items,
}: {
  items: {
    number: string;
    title: string;
    description: string;
    highlight?: string;
  }[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;

    const amount = containerRef.current.clientWidth;

    containerRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none"
      >
        {items.map((item) => (
          <article
            key={item.title}
            className="w-full shrink-0 snap-center pr-12"
          >
            <div className="flex min-h-90 flex-col justify-center border-t border-zinc-800 pt-6">
              <span className="text-sm text-zinc-600">{item.number}</span>

              <h3 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {item.title}
              </h3>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                {item.description}
              </p>

              {item.highlight && (
                <p className="mt-8 text-sm text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.45)]">
                  {item.highlight}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
          Scroll to explore →
        </p>

        <div className="flex gap-2">
          <button
  onClick={() => scroll("left")}
  aria-label="Previous"
  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 font-mono text-sm text-zinc-400 transition hover:border-zinc-600 hover:text-white"
>
  &lt;
</button>

<button
  onClick={() => scroll("right")}
  aria-label="Next"
  className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-800 font-mono text-sm text-zinc-400 transition hover:border-zinc-600 hover:text-white"
>
  &gt;
</button>
        </div>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Achievements */}
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
              Achievements
            </p>

            <h2 className="mt-3 max-w-sm text-4xl font-bold tracking-tight text-white md:text-5xl">
              Things I&apos;ve accomplished.
            </h2>
          </div>

          {/* Right */}
          <div>
            <HorizontalScroller items={achievements} />
          </div>
        </div>

        {/* Activities */}
        <div className="mt-32 grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
              Activities
            </p>

            <h2 className="mt-3 max-w-sm text-4xl font-bold tracking-tight text-white md:text-5xl">
              Beyond the projects.
            </h2>
          </div>

          {/* Right */}
          <div>
            <HorizontalScroller items={activities} />
          </div>
        </div>
      </div>
    </section>
  );
}