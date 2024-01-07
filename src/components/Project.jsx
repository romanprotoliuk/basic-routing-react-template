import React from "react";
import { useParams } from "react-router-dom";

const Project = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {/* Add more project details here */}
    </div>
  );
};

export default Project;
