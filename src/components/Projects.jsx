import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {projects.map((project, index) => (
          <Link key={index} to={`/project/${index}`}>
            <div
              style={{
                margin: "20px",
                padding: "10px",
                border: "1px solid black",
              }}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              {/* Add more styling and additional information here */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
