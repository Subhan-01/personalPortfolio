import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faDiscord,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  {
    name: "LinkedIn",
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/subhan-imran-833870285/",
  },
  {
    name: "Facebook",
    icon: faFacebookF,
    link: "https://www.facebook.com/subhanimran01",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    link: "https://www.instagram.com/muhammad_subhan_01/",
  },
  {
    name: "Discord",
    icon: faDiscord,
    link: "https://discord.com/invite/jcy6fnC7",
  },
  {
    name: "X",
    icon: faXTwitter,
    link: "https://x.com/subhanimaran_01",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      {socialIcons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.name}
          className="
            w-10 h-10
            flex items-center justify-center
            rounded-xl
            bg-white
            text-violet-600
            border border-slate-200
            shadow-sm
            transition-all duration-300
            hover:bg-violet-600
            hover:text-white
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          <FontAwesomeIcon icon={item.icon} className="text-base" />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;