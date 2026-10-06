"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [["About", "#about"], ["Projects", "#projects"], ["Experience", "#experience"], ["Skills", "#skills"], ["Contact", "#contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <nav className="sticky top-0 z-50 border-b border-white/5 bg-zinc-950/70 px-6 py-4 backdrop-blur-xl">
    <div className="mx-auto flex max-w-6xl items-center justify-between">
      <a href="#" className="text-lg font-semibold tracking-tight text-white transition hover:text-cyan-300">Asmitjyoti<span className="text-cyan-300">.</span></a>
      <div className="hidden items-center gap-7 text-sm md:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-zinc-500 transition hover:text-cyan-200">/{label.toLowerCase()}</a>)}</div>
      <div className="hidden items-center gap-2 text-xs text-zinc-500 lg:flex"><span className="relative flex h-2 w-2"><span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-cyan-300" /><span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-300" /></span>Available for opportunities</div>
      <button aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="text-zinc-300 md:hidden">{open ? <X size={21} /> : <Menu size={21} />}</button>
    </div>
    {open && <div className="mx-auto mt-4 max-w-6xl border-t border-white/10 pt-4 md:hidden"><div className="grid grid-cols-2 gap-2">{links.map(([label, href]) => <a key={href} onClick={() => setOpen(false)} href={href} className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white">/{label.toLowerCase()}</a>)}</div></div>}
  </nav>;
}
