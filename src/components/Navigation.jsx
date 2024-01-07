import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav style={{ textAlign: "center" }}>
      <div
        style={{
          listStyleType: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={"/"} style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to={"/about"} style={{ margin: "0 10px" }}>
          About
        </Link>
        <Link to={"/projects"} style={{ margin: "0 10px" }}>
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
