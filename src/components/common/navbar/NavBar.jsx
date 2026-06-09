import { useEffect, useState } from "react";
import logo from "../../../assets/logo2.png";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Experience", url: "experience" },
<<<<<<< HEAD
  { id: 4, name: "Projects", url: "portfolio" },
  { id: 5, name: "Contact", url: "contact" },
];

=======
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Process", url: "work-process" },
  { id: 6, name: "Services", url: "services" },
];

const handleMenuClick = () => {
  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }
};

const menu = navItems.map((item) => (
  <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
    <Link
      onClick={handleMenuClick}
      to={item.url.toLowerCase()}
      smooth={true}
      duration={1000}
      spy={true}
      offset={-140}
      activeStyle={{
        backgroundColor: "#9929fb",
        color: "white",
      }}
      className={`hover:text-picto-primary px-5 py-3 mx-1`}
    >
      {item.name}
    </Link>
  </li>
));

>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
<<<<<<< HEAD

    window.addEventListener("scroll", handleScroll);

=======
    window.addEventListener("scroll", handleScroll);
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
<<<<<<< HEAD
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
=======
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-white/30 backdrop-blur-md shadow-lg border-b border-white/20"
          : "bg-white border-white"
      } z-50 transition-all duration-1000`}
    >
      <div className="navbar flex justify-between mx-auto content">
        <div className="flex items-center justify-between">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-lg dropdown-content rounded-box z-1 mt-3 w-lvw p-2 shadow font-semibold flex-nowrap bg-white text-black`}
            >
              {menu}
            </ul>
          </div>

          <Link
            href="#introduction"
            to={`introduction`}
            smooth={true}
            duration={900}
            className="flex items-center border-0 lg:max-xxl:ps-5"
          >
            <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
            <p className="text-2xl sm:text-[32px] my-auto ms-[12px] font-semibold">
              Subhan
            </p>
          </Link>
        </div>

        <div className="lg:flex items-center">
          <ul className="hidden lg:flex menu menu-horizontal text-[16px] font-medium md:shrink-0">
            {menu}
          </ul>
          <p className="">
            <Link
              className="btn btn-sm xs:btn-md sm:btn-lg btn-primary"
              href="#contact"
              to={`contact`}
              smooth={true}
              duration={900}
            >
              Contact
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
