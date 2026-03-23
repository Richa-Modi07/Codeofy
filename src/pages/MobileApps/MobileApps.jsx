import { useEffect, useState } from "react";
import HeroSection from "../../components/layout/HeroSection";
import CTASection from "../../components/layout/CTASection";
import FeatureGrid from "../../components/ui/FeatureGrid";
import ProcessSteps from "../../components/ui/ProcessSteps";

// ─── HERO VISUAL (dark centered hero — no right-side visual) ─────────────────

// ─── PERFORMANCE DASHBOARD ───────────────────────────────────────────────────
function PerformanceDashboard() {
  const [cpu, setCpu] = useState(17);
  const bars = [
    { label: "CPU", width: 17, color: "bg-blue-500" },
    { label: "MEM", width: 42, color: "bg-indigo-400" },
    { label: "NET", width: 28, color: "bg-blue-300" },
  ];

  useEffect(() => {
    const t = setInterval(
      () => setCpu(Math.floor(12 + Math.random() * 10)),
      2000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-[#0f1923] rounded-2xl border border-white/10 p-5 font-mono text-xs shadow-2xl w-full max-w-md">
      <div className="flex justify-between items-center mb-5">
        <span className="text-gray-400">
          CPU USAGE: <span className="text-white">{cpu}%</span>
        </span>
        <span className="text-green-400 text-xs font-bold">STATUS: STABLE</span>
      </div>
      <div className="space-y-3 mb-6">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex justify-between text-gray-500 mb-1">
              <span>{b.label}</span>
              <span>{b.width}%</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${b.color} transition-all duration-1000`}
                style={{ width: `${b.width}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 rounded-xl p-3">
          <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">
            Average Load
          </p>
          <p className="text-white text-xl font-black">0.4s</p>
        </div>
        <div className="bg-white/5 rounded-xl p-3">
          <p className="text-gray-500 text-[10px] uppercase tracking-wider mb-1">
            Crash Rate
          </p>
          <p className="text-green-400 text-xl font-black">&lt;0.01%</p>
        </div>
      </div>
    </div>
  );
}

// ─── PERFORMANCE SECTION ─────────────────────────────────────────────────────
const perfFeatures = [
  {
    icon: "⚡",
    title: "Ultra-Low Latency",
    desc: "Optimised backend integration for snappy data fetching and real-time updates.",
  },
  {
    icon: "🔒",
    title: "Military-Grade Security",
    desc: "End-to-end encryption and secure data storage as a standard for every project.",
  },
  {
    icon: "🎯",
    title: "Native Smoothness",
    desc: "60FPS animations and seamless transitions that users expect from high-end apps.",
  },
];

function Performance() {
  return (
    <section className="py-20 px-4 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
            Focus on Performance
            <br />& Unrivaled Quality
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
            We don't just build apps; we engineer digital experiences that feel
            instantaneous. Our commitment to performance is at the core of every
            line of code we write.
          </p>
          <div className="flex flex-col gap-7">
            {perfFeatures.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-lg flex-shrink-0">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">{f.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <PerformanceDashboard />
        </div>
      </div>
    </section>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const serviceCards = [
  {
    icon: "🍎",
    title: "iOS Development",
    desc: "Native Swift and SwiftUI apps optimised for the full Apple ecosystem, including WatchOS and iPadOS.",
    imgBg: "from-slate-700 to-slate-900",
    imgContent: (
      <div className="flex items-end justify-center gap-1 h-full pb-4">
        {[40, 55, 45, 60, 50, 70, 65].map((h, i) => (
          <div
            key={i}
            className="w-5 rounded-sm bg-blue-400/60"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  },
  {
    icon: "🤖",
    title: "Android Development",
    desc: "High-performance Kotlin applications engineered for diverse hardware and the latest Android features.",
    imgBg: "from-gray-800 to-gray-950",
    imgContent: (
      <div className="flex items-center justify-center h-full">
        <div className="font-mono text-left text-xs text-green-400/80 leading-5 px-3">
          <div>
            <span className="text-gray-500">1</span>{" "}
            <span className="text-blue-300">fun</span> main() {"{"}
          </div>
          <div>
            <span className="text-gray-500">2</span> val app ={" "}
            <span className="text-yellow-300">App()</span>
          </div>
          <div>
            <span className="text-gray-500">3</span> app.
            <span className="text-green-300">launch()</span>
          </div>
          <div>
            <span className="text-gray-500">4</span> {"}"}
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: "🔗",
    title: "Cross-platform",
    desc: "Efficient Flutter and React Native apps with a single codebase to reach all users simultaneously.",
    imgBg: "from-teal-900 to-gray-950",
    imgContent: (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-4xl mb-2">📱</div>
          <div className="flex gap-2 justify-center">
            <span className="text-xs bg-teal-500/30 text-teal-300 px-2 py-0.5 rounded">
              iOS
            </span>
            <span className="text-xs bg-blue-500/30 text-blue-300 px-2 py-0.5 rounded">
              Android
            </span>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: "📈",
    title: "Optimization",
    desc: "Data-driven strategies to increase organic visibility and conversion in App Store and Play Store.",
    imgBg: "from-emerald-950 to-gray-950",
    imgContent: (
      <div className="flex items-end justify-center gap-2 h-full pb-4 px-3">
        {[30, 45, 38, 55, 48, 70, 80, 90].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-emerald-500 to-emerald-300"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    ),
  },
];

function MobileServices() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceCards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
          >
            <div
              className={`h-36 bg-gradient-to-br ${card.imgBg} relative overflow-hidden`}
            >
              {card.imgContent}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm mb-2">
                <span>{card.icon}</span>
                <span>{card.title}</span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── JOURNEY STEPS ───────────────────────────────────────────────────────────
const journeySteps = [
  {
    title: "Discovery & UI/UX",
    desc: "We define user personas and map out intuitive journeys before a single line of code is written.",
  },
  {
    title: "Agile Sprints",
    desc: "Transparent development with bi-weekly updates and functional builds for you to test on your own device.",
  },
  {
    title: "Scale & Support",
    desc: "Post-launch monitoring, performance tuning, and scaling your infrastructure as your user base grows.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function MobilePage() {
  return (
    <>
      <HeroSection
        dark={true}
        centered={true}
        badge="Expert Mobile Engineering"
        badgeVariant="dark"
        bgClassName="bg-[#0d1117] relative overflow-hidden"
        heading={<>Build Robust & Scalable</>}
        highlightedText="Mobile Applications"
        description="We transform your ideas into high-performing mobile experiences for iOS, Android, and beyond using cutting-edge technologies."
        primaryCTA={{ label: "Get a Quote" }}
        secondaryCTA={{ label: "View Portfolio" }}
        visual={
          <>
            {/* Background grid */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
          </>
        }
      />

      <MobileServices />
      <Performance />

      <ProcessSteps
        title="Our Development Journey"
        subtitle="From conceptual whiteboard sessions to App Store trending lists."
        steps={journeySteps}
        variant="open"
        bgClassName="bg-white"
      />

      <CTASection
        variant="colored"
        heading="Ready to start your mobile journey?"
        description="Join 50+ successful companies that have launched world-class mobile products with Codeofy. Let's talk about your project today."
        primaryCTA={{ label: "Schedule a Free Consultation" }}
      />
    </>
  );
}
