"use client";

import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="section-kicker">Selected work</p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Things I&apos;ve built.
          </h2>
        </div>

        {/* Project explorer */}
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          {/* Left — Project names */}
          <div className="border-t border-zinc-800">
            {projects.map((project, index) => {
              const isSelected = selectedProject.name === project.name;

              return (
                <button
                  key={project.name}
                  onClick={() => setSelectedProject(project)}
                  className={`group flex w-full items-center justify-between border-b border-zinc-800 py-6 text-left transition ${
                    isSelected ? "text-white" : "text-zinc-600"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="font-mono text-xs text-zinc-700">
                      0{index + 1}
                    </span>

                    <span className="text-lg font-medium transition group-hover:text-white">
                      {project.name}
                    </span>
                  </div>

                  <span
                    className={`text-lg transition ${
                      isSelected
                        ? "text-cyan-400"
                        : "text-zinc-800 group-hover:text-zinc-500"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right — Project details */}
          <div className="glass-panel min-h-[360px] rounded-2xl p-7 sm:p-9">
            <div>
              <p className="font-mono text-sm text-zinc-600">
                PROJECT / {String(projects.indexOf(selectedProject) + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                {selectedProject.name}
              </h3>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                {selectedProject.description}
              </p>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">
                  Built with
                </p>

                <div className="mt-3 flex flex-wrap gap-2">{selectedProject.tech.split(/\s*[·,]\s*/).map((tech) => <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{tech}</span>)}</div>
              </div>

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                <ExternalLink size={16} /> View project <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
