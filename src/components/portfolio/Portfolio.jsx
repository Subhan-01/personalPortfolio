import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/apple.png";
import card2 from "../../assets/images/portfolio-images/food.png";
import card3 from "../../assets/images/portfolio-images/scroodflood.png";
import card4 from "../../assets/images/portfolio-images/portfolio.png";
import card5 from "../../assets/images/portfolio-images/blog.png";
import card6 from "../../assets/images/portfolio-images/softwarehouse.png";

const projectData = [
   {
    id: 1,
    image: card5,
    category: "Fullstack Development",
    title: "Blogging Platform",
    description:"Developed a modern blogging website with clean layouts, easy post management, and a seamless reading experience for users.",
    link: "https://trendzylife.com/",
   },
   {
    id: 2,
    image: card6,
    category: "Frontend Development",
    title: "Synthetic Invenstions",
    description:"Built an animated website showcasing portfolio, services, and projects.",
    link: "https://subhan-01.github.io/syntheticinventions/",
  },
  {
    id: 3,
    image: card3,
    category: "Fullstack Development",
    title: "Real-Time Score Website",
    description:
      "A dynamic sports website with live scores, built with frontend design and backend integration via APIs for real-time updates.",
    link: "https://www.scoreflood.com/",
  },
  {
    
    id: 4,
    image: card1,
    category: "Frontend Development",
    title: "Apple Website Clone",
    description:
      "A pixel-perfect clone of Apple's official website, focusing on elegant animations, responsive layouts, and premium user experience.",
    link: "https://subhan-01.github.io/Apple_copy/",
  },
  {
    id: 5,
    image: card2,
    category: "Frontend Development",
    title: "Food Recipe Website",
    description:
      "A visually appealing and responsive food website featuring recipes, menus, and interactive UI elements.",
    link: "https://subhan-01.github.io/Foodies/",
  },

  {
    id: 6,
    image: card4,
    category: "Frontend Development",
    title: "Portfolio Website",
    description:
      "A sleek and modern personal portfolio website showcasing projects, skills, and achievements with smooth animations.",
    link: "https://subhan-01.github.io/Personal_portfolio/",
  },


];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="content mt-20 md:mt-25 xl:mt-32 mb-20 md:mb-32 px-4 sm:px-8"
    >
      <div className="text-center mb-12">
        <p className="section-title">Portfolio</p>
        <p className="font-normal text-[18px] sm:text-[16px] pt-4 text-gray-400 max-w-2xl mx-auto">
          Showcasing my recent software engineering projects — from frontend designs to backend solutions, blending creativity, logic, and technology.
        </p>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-8 place-items-center">
        {projectData.map((data, index) => (
          <a
            key={index}
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-[#9929fb]/40 hover:-translate-y-2 transition-all duration-300 max-w-[380px] backdrop-blur-sm block"
          >
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-56  group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-5">
              <span className="inline-block px-3 py-1 text-[12px] font-medium bg-[#9929fb]/10 text-[#9929fb] rounded-full mb-3">
                {data.category}
              </span>
              <h3 className="text-[20px] font-semibold  mb-2 group-hover:text-[#9929fb] transition-colors duration-300">
                {data.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {data.description}
              </p>
              <span className="text-[#9929fb] font-medium group-hover:underline">
                View Project →
              </span>
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-14">
        <a
          href="https://github.com/Subhan-01/"
          className="btn bg-gradient-to-r btn-primary  py-3 px-8 rounded-full text-[16px] font-semibold shadow-lg hover:shadow-[#9929fb]/40 hover:scale-105 transition-all duration-300"
        >
          View More On GitHub :)
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
