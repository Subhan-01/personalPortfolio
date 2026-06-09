import logo from "../../../assets/logo2.png";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Experience", url: "experience" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Services", url: "services" },
  { id: 6, name: "Contact", url: "contact" },
];

const copyrightYear = new Date().getFullYear();

const Footer = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-20">

      <div className="max-w-6xl mx-auto px-6">

        {/* Top Section */}
        <div className="border-b border-slate-700 pb-10 flex flex-col lg:flex-row justify-between items-center gap-10">

          {/* Logo + Description */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start">
              <img
                src={logo}
                alt="logo"
                className="h-10 rounded-xl"
              />
              <h2 className="text-2xl font-bold ml-3">
                Subhan Imran
              </h2>
            </div>

            <p className="mt-4 text-slate-400 max-w-md">
              Web Developer, Programming Mentor, and Freelancer
              building modern digital solutions and helping students
              grow in software development.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={(e) => handleScroll(e, item.url)}
                className="cursor-pointer text-slate-300 hover:text-violet-400 transition"
              >
                {item.name}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-400 text-sm">
            © {copyrightYear} Subhan Imran. All Rights Reserved.
          </p>

          <p className="text-violet-400 text-sm font-medium">
            Available for Freelance Projects & Mentorship
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;