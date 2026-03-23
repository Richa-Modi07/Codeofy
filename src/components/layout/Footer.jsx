import { Link } from "react-router-dom";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";
// import Logo from ".../assets/C-logo.png";

const footerCols = [
  {
    title: "Services",
    links: [
      { label: "Web Development", to: "/web-development" },
      { label: "Mobile Apps", to: "/mobile-apps" },
      { label: "AI & Automation", to: "/ai-automation" },
      { label: "Cloud Services", to: "/cloud-services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "#" },
      { label: "Careers", to: "#" },
      { label: "Blog", to: "#" },
      { label: "Privacy", to: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Documentation", to: "#" },
      { label: "Help Centre", to: "#" },
      { label: "Contact", to: "#" },
      { label: "Status Page", to: "#" },
    ],
  },
];

const socials = [
  { icon: <FiTwitter className="w-4 h-4" />, href: "#" },
  { icon: <FiFacebook className="w-4 h-4" />, href: "#" },
  { icon: <FiInstagram className="w-4 h-4" />, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-14 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img
              src=".../assets/C-logo.png"
              alt="Codeofy"
              className="w-7 h-7 rounded-md object-contain"
            />
            <span className="text-white font-extrabold text-lg">Codeofy</span>
          </Link>
          <p className="text-xs text-gray-500 leading-relaxed mb-5 max-w-xs">
            Empowering the next generation of digital products through
            cutting-edge technology and expert engineering.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        {footerCols.map((col) => (
          <div key={col.title}>
            <h4 className="text-white font-bold text-sm mb-4">{col.title}</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
        <span>© {new Date().getFullYear()} Codeofy. All rights reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
