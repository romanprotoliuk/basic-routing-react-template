import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Portfolio!</h1>
      <p>
        Hi, I'm [Your Name], a [Your Profession] with a passion for [Your
        Interests]. I specialize in [Your Skills] and love creating [Your
        Projects].
      </p>
      <Link to="/projects">View My Projects</Link>
    </div>
  );
};

export default Home;
