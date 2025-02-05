import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300"
    >
      <img
        src={`/assets/images/${project.image}`}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="flex space-x-4 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
