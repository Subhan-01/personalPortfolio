import { useEffect, useState } from "react";
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