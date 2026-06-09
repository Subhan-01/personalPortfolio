import { useEffect, useState } from "react";
<<<<<<< HEAD
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { animateScroll } from "react-scroll";

const options = {
  duration: 600,
  smooth: true,
};

const scrollToTop = () => {
  animateScroll.scrollToTop(options);
};

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed
        bottom-6
        right-6
        z-50
        w-12
        h-12
        md:w-14
        md:h-14
        rounded-2xl
        bg-violet-600
        hover:bg-violet-700
        text-white
        shadow-lg
        shadow-violet-300/40
        flex
        items-center
        justify-center
        transition-all
        duration-300
        hover:-translate-y-1
        ${
          showButton
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }
      `}
    >
      <FontAwesomeIcon icon={faArrowUp} size="lg" />
    </button>
  );
};

export default ScrollToTop;
=======
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const scrollToTop = () => {
  animateScroll.scrollToTop(options); /* To Top */
  //   animateScroll.scrollToBottom(options); /* To Bottom */
};

const options = {
  duration: 500,
  smooth: true,
};

const ScrollToTop = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex justify-end relative  sm:me-10 z-10 transition-all">
      <a
        onClick={scrollToTop}
        className={`fixed bottom-10 me-5 w-10 h-10 sm:w-12.5 sm:h-12.5 lg:w-15 lg:h-15 flex justify-center items-center rounded-full transition delay-150 duration-500 ease-in-out hover:scale-120 hover:cursor-pointer bg-picto-primary hover:bg-picto-primary-dark text-white ${
          position < 200 && "scale-0"
        }`}
      >
        <FontAwesomeIcon icon={faAngleUp} size="2xl" />
      </a>
    </div>
  );
};

export default ScrollToTop;
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
