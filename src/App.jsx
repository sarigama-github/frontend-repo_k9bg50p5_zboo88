import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sections from "./components/Sections";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-fuchsia-50 to-white text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Sections />
      </main>
      <footer className="mt-20 border-t border-white/50 bg-white/60 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} ResQ AI. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#privacy" className="hover:text-purple-600">Privacy</a>
            <a href="#about" className="hover:text-purple-600">About</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
