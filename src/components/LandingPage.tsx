import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Brain, FileImage, Mic, Play, Receipt } from 'lucide-react'
import { BrandButton } from './ui/BrandButton'
import { MuskaaanLogo } from './MuskaaanLogo'
import { MuskaaanDevanagari } from './MuskaaanDevanagari'

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function HeroIllustration() {
  return (
    <div className="relative w-full select-none">
      <div className="absolute inset-8 rounded-3xl bg-brand-primary/10 dark:bg-brand-primary/20 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-1/2 h-1/2 rounded-full bg-brand-primary/5 dark:bg-brand-primary/10 blur-2xl" />
      <svg
        viewBox="0 0 560 465"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-full"
        style={{ overflow: 'visible' }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="il-winBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#111827" /><stop offset="100%" stopColor="#0a0e17" /></linearGradient>
          <linearGradient id="il-hdr" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#0d1e34" /><stop offset="100%" stopColor="#080d14" /></linearGradient>
          <linearGradient id="il-row1" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#0c1c30" /><stop offset="100%" stopColor="#08111f" /></linearGradient>
          <linearGradient id="il-ai" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#1d4ed8" /><stop offset="100%" stopColor="#0891b2" /></linearGradient>
          <linearGradient id="il-stat4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#1e3a8a" /><stop offset="100%" stopColor="#1e40af" /></linearGradient>
          <filter id="il-win" x="-4%" y="-4%" width="108%" height="112%"><feDropShadow dx="0" dy="14" stdDeviation="22" floodColor="#000" floodOpacity="0.75" /></filter>
          <filter id="il-card" x="-14%" y="-14%" width="128%" height="140%"><feDropShadow dx="0" dy="10" stdDeviation="18" floodColor="#000" floodOpacity="0.65" /></filter>
        </defs>
        <rect x="52" y="22" width="448" height="368" rx="14" fill="url(#il-winBg)" stroke="#1a2535" strokeWidth="1.5" filter="url(#il-win)" />
        <rect x="52" y="22" width="448" height="36" rx="14" fill="#111827" />
        <rect x="52" y="43" width="448" height="15" fill="#111827" />
        <circle cx="74" cy="40" r="4.5" fill="#ef4444" opacity="0.6" />
        <circle cx="90" cy="40" r="4.5" fill="#f59e0b" opacity="0.6" />
        <circle cx="106" cy="40" r="4.5" fill="#22c55e" opacity="0.6" />
        <text x="276" y="44" fontSize="8" fill="#263347" textAnchor="middle" fontFamily="system-ui,sans-serif">Muskaan Practice · Dashboard</text>
        <rect x="52" y="58" width="60" height="332" fill="#080d14" />
        <line x1="112" y1="58" x2="112" y2="390" stroke="#141e2d" strokeWidth="1" />
        <rect x="58" y="67" width="48" height="32" rx="7" fill="#0d1e38" />
        <polygon points="82,72 95,82 70,82" fill="#2563eb" opacity="0.45" />
        <rect x="75" y="81" width="14" height="11" rx="2" fill="#1d4ed8" opacity="0.5" />
        <rect x="78" y="83" width="5" height="9" rx="1" fill="#080d14" />
        <rect x="62" y="112" width="40" height="30" rx="5" fill="none" stroke="#1e2d42" strokeWidth="1.2" />
        <line x1="66" y1="112" x2="66" y2="108" stroke="#2d4060" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="98" y1="112" x2="98" y2="108" stroke="#2d4060" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="62" y1="120" x2="102" y2="120" stroke="#1e2d42" strokeWidth="0.8" />
        <rect x="66" y="123" width="4" height="4" rx="1" fill="#1e2d42" />
        <rect x="74" y="123" width="4" height="4" rx="1" fill="#1e2d42" />
        <rect x="82" y="123" width="4" height="4" rx="1" fill="#1e2d42" />
        <rect x="90" y="123" width="4" height="4" rx="1" fill="#1e2d42" />
        <circle cx="82" cy="162" r="7.5" fill="none" stroke="#1e2d42" strokeWidth="1.2" />
        <circle cx="82" cy="159" r="3.5" fill="#1e2d42" />
        <path d="M74 169 Q82 165 90 169" fill="none" stroke="#1e2d42" strokeWidth="1.2" strokeLinecap="round" />
        <rect x="64" y="182" width="36" height="36" rx="3" fill="none" stroke="#1e2d42" strokeWidth="1.2" />
        <line x1="69" y1="191" x2="95" y2="191" stroke="#1e2d42" strokeWidth="0.9" />
        <line x1="69" y1="198" x2="95" y2="198" stroke="#1e2d42" strokeWidth="0.9" />
        <line x1="69" y1="205" x2="86" y2="205" stroke="#1e2d42" strokeWidth="0.9" />
        <line x1="69" y1="211" x2="80" y2="211" stroke="#1e2d42" strokeWidth="0.9" />
        <rect x="112" y="58" width="388" height="44" fill="url(#il-hdr)" />
        <text x="126" y="76" fontSize="11.5" fill="#dde6f0" fontWeight="600" fontFamily="system-ui,sans-serif">Today's Schedule</text>
        <text x="126" y="90" fontSize="7.5" fill="#2d4060" fontFamily="system-ui,sans-serif">Wednesday, 23 Apr · 6 appointments</text>
        <rect x="368" y="66" width="120" height="22" rx="6" fill="#070c14" stroke="#141e2d" strokeWidth="1" />
        <text x="378" y="80" fontSize="7" fill="#1e2d42" fontFamily="system-ui,sans-serif">Search patients…</text>
        <rect x="112" y="102" width="388" height="54" fill="url(#il-row1)" />
        <rect x="112" y="102" width="4" height="54" fill="#3b82f6" />
        <text x="127" y="122" fontSize="9" fill="#60a5fa" fontWeight="500" fontFamily="system-ui,sans-serif">09:00</text>
        <text x="127" y="136" fontSize="7" fill="#1e40af" fontFamily="system-ui,sans-serif">AM</text>
        <circle cx="182" cy="129" r="16" fill="#0c1e38" />
        <circle cx="182" cy="124" r="7" fill="#1d4ed8" opacity="0.5" />
        <path d="M167 141 Q182 135 197 141" fill="#1d4ed8" opacity="0.3" />
        <text x="182" y="128" fontSize="7" fill="#93c5fd" textAnchor="middle" fontFamily="system-ui,sans-serif">PS</text>
        <text x="208" y="120" fontSize="10" fill="#dde6f0" fontWeight="500" fontFamily="system-ui,sans-serif">Priya Sharma</text>
        <text x="208" y="133" fontSize="7.5" fill="#2d4060" fontFamily="system-ui,sans-serif">Root Canal · Dr. Aarav · Tooth #16</text>
        <rect x="208" y="140" width="46" height="11" rx="4" fill="#091828" />
        <circle cx="220" cy="145.5" r="2.5" fill="#22c55e" />
        <text x="236" y="149" fontSize="6.5" fill="#60a5fa" textAnchor="middle" fontFamily="system-ui,sans-serif">In Chair</text>
        <rect x="422" y="112" width="68" height="20" rx="6" fill="url(#il-ai)" />
        <text x="456" y="125" fontSize="7" fill="white" textAnchor="middle" fontFamily="system-ui,sans-serif">✦ AI Note</text>
        <line x1="112" y1="156" x2="500" y2="156" stroke="#0f1c2c" strokeWidth="1" />
        <rect x="112" y="156" width="4" height="50" fill="#8b5cf6" />
        <text x="127" y="176" fontSize="9" fill="#a78bfa" fontWeight="500" fontFamily="system-ui,sans-serif">10:30</text>
        <circle cx="182" cy="181" r="16" fill="#160f30" />
        <text x="182" y="184.5" fontSize="7.5" fill="#a78bfa" textAnchor="middle" fontFamily="system-ui,sans-serif">RB</text>
        <text x="208" y="174" fontSize="10" fill="#dde6f0" fontWeight="500" fontFamily="system-ui,sans-serif">Ram Bahadur</text>
        <text x="208" y="187" fontSize="7.5" fill="#2d4060" fontFamily="system-ui,sans-serif">Cleaning · Dr. Sita</text>
        <rect x="208" y="194" width="56" height="11" rx="4" fill="#0e0e1e" />
        <text x="236" y="203" fontSize="6.5" fill="#4b5680" textAnchor="middle" fontFamily="system-ui,sans-serif">Scheduled</text>
        <line x1="112" y1="206" x2="500" y2="206" stroke="#0f1c2c" strokeWidth="1" />
        <rect x="112" y="206" width="4" height="50" fill="#10b981" />
        <text x="127" y="226" fontSize="9" fill="#34d399" fontWeight="500" fontFamily="system-ui,sans-serif">11:15</text>
        <circle cx="182" cy="231" r="16" fill="#041a10" />
        <text x="182" y="234.5" fontSize="7.5" fill="#34d399" textAnchor="middle" fontFamily="system-ui,sans-serif">SK</text>
        <text x="208" y="224" fontSize="10" fill="#dde6f0" fontWeight="500" fontFamily="system-ui,sans-serif">Sunita Karki</text>
        <text x="208" y="237" fontSize="7.5" fill="#2d4060" fontFamily="system-ui,sans-serif">Extraction · Dr. Aarav</text>
        <rect x="208" y="244" width="60" height="11" rx="4" fill="#021508" />
        <circle cx="219" cy="249.5" r="2.5" fill="#34d399" opacity="0.75" />
        <text x="240" y="253" fontSize="6.5" fill="#34d399" textAnchor="middle" fontFamily="system-ui,sans-serif">Completed</text>
        <line x1="112" y1="256" x2="500" y2="256" stroke="#0a1520" strokeWidth="1" />
        <rect x="112" y="256" width="4" height="28" fill="#f59e0b" opacity="0.35" />
        <text x="127" y="273" fontSize="8.5" fill="#3a3530" fontFamily="system-ui,sans-serif">13:00</text>
        <text x="156" y="273" fontSize="7.5" fill="#1c2a3a" fontFamily="system-ui,sans-serif">Bikram Thapa · Filling · Dr. Aarav</text>
        <text x="460" y="273" fontSize="7" fill="#1e2d42" textAnchor="middle" fontFamily="system-ui,sans-serif">+2 more</text>
        <rect x="112" y="284" width="388" height="106" fill="#05090f" />
        <line x1="112" y1="284" x2="500" y2="284" stroke="#0a1520" strokeWidth="1" />
        <rect x="120" y="292" width="82" height="90" rx="8" fill="#0b1422" stroke="#141e2d" strokeWidth="1" />
        <text x="161" y="311" fontSize="6.5" fill="#2d4060" textAnchor="middle" fontFamily="system-ui,sans-serif">Patients</text>
        <text x="161" y="340" fontSize="28" fill="#dde6f0" fontWeight="700" textAnchor="middle" fontFamily="system-ui,sans-serif">6</text>
        <text x="161" y="358" fontSize="6" fill="#22d3ee" textAnchor="middle" fontFamily="system-ui,sans-serif">↑ 2 yesterday</text>
        <text x="161" y="372" fontSize="7" fill="#0d2535" textAnchor="middle" fontFamily="system-ui,sans-serif">▓▓▓▓░</text>
        <rect x="212" y="292" width="82" height="90" rx="8" fill="#0b1422" stroke="#141e2d" strokeWidth="1" />
        <text x="253" y="311" fontSize="6.5" fill="#2d4060" textAnchor="middle" fontFamily="system-ui,sans-serif">Revenue</text>
        <text x="253" y="337" fontSize="22" fill="#dde6f0" fontWeight="700" textAnchor="middle" fontFamily="system-ui,sans-serif">₹24k</text>
        <text x="253" y="358" fontSize="6" fill="#34d399" textAnchor="middle" fontFamily="system-ui,sans-serif">On target</text>
        <text x="253" y="372" fontSize="7" fill="#0a2516" textAnchor="middle" fontFamily="system-ui,sans-serif">▓▓▓▓▓</text>
        <rect x="304" y="292" width="82" height="90" rx="8" fill="#0b1422" stroke="#141e2d" strokeWidth="1" />
        <text x="345" y="311" fontSize="6.5" fill="#2d4060" textAnchor="middle" fontFamily="system-ui,sans-serif">AI Notes</text>
        <text x="345" y="340" fontSize="28" fill="#dde6f0" fontWeight="700" textAnchor="middle" fontFamily="system-ui,sans-serif">4</text>
        <text x="345" y="358" fontSize="6" fill="#818cf8" textAnchor="middle" fontFamily="system-ui,sans-serif">Generated</text>
        <text x="345" y="372" fontSize="7" fill="#160e30" textAnchor="middle" fontFamily="system-ui,sans-serif">▓▓▓░░</text>
        <rect x="396" y="292" width="96" height="90" rx="8" fill="url(#il-stat4)" stroke="#1e40af" strokeWidth="1" />
        <text x="444" y="311" fontSize="6.5" fill="#93c5fd" textAnchor="middle" fontFamily="system-ui,sans-serif">Billing</text>
        <text x="444" y="337" fontSize="22" fill="white" fontWeight="700" textAnchor="middle" fontFamily="system-ui,sans-serif">100%</text>
        <text x="444" y="358" fontSize="6" fill="#bfdbfe" textAnchor="middle" fontFamily="system-ui,sans-serif">All processed</text>
        <rect x="414" y="364" width="60" height="12" rx="4" fill="#1e3a8a" opacity="0.6" />
        <text x="444" y="373" fontSize="6" fill="#93c5fd" textAnchor="middle" fontFamily="system-ui,sans-serif">₹ 5,100</text>
        <rect x="355" y="-8" width="200" height="118" rx="12" fill="#07111e" stroke="#1e3a5f" strokeWidth="1.5" filter="url(#il-card)" />
        <rect x="355" y="-8" width="200" height="28" rx="12" fill="#0b1e36" />
        <rect x="355" y="12" width="200" height="8" fill="#0b1e36" />
        <rect x="365" y="-2" width="40" height="18" rx="5" fill="url(#il-ai)" />
        <text x="385" y="10" fontSize="7" fill="white" textAnchor="middle" fontFamily="system-ui,sans-serif">✦ AI</text>
        <text x="411" y="10" fontSize="8.5" fill="#6b96c0" fontWeight="600" fontFamily="system-ui,sans-serif">Clinical Note</text>
        <circle cx="543" cy="4" r="5" fill="#3b82f6" opacity="0.85">
          <animate attributeName="r" values="5;9;5" dur="2.2s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.85;0.2;0.85" dur="2.2s" repeatCount="indefinite" />
        </circle>
        <text x="366" y="40" fontSize="7" fill="#3d5870" fontFamily="system-ui,sans-serif">Patient: Priya Sharma · Tooth #16</text>
        <text x="366" y="53" fontSize="6.5" fill="#2d4558" fontFamily="system-ui,sans-serif">CC: Severe pain, upper right quadrant</text>
        <text x="366" y="65" fontSize="6.5" fill="#2d4558" fontFamily="system-ui,sans-serif">Dx: Irreversible pulpitis, #16</text>
        <line x1="366" y1="73" x2="548" y2="73" stroke="#0d1e30" strokeWidth="0.8" />
        <text x="366" y="85" fontSize="6.5" fill="#2d4558" fontFamily="system-ui,sans-serif">Tx: Root canal therapy · RCT #16</text>
        <rect x="366" y="92" width="130" height="14" rx="4" fill="#091828" stroke="#122040" strokeWidth="0.5" />
        <text x="431" y="102" fontSize="6.5" fill="#4a7aa0" textAnchor="middle" fontFamily="system-ui,sans-serif">Transcribed from recording</text>
        <rect x="-8" y="306" width="155" height="112" rx="12" fill="#07111e" stroke="#141e2d" strokeWidth="1.5" filter="url(#il-card)" />
        <rect x="-8" y="306" width="155" height="28" rx="12" fill="#0b1828" />
        <rect x="-8" y="322" width="155" height="12" fill="#0b1828" />
        <text x="70" y="321" fontSize="7.5" fill="#3a5570" textAnchor="middle" fontFamily="system-ui,sans-serif">Invoice #2024-041</text>
        <line x1="2" y1="334" x2="138" y2="334" stroke="#0d1c2c" strokeWidth="0.8" />
        <text x="5" y="346" fontSize="7" fill="#2d4060" fontFamily="system-ui,sans-serif">Root Canal Therapy</text>
        <text x="140" y="346" fontSize="7" fill="#b0c8e0" textAnchor="end" fontFamily="system-ui,sans-serif">₹4,500</text>
        <text x="5" y="358" fontSize="7" fill="#2d4060" fontFamily="system-ui,sans-serif">X-Ray (2 films)</text>
        <text x="140" y="358" fontSize="7" fill="#b0c8e0" textAnchor="end" fontFamily="system-ui,sans-serif">₹600</text>
        <line x1="2" y1="364" x2="142" y2="364" stroke="#0d1c2c" strokeWidth="0.8" />
        <text x="5" y="376" fontSize="7.5" fill="#5a7a94" fontWeight="500" fontFamily="system-ui,sans-serif">Total</text>
        <text x="140" y="376" fontSize="8" fill="#34d399" fontWeight="600" textAnchor="end" fontFamily="system-ui,sans-serif">₹5,100</text>
        <rect x="5" y="382" width="56" height="14" rx="5" fill="#031810" stroke="#065f46" strokeWidth="0.8" />
        <text x="33" y="392" fontSize="6.5" fill="#34d399" textAnchor="middle" fontFamily="system-ui,sans-serif">✓  Paid</text>
        <rect x="68" y="382" width="68" height="14" rx="5" fill="url(#il-ai)" opacity="0.65" />
        <text x="102" y="392" fontSize="6.5" fill="white" textAnchor="middle" fontFamily="system-ui,sans-serif">Auto-generated</text>
      </svg>
    </div>
  )
}

const FEATURES = [
  {
    icon: Mic,
    color: 'text-blue-500 dark:text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
    title: 'Bilingual AI Notes',
    desc: 'A patient describes their pain in Nepali mid-consultation. Müskaan listens, structures the findings, and has the clinical note ready before they leave the chair.',
  },
  {
    icon: FileImage,
    color: 'text-purple-500 dark:text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
    title: 'Imaging Analysis',
    desc: 'Upload a radiograph. Müskaan reviews it alongside you and quietly mentions what it noticed.',
  },
  {
    icon: Receipt,
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
    title: 'Smart Billing',
    desc: 'Tick off the treatments. The invoice takes care of itself.',
  },
  {
    icon: Brain,
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    title: 'Patient Intelligence',
    desc: 'A patient brings up something from two years ago. Ask Müskaan. It remembers.',
  },
]

export function LandingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center px-6 pt-16 pb-8 overflow-hidden border-b border-transparent dark:border-white/[0.07]">
        <div className="absolute inset-0 pointer-events-none hidden dark:block">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-brand-primary/10 rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 pointer-events-none dark:hidden">
          <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50/70 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-56 pointer-events-none bg-gradient-to-t from-blue-100/30 to-transparent dark:from-[#07090F]/90 dark:to-transparent" />

        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center py-16 lg:py-0">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <MuskaaanDevanagari className="h-24 -mb-3" />
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-[1.08] mb-6">
              Where every smile
              <br />
              <span className="italic text-slate-600 dark:text-white/60">tells a story.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-500 dark:text-white/50 leading-relaxed mb-4 max-w-lg">
              Every patient carries a past that deserves to be understood. Müskaan reads it, surfaces what matters, and handles the notes so your attention stays where it belongs: on the person in front of you.
            </p>
            <BrandButton href="/contact">Find your müskaan</BrandButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                Built around how care actually happens.
                <br />
                <span className="text-slate-500 dark:text-white/50">Not how software thinks it should.</span>
              </h2>
            </div>
          </FadeIn>
          <div className="grid sm:grid-cols-2 gap-4">
            {FEATURES.map(({ icon: Icon, color, bg, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.06}>
                <div className="rounded-2xl border border-slate-200 dark:border-white/[0.07] bg-white dark:bg-white/[0.025] p-6 hover:bg-slate-50 dark:hover:bg-white/[0.05] hover:border-slate-300 dark:hover:border-white/[0.12] transition-all duration-300 h-full shadow-sm dark:shadow-none">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl border ${bg} mb-4`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-slate-500 dark:text-white/45 leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section id="how-it-works" className="py-24 px-6 border-t border-slate-100 dark:border-white/[0.04]">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                A day with müskaan,
                <br />
                <span className="text-slate-500 dark:text-white/50">start to finish.</span>
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/[0.08] bg-slate-50 dark:bg-white/[0.025] aspect-video">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-slate-50/40 to-slate-100/60 dark:from-blue-950/20 dark:via-slate-900/10 dark:to-slate-900/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full border border-slate-200 dark:border-white/[0.12] bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm flex items-center justify-center shadow-sm">
                  <Play className="w-6 h-6 text-slate-400 dark:text-white/30 ml-0.5" />
                </div>
                <p className="text-sm text-slate-400 dark:text-white/25 tracking-wide">Walkthrough coming soon</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none hidden dark:block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-brand-primary/20 rounded-full blur-[130px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent" />
        </div>
        <div className="absolute inset-0 pointer-events-none dark:hidden">
          <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-blue-50/40 to-transparent" />
        </div>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="inline-flex items-center justify-center gap-3 flex-wrap">
                Bring
                <MuskaaanLogo height={52} className="text-[#112754] dark:text-white" />
              </span>
              <br />
              <span className="italic font-normal text-slate-500 dark:text-white/50">to your practice.</span>
            </h2>
            <p className="text-base text-slate-500 dark:text-white/45 max-w-md mx-auto leading-relaxed mb-10">
              See what it looks like on your team and your patients.
            </p>
            <BrandButton href="/contact">Find yours</BrandButton>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
