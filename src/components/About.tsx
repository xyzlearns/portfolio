export default function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          {/* Left */}
          <div>
            <p className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              / about
            </p>
          </div>

          {/* Right */}
          <div className="max-w-3xl">
            <p className="text-xl leading-9 text-zinc-300 md:text-2xl">
              I&apos;m a Pharmaceutical Engineering student at{" "}
              <span className="text-white">IIT BHU</span> who enjoys building
              software and turning ideas into real products.
            </p>

            <p className="mt-8 leading-8 text-zinc-500">
              My interests span software engineering, Android development,
              backend systems, AI, and computer vision. I enjoy learning by
              building — from full-stack applications and productivity tools
              to machine learning experiments.
            </p>

            <p className="mt-8 leading-8 text-zinc-500">
              I&apos;m particularly interested in understanding how things
              work under the hood and using that knowledge to build useful,
              well-designed products.
            </p>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-zinc-600">
              <span>IIT BHU</span>
              <span>Software Engineering</span>
              <span>AI / ML</span>
              <span>Builder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}