import Roles from "./Roles";
import { Link } from "react-scroll";
const rolesData = [
  {
    id: 1,
    title: "Software Development",
    description:
      "I create efficient, scalable, and user-focused applications that solve real-world problems and deliver smooth digital experiences.",
  },
  {
    id: 2,
    title: "Teaching & Mentorship",
    description:
      "As a Faculty, I guide students in programming, databases, and web development, helping them turn logic into practical projects.",
  },
  {
    id: 3,
    title: "Freelance & Marketing",
    description:
      "I’ve worked remotely on open-source platforms, managing digital communication, building community connections, and supporting projects through strategic collaboration and engagement",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I’m a passionate software engineer and educator, focused on building real-world web solutions and helping others grow in the tech field.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            I specialize in modern web development, teaching programming, and freelance digital services that combine creativity with technology.
          </p>
        </div>
        <Link
          to="contact"
          smooth={true}
          duration={900}
          offset={-100}
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5 cursor-pointer"
        >
          Say Hello!
        </Link>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
