import { LazyImage } from "./LazyImage";
import meter1 from "../assets/img/icon/c++.png";
import meter2 from "../assets/img/icon/react.png";
import meter3 from "../assets/img/icon/js.png";
import meter4 from "../assets/img/icon/node.png";
import meter5 from "../assets/img/icon/github.png";
import meter7 from "../assets/img/icon/shopify.png";
import meter8 from "../assets/img/icon/Tailwind.png";
import meter9 from "../assets/img/icon/sql.png";
import meter10 from "../assets/img/icon/MongoDB.png";
import meter11 from "../assets/img/icon/docker.png";
import meter12 from "../assets/img/icon/Kubernetes.png";
import meter13 from "../assets/img/icon/VS.png";
import meter14 from "../assets/img/icon/java.png";
import meter15 from "../assets/img/icon/Postman.png";




export const Skills = () => {
  const skills = [
    { name: "C++", icon: meter1 },
    { name: "React.js", icon: meter2 },
    { name: "JavaScript", icon: meter3 },
    { name: "Node.js", icon: meter4 },
    { name: "Git & GitHub", icon: meter5 },
    { name: "Shopify", icon: meter7 },
    { name: "Tailwind CSS", icon: meter8 },
    { name: "SQL", icon: meter9 },
    { name: "MongoDB", icon: meter10 },
    { name: "Docker", icon: meter11 },
    { name: "Kubernetes", icon: meter12 },
    { name: "VS Code", icon: meter13 },
    { name: "Java", icon: meter14 },
    { name: "Postman", icon: meter15 },
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Skills in the field of software engineering are the specific abilities, knowledge, and proficiencies that enable professionals to design, develop, test, and maintain software systems effectively. <br></br> Data Structures & Algorithms, OOPs, Operating Systems, Database Management System</p>
                        <div className="skill-grid">
                          {skills.map((skill) => (
                            <div className="skill-card" key={skill.name}>
                              <div className="skill-card__glow" />
                              <div className="skill-card__content">
                                <div className="skill-card__icon">
                                  {skill.icon ? (
                                    <LazyImage 
                                      src={skill.icon} 
                                      alt={skill.name}
                                      className="skill-card__lazy-image"
                                    />
                                  ) : (
                                    <span className="skill-card__icon-text">{skill.textIcon}</span>
                                  )}
                                </div>
                                <h5>{skill.name}</h5>
                              </div>
                            </div>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
