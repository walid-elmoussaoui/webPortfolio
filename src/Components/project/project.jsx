import React from "react";
import "./project.css";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind CSS.",
    image: "/src/assets/myP.png",
    link: "https://myportfolio.com",
    tech: ["React", "TailwindCSS", "Framer Motion"],
  },
  

];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div className="project-card" key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className="project-img"
            />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;


