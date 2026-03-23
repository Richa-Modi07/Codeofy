import { FiMonitor, FiServer, FiTerminal, FiCloud } from "react-icons/fi";
import HeroSection from "../../components/layout/HeroSection";
import CTASection from "../../components/layout/CTASection";
import FeatureGrid from "../../components/ui/FeatureGrid";

// ─── HERO VISUAL ─────────────────────────────────────────────────────────────
function BrowserMockup() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl aspect-4/3 bg-linear-to-br from-teal-800 via-teal-900 to-gray-900 flex items-center justify-center relative">
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-teal-400/80 shadow-2xl shadow-teal-300/50 blur-sm" />
      <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 w-36 shadow-xl">
        <div className="flex gap-1.5 mb-3">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 bg-white/30 rounded-full w-full" />
          <div className="h-1.5 bg-white/20 rounded-full w-4/5" />
          <div className="h-1.5 bg-white/20 rounded-full w-3/5" />
        </div>
        <div className="mt-4 flex justify-center">
          <div className="w-8 h-8 border border-white/40 rounded flex items-center justify-center">
            <span className="text-white/80 text-xs">☰</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── TABLET MOCKUP ───────────────────────────────────────────────────────────
function TabletMockup() {
  return (
    <div className="w-64 sm:w-72 mx-auto bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="bg-gray-100 px-4 py-2 flex items-center justify-between border-b border-gray-200">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400" />
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="h-1.5 bg-gray-300 rounded-full w-24" />
        <div className="w-4" />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          <div className="h-5 bg-blue-100 rounded w-16" />
          <div className="h-5 bg-gray-100 rounded flex-1" />
          <div className="h-5 bg-blue-500 rounded w-10" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="aspect-square bg-linear-to-br from-gray-100 to-gray-200 rounded-lg flex items-end p-1.5"
            >
              <div className="h-1 bg-gray-300 rounded w-full" />
            </div>
          ))}
        </div>
        <div className="flex gap-2 pt-1">
          {[
            { v: "3", l: "Cart" },
            { v: "✓", l: "Paid" },
            { v: "↑", l: "Ship" },
          ].map((s) => (
            <div
              key={s.l}
              className="flex-1 bg-gray-50 border border-gray-100 rounded-lg p-2 text-center"
            >
              <div className="font-bold text-gray-800 text-sm">{s.v}</div>
              <div className="text-gray-400 text-[9px]">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PHONE MOCKUP ────────────────────────────────────────────────────────────
function PhoneMockup() {
  return (
    <div className="w-40 sm:w-48 mx-auto">
      <div className="bg-gray-950 rounded-[2.5rem] border-4 border-gray-800 shadow-2xl overflow-hidden aspect-[9/19] flex flex-col">
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-16 h-3 bg-gray-800 rounded-full" />
        </div>
        <div className="flex-1 bg-linear-to-b from-teal-100 to-teal-50 flex flex-col items-center justify-center gap-3 px-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/30 border border-teal-300 flex items-center justify-center text-teal-700 font-black text-xs">
            PWA
          </div>
          <div className="space-y-1.5 w-full">
            <div className="h-1.5 bg-teal-200 rounded-full w-full" />
            <div className="h-1.5 bg-teal-200 rounded-full w-4/5" />
            <div className="h-1.5 bg-teal-200 rounded-full w-3/5" />
          </div>
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-lg bg-teal-400/40 border border-teal-300"
              />
            ))}
          </div>
        </div>
        <div className="flex justify-center py-2">
          <div className="w-20 h-1 bg-gray-700 rounded-full" />
        </div>
      </div>
    </div>
  );
}

// ─── E-COMMERCE SECTION ──────────────────────────────────────────────────────
const cmsFeatures = [
  {
    title: "Headless Commerce",
    desc: "Decoupled frontends for faster performance and multi-channel reach.",
  },
  {
    title: "Custom CMS Development",
    desc: "Tailored management systems using Contentful, Strapi, or WordPress.",
  },
  {
    title: "Secure Payment Gateways",
    desc: "Stripe, PayPal, and multi-currency integrations for global sales.",
  },
];

function Ecommerce() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <div className="flex justify-center order-2 md:order-1">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-200/50 rounded-3xl blur-3xl scale-90 pointer-events-none" />
            <div className="relative">
              <TabletMockup />
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <p className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-2">
            E-Commerce & CMS
          </p>
          <h2 className="text-3xl font-black text-gray-900 leading-tight mb-4">
            Scalable Online Retail &amp; Content
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            We build conversion-focused shopping experiences and flexible
            content systems that empower your team.
          </p>
          <div className="flex flex-col gap-5">
            {cmsFeatures.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
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
                    {f.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PWA SECTION ─────────────────────────────────────────────────────────────
const pwaFeatures = [
  { icon: "📶", label: "Offline Functionality" },
  { icon: "⚡", label: "Instant Loading" },
  { icon: "🔔", label: "Push Notifications" },
  { icon: "📲", label: "Add to Home Screen" },
];

function PWASection() {
  return (
    <section className="py-20 px-4 bg-blue-600 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-indigo-700/30 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center relative z-10">
        <div>
          <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-3">
            Next-Gen Apps
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
            Progressive Web Apps (PWA)
          </h2>
          <p className="text-blue-200 text-sm leading-relaxed mb-8 max-w-md">
            Bridge the gap between web and mobile. We develop high-performance
            PWAs that work offline, send push notifications, and can be
            installed on any device without an app store.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {pwaFeatures.map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 bg-blue-500/30 hover:bg-blue-500/50 border border-blue-400/30 rounded-xl px-4 py-3 transition-colors"
              >
                <span className="text-lg">{f.icon}</span>
                <span className="text-white text-xs font-semibold">
                  {f.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-75 pointer-events-none" />
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const stackItems = [
  {
    icon: <FiMonitor className="w-6 h-6" />,
    title: "Frontend Mastery",
    desc: "Reactive UIs using React, Vue, and Tailwind CSS for superior micro-engagement.",
  },
  {
    icon: <FiServer className="w-6 h-6" />,
    title: "Robust Backends",
    desc: "Secure and scalable server-side logic powered by Node.js, Python, or Go.",
  },
  {
    icon: <FiTerminal className="w-6 h-6" />,
    title: "API Integration",
    desc: "Seamless connectivity between your platform and third-party services.",
  },
  {
    icon: <FiCloud className="w-6 h-6" />,
    title: "Cloud Infrastructure",
    desc: "Optimised deployment on AWS, Azure, or Google Cloud for 99.9% uptime.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function WebDevPage() {
  return (
    <>
      <HeroSection
        badge="Premium Web Solutions"
        heading={<>Modern Web </>}
        highlightedText="Development Solutions"
        description="Building scalable, high-performance digital experiences tailored to your business goals. From single-page apps to complex enterprise systems."
        primaryCTA={{ label: "Start Your Project" }}
        secondaryCTA={{ label: "View Portfolio" }}
        visual={<BrowserMockup />}
      />

      <FeatureGrid
        label="End-to-End"
        title="Full-Stack Solutions"
        subtitle="From database architecture to pixel-perfect frontends, we handle every layer of your digital product using the latest industry standards."
        items={stackItems}
        columns={4}
        headerAlign="left"
      />

      <Ecommerce />
      <PWASection />

      <CTASection
        variant="light"
        heading="Ready to start your digital transformation?"
        description="Our team is ready to discuss your project requirements and provide a custom-tailored solution for your business."
        primaryCTA={{ label: "Get a Custom Quote" }}
        secondaryCTA={{ label: "Schedule a Call" }}
      />
    </>
  );
}
