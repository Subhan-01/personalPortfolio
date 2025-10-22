import {
  faDiscord,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
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
