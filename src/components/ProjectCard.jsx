import { Link } from "react-router-dom";

function ProjectCard({ project, number }) {

  return (

    <article className="project-card">

      <Link
        to={`/project/${project.id}`}
        className="project-image-link"
      >

        <img
          src={project.mainImage}
          alt={project.title}
          className="project-image"
        />

      </Link>


      <div className="project-info">

        <span className="project-number">
          {String(number).padStart(2, "0")}
        </span>

        <p className="project-category">
          {project.category}
        </p>

        <h3>
          {project.title}
        </h3>

        <p className="project-description">
          {project.shortDescription}
        </p>


        <div className="tech-list">

          {project.technologies.map((technology) => (

            <span key={technology}>
              {technology}
            </span>

          ))}

        </div>


        <Link
          to={`/project/${project.id}`}
          className="view-project"
        >
          View Project →
        </Link>

      </div>

    </article>

  );
}

export default ProjectCard;