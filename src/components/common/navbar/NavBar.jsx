import { useEffect, useState } from "react";
import logo from "../../../assets/logo2.png";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Experience", url: "experience" },
  { id: 4, name: "Projects", url: "portfolio" },
  { id: 5, name: "Contact", url: "contact" },
];

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        position > 20
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-slate-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="navbar min-h-[75px]">

          {/* Mobile Menu */}
          <div className="navbar-start lg:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[100] w-64 rounded-2xl bg-white shadow-xl p-3"
              >
                {navItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.url}
                      smooth={true}
                      duration={800}
                      offset={-80}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Logo */}
          <div className="navbar-start lg:flex-none">
            <Link
              to="introduction"
              smooth={true}
              duration={800}
              className="flex items-center cursor-pointer"
            >
              <img
                src={logo}
                alt="logo"
                className="h-10 w-10 rounded-full"
              />

              <div className="ml-3">
                <h2 className="text-xl font-bold text-slate-900">
                  Subhan Imran
                </h2>

                <p className="text-xs text-slate-500 hidden sm:block">
                  Web Developer
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex items-center gap-6 font-medium text-slate-700">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.url}
                    smooth={true}
                    duration={800}
                    spy={true}
                    offset={-80}
                    activeClass="text-violet-600"
                    className="cursor-pointer hover:text-violet-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="navbar-end">
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="btn bg-violet-600 hover:bg-violet-700 border-0 text-white rounded-xl px-6"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;