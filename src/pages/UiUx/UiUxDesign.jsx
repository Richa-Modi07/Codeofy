import { useEffect, useState } from "react";
import {
  FiChevronDown,
  FiLayout,
  FiGrid,
  FiMousePointer,
} from "react-icons/fi";
import HeroSection from "../../components/layout/HeroSection";
import CTASection from "../../components/layout/CTASection";
import FeatureGrid from "../../components/ui/FeatureGrid";
import SectionHeader from "../../components/ui/SectionHeader";
import AnimatedBar from "../../components/ui/AnimatedBar";

// ─── PROCESS TABS ────────────────────────────────────────────────────────────
const processTabs = [
  { icon: "🔍", label: "User Research" },
  { icon: "✏️", label: "Wireframing" },
  { icon: "🎨", label: "Visual Design" },
  { icon: "🧪", label: "Usability Testing" },
];

function ProcessTabs() {
  return (
    <section className="bg-white border-b border-gray-100 py-4 px-4 sticky top-16 z-30 shadow-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2">
        {processTabs.map((t, i) => (
          <a
            key={t.label}
            href={`#step-${i + 1}`}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all group"
          >
            <span className="text-base group-hover:scale-110 transition-transform">
              {t.icon}
            </span>
            <span>{t.label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

// ─── HERO VISUAL ─────────────────────────────────────────────────────────────
function DeskVisual() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-amber-50 via-stone-100 to-stone-200 relative flex items-end justify-center">
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-b from-amber-700/20 to-amber-800/40 rounded-b-2xl" />
      <div className="relative z-10 mb-8 flex flex-col items-center">
        <div className="w-48 sm:w-60 h-32 sm:h-40 bg-gray-900 rounded-xl border-4 border-gray-700 shadow-2xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
          <div className="relative z-10 space-y-2 px-4 w-full">
            <div className="h-1.5 bg-blue-400/50 rounded w-3/4" />
            <div className="h-1.5 bg-gray-600 rounded w-full" />
            <div className="h-1.5 bg-gray-600 rounded w-2/3" />
            <div className="mt-3 flex gap-2">
              <div className="h-6 w-12 bg-blue-500/60 rounded text-white text-[8px] flex items-center justify-center">
                UI
              </div>
              <div className="h-6 w-12 bg-gray-700 rounded" />
            </div>
          </div>
        </div>
        <div className="w-8 h-4 bg-gray-600 mx-auto" />
        <div className="w-20 h-1.5 bg-gray-500 rounded mx-auto" />
      </div>
      <div className="absolute top-4 right-8 text-4xl">🌿</div>
      <div className="absolute bottom-10 right-10 text-2xl">☕</div>
    </div>
  );
}

// ─── 01 USER RESEARCH ────────────────────────────────────────────────────────
const methods = [
  {
    title: "Stakeholder Interviews",
    desc: "Align business goals with design objectives.",
  },
  {
    title: "User Personas",
    desc: "Creating detailed archetypes of your target audience.",
  },
  {
    title: "Competitive Analysis",
    desc: "Identify opportunities and market gaps.",
  },
];

function UserResearch() {
  return (
    <section id="step-1" className="py-20 px-4 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-black text-gray-900 mb-3">
            01. User Research
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
            Understanding your users is the foundation of every successful
            product. We dive deep into user behaviour, pain points, and market
            trends.
          </p>
          <div className="flex flex-col gap-4">
            {methods.map((m) => (
              <div key={m.title} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm mb-0.5">
                    {m.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">👥</div>
            <div className="text-3xl font-black text-gray-900 mb-1">150+</div>
            <div className="text-gray-400 text-xs font-medium">
              User Interviews Conducted
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="text-2xl mb-3">📊</div>
            <div className="text-3xl font-black text-blue-600 mb-1">98%</div>
            <div className="text-gray-400 text-xs font-medium">
              Accuracy in User Insights
            </div>
          </div>
          <div className="col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-gray-700 text-sm font-semibold">
                Research Coverage
              </span>
              <span className="text-blue-600 text-xs font-bold">Q4 2024</span>
            </div>
            <div className="space-y-2">
              {[
                { label: "Qualitative", pct: 85 },
                { label: "Quantitative", pct: 72 },
                { label: "Ethnographic", pct: 60 },
              ].map((b) => (
                <div key={b.label}>
                  <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                    <span>{b.label}</span>
                    <span>{b.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${b.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 02 WIREFRAMING ──────────────────────────────────────────────────────────
const wireItems = [
  {
    icon: <FiLayout className="w-6 h-6" />,
    title: "Information Architecture",
    desc: "Defining the hierarchy and structure of content to ensure intuitive navigation.",
  },
  {
    icon: <FiGrid className="w-6 h-6" />,
    title: "Low-Fidelity Wireframes",
    desc: "Fast, iterative layouts that focus on core functionality and user journeys.",
  },
  {
    icon: <FiMousePointer className="w-6 h-6" />,
    title: "Interactive Prototypes",
    desc: "High-fidelity simulations that feel like the real product for stakeholder testing.",
  },
];

// ─── 03 VISUAL DESIGN ────────────────────────────────────────────────────────
const visualFeatures = [
  {
    title: "Design Systems",
    desc: "Reusable components, typography, and colour tokens for consistency.",
    accent: "border-blue-500",
  },
  {
    title: "Micro-interactions",
    desc: "Delightful animations that provide feedback and improve UX.",
    accent: "border-indigo-400",
  },
  {
    title: "Responsive Design",
    desc: "Flawless performance across desktop, tablet, and mobile devices.",
    accent: "border-violet-400",
  },
];

function UIPreviewCard() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 w-full max-w-xs mx-auto">
      <div className="bg-gray-100 px-4 py-2.5 flex items-center justify-between border-b border-gray-200">
        <span className="text-xs font-bold text-gray-700">UI Design</span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
      </div>
      <div className="px-4 py-2 flex items-center gap-2 border-b border-gray-100">
        <div className="flex gap-1.5">
          {["bg-gray-300", "bg-gray-200", "bg-gray-200"].map((c, i) => (
            <div key={i} className={`w-5 h-5 rounded ${c}`} />
          ))}
        </div>
        <div className="flex-1 h-4 bg-gray-100 rounded-full" />
        <div className="w-16 h-5 bg-blue-100 rounded text-blue-600 text-[9px] font-bold flex items-center justify-center">
          Export
        </div>
      </div>
      <div className="p-4 bg-gray-50 min-h-[160px] relative">
        <div className="mx-auto w-20 h-36 bg-gray-900 rounded-xl border-2 border-gray-700 overflow-hidden flex flex-col p-1.5">
          <div className="h-3 bg-blue-500 rounded-sm mb-1" />
          <div className="flex gap-1 mb-1">
            <div className="flex-1 h-8 bg-gray-700 rounded-sm" />
            <div className="flex-1 h-8 bg-gray-700 rounded-sm" />
          </div>
          <div className="h-2 bg-gray-600 rounded-sm mb-0.5" />
          <div className="h-2 bg-gray-600 rounded-sm w-4/5 mb-0.5" />
          <div className="h-4 bg-blue-500/50 rounded-sm mt-auto" />
        </div>
        <div className="absolute bottom-3 left-3 right-3 bg-gray-900/80 rounded-lg p-2">
          <p className="text-white text-[10px] font-semibold">
            Modern SaaS Interface Design
          </p>
        </div>
      </div>
    </div>
  );
}

function VisualDesign() {
  return (
    <section id="step-3" className="py-20 px-4 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-100/60 rounded-3xl blur-3xl scale-90 pointer-events-none" />
            <div className="relative">
              <UIPreviewCard />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">
            03. Visual Design
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
            Where brand identity meets pixel-perfect execution. We create
            aesthetic interfaces that drive conversions and loyalty.
          </p>
          <div className="flex flex-col gap-5">
            {visualFeatures.map((f) => (
              <div key={f.title} className={`pl-4 py-1 border-l-4 ${f.accent}`}>
                <h4 className="font-bold text-gray-900 mb-1">{f.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 04 USABILITY TESTING ────────────────────────────────────────────────────
const testingMethods = [
  { icon: "👁️", label: "Eye Tracking" },
  { icon: "👤", label: "User Journaling" },
  { icon: "⚗️", label: "A/B Testing" },
  { icon: "⏱️", label: "Task Analysis" },
];

function UsabilityTesting() {
  return (
    <section id="step-4" className="py-20 px-4 bg-[#0d1117] scroll-mt-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl font-black text-white mb-4">
            04. Usability Testing
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
            We validate every design decision through rigorous testing with real
            users.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {testingMethods.map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 rounded-xl px-4 py-3 transition-all"
              >
                <span className="text-lg">{m.icon}</span>
                <span className="text-gray-300 text-xs font-semibold">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#161b27] border border-white/10 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold text-sm">
              Test Results Snapshot
            </h3>
            <span className="text-green-400 text-xs font-semibold bg-green-400/10 border border-green-400/20 px-2 py-1 rounded-full">
              Live
            </span>
          </div>
          <div className="space-y-5">
            <AnimatedBar
              label="Navigation Efficiency"
              pct={96}
              color="bg-blue-500"
              dark
              delay={0}
            />
            <AnimatedBar
              label="Content Clarity"
              pct={89}
              color="bg-indigo-400"
              dark
              delay={200}
            />
            <AnimatedBar
              label="User Satisfaction"
              pct={97}
              color="bg-violet-500"
              dark
              delay={400}
            />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-white/10">
            {[
              { v: "240", l: "Testers" },
              { v: "4.9", l: "Avg Score" },
              { v: "3wk", l: "Duration" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-white font-black text-lg">{s.v}</div>
                <div className="text-gray-500 text-[10px] uppercase tracking-wide">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function UXDesignPage() {
  return (
    <>
      <HeroSection
        badge="Expert UX/UI Solutions"
        badgeVariant="dotted"
        heading={<>Crafting </>}
        highlightedText="Exceptional Digital Experiences"
        description="We combine user-centric research with cutting-edge design patterns to build digital products that people love and businesses scale with."
        primaryCTA={{ label: "Book a Consultation", icon: "→" }}
        secondaryCTA={{ label: "View Case Studies" }}
        visual={<DeskVisual />}
      />

      <ProcessTabs />
      <UserResearch />

      <FeatureGrid
        title="02. Wireframing & Prototyping"
        subtitle="We transform concepts into tangible structures. This stage focuses on usability and flow before adding aesthetic layers."
        items={wireItems}
        columns={3}
        className="!bg-gray-50 scroll-mt-24"
      />

      <VisualDesign />
      <UsabilityTesting />

      <CTASection
        variant="light"
        heading="Ready to craft your next digital experience?"
        description="Join 200+ brands that trust Codeofy to design products their users can't stop talking about."
        primaryCTA={{ label: "Start a Project" }}
        secondaryCTA={{ label: "View Our Portfolio" }}
      />
    </>
  );
}
