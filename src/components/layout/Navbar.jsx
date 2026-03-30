import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logos/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink =
    "relative text-sm font-semibold uppercase transition duration-300";

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Brand */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src={logo}
              alt="Carrier Dreams Logo"
              className="h-10 sm:h-11 w-auto"
            />

            <span className="text-base sm:text-lg lg:text-xl font-bold whitespace-nowrap">
              <span className="text-yellow-500">Carrier</span>
              <span className="text-black">Dreams</span>
            </span>
          </Link>

          {/* CENTER: Navigation (only large screens) */}
          <nav className="hidden lg:flex items-center gap-6">
            {[
              { name: "Home", path: "/", end: true },
              { name: "Study Abroad", path: "/study-abroad" },
              { name: "Study in India", path: "/study-in-india" },

              { name: "About Us", path: "/about" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `
        relative
        text-sm
        font-semibold
        uppercase
        transition-colors
        duration-300
        ${isActive ? "text-yellow-500" : "text-gray-700 hover:text-yellow-500"}
        `
                }
              >
                {({ isActive }) => (
                  <span className="relative group">
                    {item.name}

                    {/* Animated Underline */}
                    <span
                      className={`
              absolute
              left-0
              -bottom-1
              h-[2px]
              bg-yellow-500
              transition-all
              duration-300
              ${isActive ? "w-full" : "w-0 group-hover:w-full"}
            `}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </nav>
          {/* RIGHT: CTA (only xl screens) */}
          <div className="hidden xl:flex">
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  const el = document.getElementById("consultation");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="
                bg-yellow-500
                text-white
                px-5
                py-2
                rounded-lg
                text-xs
                font-semibold
                uppercase
                shadow-md
                transition
                duration-300
                hover:bg-yellow-600
                hover:shadow-lg
              "
            >
              Book Free Consultation
            </Link>
          </div>

          {/* TABLET + MOBILE: Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Mobile / Tablet Dropdown */}
        {menuOpen && (
          <div className="lg:hidden flex flex-col gap-4 py-4 border-t text-sm font-semibold uppercase">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/study-abroad">Study Abroad</NavLink>
            <NavLink to="/study-in-india">Study in India</NavLink>
            {/* <NavLink to="/jobs">Jobs</NavLink> */}
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  const el = document.getElementById("consultation");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              Book Free Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
