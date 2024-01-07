import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Project from "./components/Project";
import Navigation from "./components/Navigation";

const projects = [
  {
    id: "0",
    title: "Project 1",
    description: "This is the first project",
    // Add more properties as needed
  },
  {
    id: "1",
    title: "Project 2",
    description: "This is the second project",
    // Add more properties as needed
  },
  // Add more projects as needed
];

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects projects={projects} />} />
        <Route path="/project/:id" element={<Project projects={projects} />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

export default App;
