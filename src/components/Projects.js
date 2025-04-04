import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Expense-tracker",
      description: "Backend & Frontend",
      imgUrl: projImg1,
      projectLink:"https://expense-tracker-vipin.vercel.app/",
    },
    {
      title: "Binkeyit e-commerce",
      description: "Backend & Frontend",
      imgUrl: projImg2,
      projectLink:"https://binkeyit-full-stack-ydrn.vercel.app/",
    },
    {
      title: "Fitness-webapp",
      description: "Frontend & backend",
      imgUrl: projImg3,
      projectLink:"https://vip-fitness-app.netlify.app/",
    },
  ];
  const projects2 = [
    {
      title: "Solar design expert",
      description: "wordpress development",
      imgUrl: projImg4,
      projectLink:"https://solardesignexpert.com/",
    },
    {
      title: "Herbplay",
      description: "shopify development",
      imgUrl: projImg5,
      projectLink:"https://herbplay.in",
    },
    {
      title: "Nike website",
      description: "Design & development",
      imgUrl: projImg6,
      projectLink:"https://nike-tawny.vercel.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects play a crucial role in a software engineer's career, and they have several significant benefits:
                  1. Skill Development
                  2. Problem-Solving Abilities
                  3. Portfolio Building
                  4. Learning Experience
                  5. Collaboration and Teamwork
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More Projects Coming Soon ...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
