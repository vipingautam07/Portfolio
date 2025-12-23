import { useState, useEffect, useRef, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { LoadingSpinner } from "./LoadingSpinner";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [displayedProjects, setDisplayedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loadMoreRef = useRef(null);
  const currentIndexRef = useRef(0);

  const allProjects = [
    {
      title: "Kinnect AI (SAAS Platform)",
      description: " Gemini API, Node.js, Express, MongoDB, React",
      imgUrl: projImg9,
      projectLink:"https://kinnect-ai.vercel.app/",
    },
    {
      title: "Binkeyit e-commerce",
      description: "Node.js, Express, MongoDB, React, Redux, Auth0, Stripe",
      imgUrl: projImg2,
      projectLink:"https://binkeyit-full-stack-ydrn.vercel.app/",
    },
    {
      title: "Quiz Box",
      description: "React, Node.js, SocketIo",
      imgUrl: projImg7,
      projectLink:"https://quizbox0.vercel.app/",
    },
    {
      title: "Expense-tracker",
      description: "Node.js, Express, MongoDB, React, Chart.js",
      imgUrl: projImg1,
      projectLink:"https://expense-tracker-vipin.vercel.app/",
    },
    {
      title: "Fitness-webapp",
      description: "Frontend & backend",
      imgUrl: projImg3,
      projectLink:"https://vip-fitness-app.netlify.app/",
    },
    {
      title: "Book Finder",
      description: "React, openlibrary api",
      imgUrl: projImg8,
      projectLink:"https://book-finder-task-five.vercel.app/",
    },
    {
      title: "Solar design expert",
      description: "website development",
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

  const ITEMS_PER_LOAD = 3;

  useEffect(() => {
    // Initial load
    const initialProjects = allProjects.slice(0, ITEMS_PER_LOAD);
    setDisplayedProjects(initialProjects);
    currentIndexRef.current = ITEMS_PER_LOAD;
    setHasMore(allProjects.length > ITEMS_PER_LOAD);
  }, []);

  const loadMoreProjects = useCallback(() => {
    if (isLoading || !hasMore) return;
    
    setIsLoading(true);
    
    // Simulate loading delay for smooth animation
    setTimeout(() => {
      const nextIndex = currentIndexRef.current;
      const nextProjects = allProjects.slice(nextIndex, nextIndex + ITEMS_PER_LOAD);
      
      if (nextProjects.length > 0) {
        setDisplayedProjects((prev) => {
          // Check for duplicates
          const existingTitles = new Set(prev.map(p => p.title));
          const newProjects = nextProjects.filter(p => !existingTitles.has(p.title));
          return [...prev, ...newProjects];
        });
        currentIndexRef.current = nextIndex + ITEMS_PER_LOAD;
        setHasMore(currentIndexRef.current < allProjects.length);
      } else {
        setHasMore(false);
      }
      setIsLoading(false);
    }, 600);
  }, [isLoading, hasMore]);

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMoreProjects();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '100px',
      }
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasMore, isLoading, loadMoreProjects]);

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects play a crucial role in a software engineer's career, and they have several significant benefits:<br></br>
                  <span> 1. Skill Development </span>
                  <span> 2. Problem-Solving Abilities </span>
                  <span> 3. Portfolio Building </span>
                  <span> 4. Learning Experience </span>
                  <span> 5. Collaboration and Teamwork </span>
                </p>
                <div className="project-grid">
                  {displayedProjects.map((project, index) => (
                    <ProjectCard
                      key={`${project.title}-${project.projectLink || index}`}
                      {...project}
                    />
                  ))}
                </div>
                {isLoading && (
                  <div className="project-loading-container">
                    <LoadingSpinner size="medium" />
                  </div>
                )}
                {hasMore && !isLoading && (
                  <div ref={loadMoreRef} className="project-load-more-trigger"></div>
                )}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img 
        className="background-image-right lazy-load-bg" 
        src={colorSharp2} 
        alt="Background"
        loading="lazy"
      />
    </section>
  )
}
