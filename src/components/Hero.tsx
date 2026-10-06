import { ArrowDownRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-73px)] items-center px-6 py-24">
      <div className="mx-auto w-full max-w-6xl">
        <div className="max-w-5xl">
          <p className="enter section-kicker flex items-center gap-2">
            <Sparkles size={14} className="text-cyan-300" /> Hello, world
          </p>

          <h1 className="enter enter-delay mt-7 text-6xl font-semibold tracking-[-0.055em] text-white sm:text-7xl md:text-8xl">
            I&apos;m{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_18px_rgba(34,211,238,0.25)]">
              Asmitjyoti.
            </span>
          </h1>

          <p className="enter enter-delay mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            A Pharmaceutical Engineering student at{" "}
            <span className="text-white">IIT BHU</span> who enjoys building
            software, experimenting with AI, and turning ideas into useful
            products.
          </p>

          <div className="enter enter-delay-2 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-1 hover:bg-cyan-200"
            >
              Explore my work <ArrowDownRight size={16} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-400 hover:bg-white/5 hover:text-white"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="enter enter-delay-2 mt-20 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.2em] text-zinc-600">
          <span className="h-px w-12 bg-zinc-700" />
          Based in Varanasi, India <span className="text-cyan-300">•</span> Software · AI · Building
        </div>
      </div>
    </section>
  );
}
