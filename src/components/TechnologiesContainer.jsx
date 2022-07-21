import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";

import { SiTypescript, SiNextdotjs } from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, experience: "3 anos de experiência" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, experience: "3 anos de experiência" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, experience: "2 anos de experiência" },
  { id: "typescript", name: "TypeScript", icon: <SiTypescript />, experience: "2 anos de experiência" },
  { id: "react", name: "React", icon: <DiReact />, experience: "1 ano de experiência" },
  { id: "next", name: "Next", icon: <SiNextdotjs />, experience: "1 ano de experiência" },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, experience: "Alguns meses" },
];

const TechnologiesContainer = () => {
  return (
    <section id="technologies">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map(({ id, icon, name, experience }) => (
          <div className="technology-card" id={id} key={id}>
            {icon}
            <div className="technology-info">
              <h3>{name}</h3>
              <p>{experience}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
