import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CiMobile3, CiCloudOn } from "react-icons/ci";
import { LuBrainCircuit } from "react-icons/lu";
import { IoColorPaletteOutline, IoCodeOutline } from "react-icons/io5";
import { PiBracketsCurly } from "react-icons/pi";
import { AiOutlineCode, AiOutlineStock } from "react-icons/ai";
import { SiAdguard } from "react-icons/si";
import { FaArrowTrendUp, FaLock } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import HeroSection from "@/components/layout/HeroSection";
import CTASection from "@/components/layout/CTASection";
import ServiceHero from "@/assets/ServiceHero.png";

// ─── EXPERTISE ───────────────────────────────────────────────────────────────
const expertiseCards = [
  {
    title: "Web Development",
    desc: "Building high-performance, responsive web applications using modern stacks like React and Next.js.",
    icon: <IoCodeOutline />,
    to: "/web-development",
  },
  {
    title: "Mobile Apps",
    desc: "Crafting native and cross-platform mobile experiences for iOS and Android that users love.",
    icon: <CiMobile3 />,
    to: "/mobile-apps",
  },
  {
    title: "AI & Automation",
    desc: "Streamlining workflows and enhancing decision making with intelligent machine learning models.",
    icon: <LuBrainCircuit />,
    to: "/ai-automation",
  },
  {
    title: "Cloud Services",
    desc: "Secure, scalable, and optimized cloud infrastructure management on AWS and Azure.",
    icon: <CiCloudOn />,
    to: "/cloud-services",
  },
  {
    title: "UI/UX Design",
    desc: "Creating modern, intuitive, and user-centered interfaces that drive engagement.",
    icon: <IoColorPaletteOutline />,
    to: "/ui-ux-design",
  },
  {
    title: "API Integration",
    desc: "Seamlessly connecting your platform with third-party tools and complex ecosystems.",
    icon: <PiBracketsCurly />,
    to: "/api-integration",
  },
  {
    title: "Software Dev",
    desc: "Custom enterprise software solutions built for stability and long-term maintainability.",
    icon: <AiOutlineCode />,
    to: "#",
  },
  {
    title: "IT Consulting",
    desc: "Strategic roadmap planning and tech stack selection to future-proof your business.",
    icon: <AiOutlineStock />,
    to: "/it-consulting",
  },
];

function Expertise() {
  return (
    <section className="py-16 md:py-28 px-6 lg:px-12 w-full flex flex-col items-center gap-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center gap-2 md:gap-5">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
          Our Expertise
        </h2>
        <p className="text-center text-slate-400 text-lg max-w-3xl">
          Comprehensive technology services designed to scale your operations
          and drive digital transformation.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8 w-full">
        {expertiseCards.map((ele) => (
          <div
            key={ele.title}
            className="border border-slate-200 flex flex-col items-start justify-between p-8 rounded-3xl gap-y-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl">
                {ele.icon}
              </div>
              <div className="text-xl font-bold">{ele.title}</div>
              <div className="text-gray-500 text-sm leading-relaxed">
                {ele.desc}
              </div>
            </div>
            <Link
              to={ele.to}
              className="text-blue-600 font-bold cursor-pointer flex items-center gap-2 group text-sm"
            >
              Learn More
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── WHY CHOOSE ──────────────────────────────────────────────────────────────
const whyFeatures = [
  {
    icon: <SiAdguard />,
    title: "Expert Developers",
    description: "Top 3% talent with deep technical expertise.",
  },
  {
    icon: <FaArrowTrendUp />,
    title: "Scalable Solutions",
    description: "Architecture built to grow with your user base.",
  },
  {
    icon: <FaLock />,
    title: "Secure Infrastructure",
    description: "Military-grade security by default.",
  },
  {
    icon: <MdOutlineSupportAgent />,
    title: "24/7 Support",
    description: "Around the clock monitoring and assistance.",
  },
];

function WhyChoose() {
  return (
    <section className="py-16 md:py-28 bg-gray-100 px-6 md:px-12 w-full flex flex-col lg:flex-row items-center gap-12 max-w-7xl mx-auto">
      <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start lg:flex-1">
        <h2 className="text-center lg:text-start text-3xl font-bold sm:text-4xl lg:text-5xl flex flex-col">
          Why High-Growth Companies{" "}
          <span className="text-blue-600">Choose Codeofy</span>
        </h2>
        <p className="text-center lg:text-start text-slate-700 text-lg max-w-2xl mt-5">
          We combine technical excellence with a deep understanding of business
          goals to deliver software that makes a real impact.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6">
          {whyFeatures.map((feature) => (
            <div key={feature.title} className="flex gap-3 items-center">
              <div className="text-blue-600 text-2xl">{feature.icon}</div>
              <div className="flex flex-col">
                <div className="text-black font-bold">{feature.title}</div>
                <div className="text-gray-600 text-sm">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="order-1 lg:order-2 lg:flex-1 w-full max-w-xl lg:max-w-none bg-blue-100 flex justify-evenly p-5 rounded-3xl gap-5">
        <div className="flex-1 flex flex-col gap-5 mx-auto max-w-3xs">
          <div className="bg-white rounded-xl flex items-center justify-center max-h-50 w-auto aspect-square flex-col">
            <div className="text-2xl font-bold text-blue-600">99%</div>
            <div className="text-sm">Client Retention</div>
          </div>
          <div className="bg-blue-600 text-white rounded-xl flex items-center justify-center max-h-50 w-auto aspect-square flex-col">
            <div className="text-2xl font-bold">50+</div>
            <div className="text-sm">Tech Experts</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-5 mx-auto max-w-3xs">
          <div className="bg-blue-600 text-white rounded-xl flex items-center justify-center max-h-50 w-auto aspect-square flex-col">
            <div className="text-2xl font-bold">250+</div>
            <div className="text-sm">Projects Delivered</div>
          </div>
          <div className="bg-white rounded-xl flex items-center justify-center max-h-50 w-auto aspect-square flex-col">
            <div className="text-2xl text-blue-600 font-bold">15+</div>
            <div className="text-sm">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PROCESS ─────────────────────────────────────────────────────────────────
const processData = [
  {
    id: 1,
    title: "Requirement Analysis",
    desc: "Deep dive into your business needs, goals, and technical requirements.",
  },
  {
    id: 2,
    title: "Planning & Strategy",
    desc: "Defining architecture, roadmap, and choosing the right technology stack.",
  },
  {
    id: 3,
    title: "Dev & Testing",
    desc: "Agile development sprints with continuous quality assurance and feedback.",
  },
  {
    id: 4,
    title: "Deployment & Support",
    desc: "Launch, monitoring, and ongoing maintenance to ensure peak performance.",
  },
];

function Process() {
  return (
    <section className="py-16 md:py-28 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl mb-4">
          Our Streamlined Process
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          How we turn your complex ideas into working products
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {processData.map((step, i) => (
          <div
            key={step.id}
            className="relative bg-white border border-gray-100 hover:border-blue-200 rounded-2xl p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-600 text-white font-black text-sm flex items-center justify-center mb-5 shadow-lg shadow-blue-300/40">
              {i + 1}
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-2">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── TECH STACK MARQUEE ──────────────────────────────────────────────────────
function TechStack() {
  const technologies = [
    "React",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
    "MongoDB",
    "Tailwind",
  ];
  const repeated = [...technologies, ...technologies, ...technologies];
  return (
    <section className="w-full bg-gray-100 overflow-hidden py-16 md:py-28 flex flex-col gap-y-10">
      <p className="text-center text-xs sm:text-lg font-semibold tracking-[0.25em] text-slate-400 uppercase">
        Technologies We Master
      </p>
      <div className="relative flex">
        <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-slate-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-slate-100 to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee whitespace-nowrap">
          {repeated.map((tech, i) => (
            <span
              key={i}
              className="mx-8 text-lg sm:text-xl md:text-2xl font-bold text-slate-500 hover:text-slate-800 transition-colors duration-300 select-none"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Services() {
  return (
    <>
      <HeroSection
        badge="✨ Next-Gen IT Solutions"
        bgClassName="bg-gray-100"
        heading={<>Our IT Services That </>}
        highlightedText="Power Your Business"
        description="Scalable and innovative digital solutions tailored for high-growth startups and enterprises. Transform your vision into reality with cutting-edge technologies."
        primaryCTA={{ label: "Get a Quote" }}
        secondaryCTA={{ label: "Contact Us" }}
        visual={
          <div className="p-4 bg-white/20 border border-slate-200 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <img
              src={ServiceHero}
              alt="IT Services Dashboard"
              className="rounded-xl w-full object-cover aspect-video"
            />
          </div>
        }
      />

      <Expertise />
      <WhyChoose />
      <Process />
      <TechStack />

      <CTASection
        variant="gradient"
        heading="Ready to build something amazing?"
        description="Let's discuss your project requirements and create a solution that drives real business impact."
        primaryCTA={{ label: "Start Your Project" }}
        secondaryCTA={{ label: "Schedule a Call" }}
      />
    </>
  );
}
