import { Link, useParams } from "react-router-dom";

import projects from "../data/projects";


function ProjectDetails() {

  const { id } = useParams();

  const project = projects.find(
    (item) => item.id === id
  );


  if (!project) {

    return (

      <main className="not-found">

        <div className="container">

          <h1>
            Project not found
          </h1>

          <Link to="/">
            ← Back Home
          </Link>

        </div>

      </main>

    );

  }


  return (

    <main className="project-details">

      <div className="container">


        <Link
          to="/"
          className="back-link"
        >
          ← Back to Projects
        </Link>


        {/* PROJECT HEADER */}

        <div className="project-header">

          <p className="eyebrow">
            {project.category}
          </p>

          <h1>
            {project.title}
          </h1>

          <p>
            {project.description}
          </p>

        </div>


        {/* MAIN IMAGE */}

        <img
          src={project.mainImage}
          alt={project.title}
          className="project-main-image"
        />


        {/* PROJECT CONTENT */}

        <div className="project-layout">


          <aside className="project-sidebar">

            <div>

              <span>
                Technologies
              </span>

              <div className="tech-list vertical">

                {project.technologies.map(
                  (technology) => (

                    <span key={technology}>
                      {technology}
                    </span>

                  )
                )}

              </div>

            </div>


            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-button"
            >
              View GitHub →
            </a>

          </aside>


          <article className="documentation">


            <section>

              <h2>
                Overview
              </h2>

              <p>
                {project.description}
              </p>

            </section>


            <section>

              <h2>
                Objective
              </h2>

              <p>
                {project.objective}
              </p>

            </section>


            <section>

              <h2>
                Process
              </h2>

              <ol className="process-list">

                {project.process.map(
                  (step, index) => (

                    <li key={index}>
                      {step}
                    </li>

                  )
                )}

              </ol>

            </section>


            {/* SCREENSHOTS */}

            {project.screenshots.length > 0 && (

              <section>

                <h2>
                  Screenshots
                </h2>


                <div className="screenshots">

                  {project.screenshots.map(
                    (item, index) => (

                      <figure key={index}>

                        <img
                          src={item.image}
                          alt={item.caption}
                        />

                        <figcaption>
                          {item.caption}
                        </figcaption>

                      </figure>

                    )
                  )}

                </div>

              </section>

            )}


            <section>

              <h2>
                Results
              </h2>

              <p>
                {project.results}
              </p>

            </section>


            <section>

              <h2>
                What I Learned
              </h2>

              <p>
                {project.learned}
              </p>

            </section>


            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              View Source Code on GitHub →
            </a>


          </article>

        </div>

      </div>

    </main>

  );

}

export default ProjectDetails;