import { Menu, Shield, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-white/40 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/30">
              <Shield size={18} />
            </span>
            <span className="font-semibold tracking-tight text-slate-800">ResQ AI</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#features" className="hover:text-purple-600 transition">Features</a>
            <a href="#modes" className="hover:text-purple-600 transition">Modes</a>
            <a href="#about" className="hover:text-purple-600 transition">About</a>
            <a href="#privacy" className="hover:text-purple-600 transition">Privacy</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-2 text-white shadow-md shadow-purple-500/30 hover:shadow-purple-500/50 transition">Get Started</a>
          </nav>
          <button className="md:hidden p-2 rounded-lg hover:bg-white/50" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/60 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3 text-slate-700">
            <a href="#features" onClick={() => setOpen(false)}>Features</a>
            <a href="#modes" onClick={() => setOpen(false)}>Modes</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a href="#privacy" onClick={() => setOpen(false)}>Privacy</a>
            <a href="#contact" onClick={() => setOpen(false)} className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-4 py-2 text-white shadow-md">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
