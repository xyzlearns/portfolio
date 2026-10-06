import Image from "next/image";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-20">
          {/* Left */}
          <div>
            <p className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
              / contact
            </p>
          </div>

          {/* Right */}
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Have an idea?
              <br />
              Let&apos;s talk.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-500">
              Whether it&apos;s a project, an opportunity, or simply an
              interesting conversation, I&apos;m always open to connecting.
            </p>

            {/* Mail */}
            <a
              href="mailto:asmitjyotib@gmail.com"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
            >
              <Mail size={17} />
              Mail me
            </a>

            {/* Socials */}
            <div className="mt-14 flex items-center gap-5">
              <a
                href="https://github.com/xyzlearns"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="opacity-50 transition hover:scale-110 hover:opacity-100"
              >
                <Image
  src="/icons/github.svg"
  alt="GitHub"
  width={24}
  height={24}
  className="brightness-0 invert opacity-60 transition hover:opacity-100"
/>
              </a>

              <a
                href="https://www.linkedin.com/in/asmitjyoti-barman/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="opacity-50 transition hover:scale-110 hover:opacity-100"
              >
                <Image
  src="/icons/linkedin.svg"
  alt="LinkedIn"
  width={24}
  height={24}
  className="brightness-0 invert opacity-60 transition hover:opacity-100"
/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}