export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
          {/* Heading */}
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-zinc-600">
              Skills
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
              What I work with.
            </h2>
          </div>

          {/* Content */}
          <div>
            <p className="max-w-3xl text-lg leading-8 text-zinc-400">
              I enjoy working across different layers of software, from
              building applications and backend systems to experimenting with
              AI and computer vision. I prefer learning technologies by
              building real projects rather than just studying them.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex gap-5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                <div>
                  <h3 className="font-medium text-white">
                    Software & Backend
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    Java · Spring Boot · REST APIs · SQL · MongoDB
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                <div>
                  <h3 className="font-medium text-white">
                    Android Development
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    Kotlin · Jetpack Compose · Android · Retrofit
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                <div>
                  <h3 className="font-medium text-white">
                    AI & Computer Vision
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    Python · PyTorch · YOLO · OpenCV · Machine Learning
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

                <div>
                  <h3 className="font-medium text-white">
                    Development Tools
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    Git · GitHub · Docker · Linux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}