import person from "../../assets/images/personabout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import CV from "../../assets/resume/subhan.pdf";

const Profile = () => {
  return (
    <div
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">

        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
          <div className="max-w-106 h-117 overflow-hidden rounded-xl">
            <img
              className="h-[120%] object-cover"
              src={person}
              alt="profile"
            />
          </div>

          {/* Social media */}
          <div className="relative bottom-9 flex justify-center">
            <div className="px-6 max-w-66 py-3 bg-white rounded-md shadow-2xl">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-sm:w-full w-[33rem]">

          <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] max-md:text-center font-semibold mb-8">
            I am a Professional Web Developer
          </h2>

          <div className="text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600">
            <p>
              I build modern, responsive web applications using PHP,
              Angular, WordPress, and JavaScript. I focus on clean,
              functional, and user-friendly solutions.
            </p>

            <p className="mt-3">
              I have worked on e-commerce platforms, hospital portals,
              SEO portfolios, and dynamic web apps with strong focus
              on performance and usability.
            </p>
          </div>

          {/* Download Button */}
          <div className="mt-8 flex max-md:justify-center">
            <a
              className="btn xxs:btn-lg px-6 xxs:py-3 btn-primary text-xs sm:text-[16px]"
              href={CV}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;