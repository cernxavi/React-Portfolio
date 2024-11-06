import React from "react";
import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      image: "path/to/image1.jpg",
      appLink: "https://project1-live.com",
      repoLink: "https://github.com/yourusername/project1",
    },
    // Add more projects here
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            appLink={project.appLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
