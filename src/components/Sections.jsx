import { Scale, Gavel, Shield, FileText, Brain, Search, AlarmClock, Book, CheckCircle2 } from "lucide-react";

export default function Sections() {
  return (
    <>
      <FeatureSection />
      <ModesSection />
      <DraftingSection />
      <SearchSection />
      <PrivacySection />
      <TeamSection />
      <VisionSection />
      <StandardSection />
      <CTASection />
    </>
  );
}

function Wrap({ id, children, title, subtitle, icon: Icon }) {
  return (
    <section id={id} className="relative py-20">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-3 mb-8">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white shadow-lg shadow-purple-500/30">
            <Icon size={18} />
          </span>
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">{title}</h2>
            {subtitle && <p className="mt-1 text-slate-600 max-w-2xl">{subtitle}</p>}
          </div>
        </div>
        <div className="rounded-3xl border border-white/40 bg-white/60 p-6 backdrop-blur-xl shadow-xl">
          {children}
        </div>
      </div>
    </section>
  );
}

function FeatureSection() {
  return (
    <Wrap
      id="features"
      title="The Future of Legal Help"
      subtitle="Legal help has been slow, expensive, and hard to access. ResQ changes that with AI speed and verified law, helping you make the right move at the right moment."
      icon={Scale}
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        <li className="rounded-2xl border border-white/40 bg-white/50 p-5"><p className="text-slate-700">Whether you’re a citizen facing an emergency, a business owner reviewing contracts, or a lawyer managing multiple cases — ResQ simplifies the entire legal process.</p></li>
        <li className="rounded-2xl border border-white/40 bg-white/50 p-5"><p className="text-slate-700">It combines the speed of AI with the reliability of verified law — more than a chatbot, it’s legal intelligence that learns from the law itself.</p></li>
      </ul>
    </Wrap>
  );
}

function ModesSection() {
  const items = [
    { icon: AlarmClock, title: "Emergency Mode", desc: "Fast, guided actions when help can’t wait." },
    { icon: Book, title: "Law Mode", desc: "Everyday legal answers grounded in real laws." },
    { icon: Gavel, title: "Deep Mode", desc: "Clause analysis, drafting, and precedent reasoning." },
    { icon: FileText, title: "Business Mode", desc: "Contracts, compliance, and automation for teams." },
    { icon: Shield, title: "Guardian Mode", desc: "Safety check-ins that alert trusted contacts." },
  ];
  return (
    <Wrap id="modes" title="Modes That Matter" subtitle="One system, many ways to protect and empower.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-white/40 bg-white/60 p-5 backdrop-blur-xl">
            <div className="mb-2 flex items-center gap-2 text-slate-900"><it.icon size={18} /><h3 className="font-medium">{it.title}</h3></div>
            <p className="text-slate-600 text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </Wrap>
  );
}

function DraftingSection() {
  const bullets = [
    "Highlight weak or missing clauses.",
    "Suggest improvements or legal corrections.",
    "Generate new drafts based on your instructions.",
    "Verify compliance with relevant laws.",
  ];
  return (
    <Wrap id="drafting" title="Document Drafting & Analysis" subtitle="Turn complex legal documents into clarity." icon={FileText}>
      <div className="grid gap-6 lg:grid-cols-2">
        <p className="text-slate-700">Upload contracts, NDAs, petitions, or agreements and get instant review. From startups to law firms — save hours while staying compliant and secure.</p>
        <ul className="grid gap-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-center gap-2 text-slate-700"><CheckCircle2 className="text-purple-600" size={16} /> {b}</li>
          ))}
        </ul>
      </div>
    </Wrap>
  );
}

function SearchSection() {
  return (
    <Wrap id="search" title="Smart Legal Search" subtitle="Every answer is grounded in the law — not guesses." icon={Search}>
      <div className="grid gap-6 lg:grid-cols-2">
        <p className="text-slate-700">ResQ studies judgments, penal codes, and case histories using Nomadic embeddings and a local vector database to ensure fact-based responses.</p>
        <p className="text-slate-700">You don’t just get an answer — you get the law behind it.</p>
      </div>
    </Wrap>
  );
}

function PrivacySection() {
  const points = [
    "No OpenAI or third‑party APIs.",
    "Runs fully on local servers inside the UAE and India.",
    "Fine‑tuned legal models (LLaMA 3: 8B).",
    "Zero data retention. Your case, your data, your control.",
  ];
  return (
    <Wrap id="privacy" title="Privacy First. Always." icon={Shield}>
      <ul className="grid gap-3 sm:grid-cols-2">
        {points.map((p) => (
          <li key={p} className="rounded-2xl border border-white/40 bg-white/60 p-4 text-slate-700">{p}</li>
        ))}
      </ul>
    </Wrap>
  );
}

function TeamSection() {
  return (
    <Wrap id="about" title="Meet the Minds Behind ResQ">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-white/40 bg-white/60 p-5">
          <h3 className="font-medium text-slate-900">Raul John Aju – Co‑Founder & CEO</h3>
          <p className="mt-2 text-slate-700">Founder of AIrealm Technologies, Raul is one of India’s youngest AI innovators and educators. He has built 10+ AI tools, taught 140,000+ students, and spoken at global stages — making technology serve justice, not replace it.</p>
        </div>
        <div className="rounded-2xl border border-white/40 bg-white/60 p-5">
          <h3 className="font-medium text-slate-900">Savio – Co‑Founder & CTO</h3>
          <p className="mt-2 text-slate-700">A deep‑tech developer passionate about AI infrastructure, Savio leads backend and core architecture for ResQ — ensuring privacy, speed, and security with local inference systems.</p>
        </div>
      </div>
    </Wrap>
  );
}

function VisionSection() {
  return (
    <Wrap id="vision" title="Vision & Mission" icon={Brain}>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h3 className="font-medium text-slate-900">Vision</h3>
          <p className="text-slate-700">To make justice accessible, affordable, and intelligent — for every citizen, lawyer, and startup.</p>
        </div>
        <div>
          <h3 className="font-medium text-slate-900">Mission</h3>
          <p className="text-slate-700">To build the world’s first fully private, multilingual AI legal system that runs locally, learns continuously, and empowers every user to act confidently in any legal situation.</p>
        </div>
      </div>
    </Wrap>
  );
}

function StandardSection() {
  return (
    <Wrap id="standard" title="The ResQ Standard">
      <div className="text-slate-700">Built under AIrealm Technologies Pvt. Ltd</div>
    </Wrap>
  );
}

function CTASection() {
  return (
    <section id="contact" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/40 bg-gradient-to-r from-purple-600/10 to-fuchsia-600/10 p-8 backdrop-blur-xl shadow-xl text-center">
          <h3 className="text-2xl font-semibold text-slate-900">Ready to experience private, precise legal help?</h3>
          <p className="mt-2 text-slate-700">Get early access to ResQ AI and join our waitlist.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <input type="email" placeholder="you@example.com" className="w-full sm:w-80 rounded-full border border-white/50 bg-white/70 px-4 py-3 text-slate-800 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500" />
            <button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 px-6 py-3 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition">Join Waitlist</button>
          </div>
        </div>
      </div>
    </section>
  );
}
