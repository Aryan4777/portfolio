import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard";

import projects from "../data/projects";


function Home() {

  return (

    <>

      {/* HERO */}

      <section className="hero">

        <div className="container hero-content">

          <p className="eyebrow">
             DATA SCIENTIST • DATA ANALYST • AI|ML ENGINEER 
          </p>

          <h1>
            Hi, I'm <span>ARYAN PRAVIN GAWAND.</span>
          </h1>

          <p className="hero-description">

            I build data-driven solutions that transform complex 
            data into actionable insights, helping businesses 
            make smarter, data-informed decisions.

          </p>

          <Link
            to="/#projects"
            className="primary-button"
          >
            Explore My Projects
          </Link>

        </div>

      </section>


      {/* PROJECTS */}

      <section
        id="projects"
        className="projects-section"
      >

        <div className="container">

          <div className="section-heading">

            <p className="eyebrow">
              SELECTED WORK
            </p>

            <h2>
              Projects
            </h2>

          </div>


          <div className="projects-grid">

            {projects.map((project, index) => (

              <ProjectCard
                key={project.id}
                project={project}
                number={index + 1}
              />

            ))}

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section
        id="about"
        className="about-section"
      >

        <div className="container">

          <div className="section-heading">

            <p className="eyebrow">
              ABOUT ME
            </p>

            <h2>
              A little about me
            </h2>

          </div>


          <div className="about-grid">

            <div className="about-text">

              <p>
                I'm Aryan, a data analyst focused on transforming data into
                meaningful insights and supporting data-driven decision-making. 
                I work with Python, SQL, Pandas, Excel, and Power BI to clean, analyze,
                visualize, and communicate data effectively. With a foundation in AI, 
                machine learning, and data science, I also build intelligent solutions 
                that solve real-world problems.

              </p>

              <p>

                I enjoy working on real-world projects involving data cleaning, exploratory
                analysis, visualization, and machine learning. 
                My technical background also includes NumPy, Matplotlib, Seaborn, Scikit-learn, 
                Machine Learning Algorithms, MySQL, and FastAPI. Through hands-on projects, 
                I aim to combine analytical thinking with technical problem-solving to 
                build practical solutions and continuously expand my skills.

              </p>

            </div>


            <div className="contact-info">

              <div>
                <span>Email</span>

                <a href="mailto:YOUR_EMAIL@example.com">
                  aryangawand756@gmail.com
                </a>

              </div>


              <div>
                <span>Phone</span>

                <a href="tel:+910000000000">
                  +91 72081 41539
                </a>

              </div>


              <div>
                <span>GitHub</span>

                <a
                  href="https://github.com/Aryan4777"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub Profile →
                </a>

              </div>


              <div>
                <span>LinkedIn</span>

                <a
                  href="https://www.linkedin.com/in/aryan-gawand-1076932bb/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn Profile →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </>

  );
}

export default Home;