"use client";

import { useState } from "react";

const experiences = [
  
  {
    company: "Beckkon Systems",
    role: "Software Engineering Intern",
    period: "Aug 2026 - present",
    description:
      "Redesigned the Beckkon Student App interface based on Figma designs while maintaining existing application functionality.",
    details:
      "Implemented UI changes across student-facing screens and components while working with the existing application architecture.",
  },
  {
    company: "Garuda Box Vision",
    role: "Engineering & Data Processing Intern",
    period: "May 2026 — July 2026",
    description:
      "Annotated and validated 1,000+ tennis and hockey images and videos using keypoint, segmentation, and object detection techniques for sports AI development.",
    details:
      "Contributed to computer vision data pipelines supporting athlete tracking, object localization, and sports analytics applications.",
  },
  {
    company: "Kashiyatra · IIT BHU",
    role: "Coordinator, Branding & Content Team",
    period: "March 2025",
    description:
      "Created 20+ promotional posts and social media captions to enhance audience and event visibility.",
    details:
      "Assisted with 3 press releases while collaborating with 30+ members to ensure smooth coordination and execution.",
  },
];

export default function Experience() {
  const [selected, setSelected] = useState(0);
  const experience = experiences[selected];

  return (
    <section id="experience" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
  <p className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
    / experience
  </p>
</div>

        <div className="grid gap-12 md:grid-cols-[220px_1fr] md:gap-20">
          {/* Companies */}
          <div className="relative h-fit">
  <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-800" />

  {experiences.map((item, index) => (
    <button
      key={item.company}
      onClick={() => setSelected(index)}
      className={`relative block w-full border-l-2 py-4 pl-6 text-left text-sm transition ${
        selected === index
          ? "border-cyan-400 text-white"
          : "border-transparent text-zinc-600 hover:text-zinc-300"
      }`}
    >
      {item.company}
    </button>
  ))}
</div>

          {/* Details */}
          <div className="min-h-85">
            <div className="pt-2">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">
                {experience.period}
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {experience.role}
              </h2>

              <p className="mt-2 text-lg text-cyan-400">
                @ {experience.company}
              </p>

              <div className="mt-10 max-w-3xl space-y-5 text-base leading-8 text-zinc-400">
                <p>{experience.description}</p>
                <p>{experience.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}