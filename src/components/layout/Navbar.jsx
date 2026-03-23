import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Button from "../ui/Button";

const navLinks = [
  { label: "Blog", to: "/blog" },
  { label: "Career", to: "/career" },
  { label: "Case Studies", to: "/study" },
  { label: "Contact", to: "/contact" },
  { label: "Community", to: "/community" },
  { label: "Services", to: "/services" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-full fixed bg-white z-30 px-5 md:px-10 lg:px-15 shadow-lg ">
      <div className="max-w-8xl flex justify-between items-center mx-auto py-1 md:py-2 lg:py-3 ">
        {/* logo */}
        <Link
          to={"/"}
          className="font-bold md:text-3xl lg:text-4xl text-2xl text-blue-600"
        >
          Codeofy
        </Link>

        {/* larger menu list */}
        <div className="hidden lg:flex w-full max-w-3xl justify-between px-4 font-semibold text-lg">
          {navLinks.map((menu) => (
            <NavLink
              key={menu.to}
              to={menu.to}
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-blue-500"
              }
            >
              {menu.label}
            </NavLink>
          ))}
        </div>

        {/* Right div */}
        <div className="hidden lg:flex ">
          {/* Get Started */}
          <Button content="Get Started" />
        </div>

        {/* hamMenu */}
        <div
          className="lg:hidden text-5xl cursor-pointer transition-all duration-300 ease-in-out"
          onClick={toggleMenu}
        >
          {!isOpen ? (
            <GiHamburgerMenu className="" />
          ) : (
            <ImCross className="" />
          )}
        </div>
        {/* Mobile menu list  */}
        <div
          className={`mx-auto lg:hidden absolute md:top-17 top-15 right-0 w-full backdrop-blur-xl bg-black/40 flex flex-col items-center gap-y-5 py-5 px-5 transform transition-transform duration-700 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} `}
        >
          {navLinks.map((menu) => (
            <NavLink
              key={menu.to}
              onClick={() => setIsOpen(false)}
              to={menu.to}
              className={({ isActive }) =>
                ` bg-white/30 rounded w-full py-2 text-center font-semibold hover:text-blue-600 ${isActive ? "text-blue-600 " : " "}`
              }
            >
              {menu.label}
            </NavLink>
          ))}
          <Button content="Get Started" onClick={() => setIsOpen(false)} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
