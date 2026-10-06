const education = [
  {
    institution: "Indian Institute of Technology (BHU), Varanasi",
    description:
      "Pursuing a Bachelor of Technology in Pharmaceutical Engineering, building a foundation across engineering, software development, and technology.",
    period: "2024 — 2028",
    result: "CGPA 8.87",
  },
  {
    institution: "Bishnupur High School",
    description:
      "Completed secondary education under the West Bengal Board of Secondary Education with a strong academic record.",
    period: "2021",
    result: "92.00%",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
            Education
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Where I learned to build.
          </h2>
        </div>

        <div>
          {education.map((item, index) => (
            <div
              key={item.institution}
              className={`grid gap-8 py-10 md:grid-cols-[1fr_1.5fr] md:gap-16 ${
                index !== education.length - 1
                  ? "border-b border-zinc-800"
                  : ""
              }`}
            >
              {/* Institute */}
              <div>
                <h3 className="max-w-sm text-xl font-semibold leading-snug text-white md:text-2xl">
                  {item.institution}
                </h3>
              </div>

              {/* Details */}
              <div>
                <p className="max-w-2xl leading-7 text-zinc-400">
                  {item.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-6 text-sm">
                  <span className="text-zinc-500">
                    <span className="text-zinc-600">Timeline</span>{" "}
                    <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                      {item.period}
                    </span>
                  </span>

                  <span className="text-zinc-500">
                    <span className="text-zinc-600">Result</span>{" "}
                    <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                      {item.result}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}