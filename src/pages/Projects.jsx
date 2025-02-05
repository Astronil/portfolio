import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with React and Node.js.",
    image: "project1.jpg",
    techStack: ["React", "Node.js", "MongoDB"],
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Real-time Chat App",
    description: "A real-time chat application using WebSocket and Vue.js.",
    image: "project2.jpg",
    techStack: ["Vue.js", "Express", "PostgreSQL"],
    link: "https://example.com/project2",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
