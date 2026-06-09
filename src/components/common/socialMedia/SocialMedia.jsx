import {
<<<<<<< HEAD
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
  faDiscord,
=======
  faDiscord,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
<<<<<<< HEAD
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
    link: "https://x.com/subhanimaran_01?t=K--ZgMdLBl_d-ni7c-1B3A&s=09",
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
          <FontAwesomeIcon
            icon={item.icon}
            className="text-base"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
=======
  { icon: faLinkedin, link: "https://www.linkedin.com/in/subhan-imran-833870285/" },
  { icon: faFacebookF, link: "https://www.facebook.com/subhanimran01" },
  { icon: faInstagram, link: "https://www.instagram.com/muhammad_subhan_01/" },
  { icon: faDiscord, link: "https://discord.com/invite/jcy6fnC7" },
  { icon: faTwitter, link: "https://x.com/subhanimaran_01?t=K--ZgMdLBl_d-ni7c-1B3A&s=09" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
>>>>>>> fd81f99bfa80f90b87d4060999c0270ca1b82814
