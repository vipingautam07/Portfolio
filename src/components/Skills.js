import meter1 from "../assets/img/c++.png";
import meter2 from "../assets/img/react.png";
import meter3 from "../assets/img/js.png";
import meter4 from "../assets/img/nodejs.png";
import meter5 from "../assets/img/merge.png";
import meter6 from "../assets/img/wordpress.png";
import meter7 from "../assets/img/shopify.png";
import meter8 from "../assets/img/python.png";
import meter9 from "../assets/img/sql.png";
import meter10 from "../assets/img/mongo.jpg";
import meter11 from "../assets/img/firebase.png";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Skills in the field of software engineering are the specific abilities, knowledge, and proficiencies that enable professionals to design, develop, test, and maintain software systems effectively. <br></br> Data Structures & Algorithms, OOPs, Operating Systems, Database Management System</p>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={1500} transitionDuration={1000} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h3>C++</h3>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>React.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>Node.js</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>Git & Github</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>Wordpress</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>Shopify</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>Sql</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>MongoDB</h5>
                            </div><div className="item">
                                <img src={meter11} alt="Image" />
                                <h5>Firebase</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
