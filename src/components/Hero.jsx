import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-b from-purple-400/40 via-fuchsia-400/30 to-transparent blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-400/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900"
            >
              🛡️ ResQ AI
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-fuchsia-600">Legal Help, Reinvented.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-lg text-slate-700 max-w-2xl"
            >
              24/7 AI-powered legal assistance for everyone — from citizens to lawyers. ResQ AI brings the power of real law, real data, and real privacy into one intelligent platform. From emergencies to deep legal research, ResQ stands by your side — private, precise, and always ready.
            </motion.p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#modes" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition">
                Explore Modes <ArrowRight size={18} />
              </a>
              <a href="#privacy" className="inline-flex items-center gap-2 rounded-full bg-white/70 px-5 py-3 text-slate-800 backdrop-blur-xl ring-1 ring-inset ring-white/50 hover:bg-white/90 transition">
                <ShieldCheck size={18} /> Privacy First
              </a>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 text-xs text-slate-700 backdrop-blur-xl ring-1 ring-inset ring-white/50">
                <Zap size={14} className="text-fuchsia-500" /> Local • Private • Secure
              </span>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-500/30 to-fuchsia-500/30 blur-2xl" />
              <div className="relative rounded-3xl border border-white/30 bg-white/50 backdrop-blur-xl p-4 shadow-2xl">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-white">
                  <div className="h-full w-full grid grid-cols-2">
                    <div className="p-4 space-y-3">
                      <Card title="Emergency Mode" desc="Fast, guided steps when every second counts." color="from-rose-500 to-orange-500" />
                      <Card title="Law Mode" desc="Clear answers powered by real laws." color="from-indigo-500 to-purple-500" />
                      <Card title="Deep Mode" desc="Clause analysis and drafting for lawyers." color="from-fuchsia-500 to-pink-500" />
                    </div>
                    <div className="p-4 space-y-3">
                      <Card title="Business Mode" desc="Contracts and compliance automation." color="from-emerald-500 to-teal-500" />
                      <Card title="Guardian Mode" desc="Smart safety check-ins that care." color="from-blue-500 to-cyan-500" />
                      <Card title="Privacy First" desc="No third-party APIs. Your data stays local." color="from-slate-600 to-slate-900" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, desc, color }) {
  return (
    <div className="group rounded-2xl border border-white/40 bg-white/60 p-4 backdrop-blur-xl shadow-lg hover:shadow-xl transition">
      <div className={`mb-2 h-1.5 w-16 rounded-full bg-gradient-to-r ${color}`} />
      <h3 className="font-medium text-slate-900">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}
