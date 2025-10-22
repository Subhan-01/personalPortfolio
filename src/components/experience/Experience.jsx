import React from "react";

const Experience = () => {
  const education = [
    {
      year: "2023 – 2025",
      title: "Higher Diploma in Software Engineering",
      place: "Aptech Garden",
      desc: "Learning full-stack development including ASP.NET Core, SQL, PHP, and Laravel with practical projects.",
    },
    {
      year: "2022 – 2024",
      title: "Intermediate",
      place: "Islamia Science College",
      desc: "Focused on science and mathematics with an interest in computer programming and software.",
    },
  ];

  const experience = [
    {
      year: "July 2024 – Present",
      title: "Faculty (Programming & Web Development)",
      place: "Aptech Site",
      desc: "Teaching ASP.NET Core, SQL, and guiding students in real-world web projects and problem-solving.",
    },
    {
      year: "Apr 2024 – Aug 2024",
      title: "Junior Web Developer",
      place: "Mitsol Tech",
      desc: "Worked on responsive UIs, backend APIs, and client projects using Angular, PHP, and WordPress.",
    },
    {
      year: "2024 – 2025",
      title: "Freelance Sales Agent",
      place: "Remote",
      desc: "Provided tailored sales and lead generation strategies, helping businesses grow through digital communication.",
    },
  ];



  return (
    
    <section id="experience" className="min-h-screen  text-gray-800 px-6 md:px-20 py-18 ">
      <h2 className="section-title text-3xl font-bold text-center text-gray-800 mb-16">
        Experience & Education 
      </h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold  mb-8 uppercase" >
            Experience
          </h3>
          <div className="relative border-l-2 border-[#9929fb] pl-6 space-y-8" >
            {experience.map((item, index) => (
              <div
                key={index}
                className="relative bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md hover:cursor-pointer hover:-translate-y-1 transition-all duration-300" 
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[32.5px] top-6 w-4 h-4 rounded-full border-2 border-white" style={{ backgroundColor: "#9929fb"  }}></span>

                <p className="text-sm text-emerald-600 font-semibold" style={{ color: "#9929fb" }}>{item.year}</p>
                <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                <p className="text-sm italic text-gray-500">{item.place}</p>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          {/* Education */}
          <h3 className="text-2xl font-semibold  mb-8 uppercase">
            Education
          </h3>
          <div className="relative border-l-2  pl-6 space-y-8 mb-12 border-[#9929fb]" >
            {education.map((item, index) => (
              <div
                key={index}
                className="relative bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md hover:cursor-pointer hover:-translate-y-1 transition-all duration-300" 
              >
                <span className="absolute -left-[32.5px] top-6 w-4 h-4  rounded-full border-2 border-white" style={{ backgroundColor: "#9929fb"  }}></span>

                <p className="text-sm text-emerald-600 font-semibold" style={{ color: "#9929fb" }} >{item.year}</p>
                <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                <p className="text-sm italic text-gray-500">{item.place}</p>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Experience;
