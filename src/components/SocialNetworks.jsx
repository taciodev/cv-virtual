import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const socialNetworks = [
  { name: "linkedin", icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/taciano-da-hora/" },
  { name: "github", icon: <FaGithub />, href: "https://github.com/taciodev"}, 
];

const SocialNetworks = () => {
  return (
    <section id="social-networks">
      {socialNetworks.map(({ name,icon, href }) => (
        <a href={href} target="_blank" className="social-btn" id={name} key={name}>
          {icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
