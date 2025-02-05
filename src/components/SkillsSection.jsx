import React, { useState } from "react";
import SkillLogo from "./SkillLogo";

const skillsData = {
  all: [
    { name: "React", logo: "react-logo.png" },
    { name: "Node.js", logo: "nodejs-logo.png" },
    { name: "MongoDB", logo: "mongodb-logo.png" },
    { name: "Vue.js", logo: "vue-logo.png" },
    { name: "Express", logo: "express-logo.png" },
    { name: "PostgreSQL", logo: "postgresql-logo.png" },
    { name: "AWS", logo: "aws-logo.png" },
    { name: "Azure", logo: "azure-logo.png" },
    { name: "Firebase", logo: "firebase-logo.png" },
    { name: "MySQL", logo: "mysql-logo.png" },
    { name: "Java", logo: "java-logo.png" },
    { name: "Python", logo: "python-logo.png" },
    { name: "JavaScript", logo: "javascript-logo.png" },
    { name: "TypeScript", logo: "typescript-logo.png" },
  ],
  programmingLanguages: [
    { name: "JavaScript", logo: "javascript-logo.png" },
    { name: "TypeScript", logo: "typescript-logo.png" },
    { name: "Java", logo: "java-logo.png" },
    { name: "Python", logo: "python-logo.png" },
  ],
  technologies: [
    { name: "React", logo: "react-logo.png" },
    { name: "Node.js", logo: "nodejs-logo.png" },
    { name: "Vue.js", logo: "vue-logo.png" },
    { name: "Express", logo: "express-logo.png" },
  ],
  cloudAndDatabases: [
    { name: "AWS", logo: "aws-logo.png" },
    { name: "Azure", logo: "azure-logo.png" },
    { name: "Firebase", logo: "firebase-logo.png" },
    { name: "MySQL", logo: "mysql-logo.png" },
    { name: "PostgreSQL", logo: "postgresql-logo.png" },
  ],
};

const SkillsSection = () => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Skills & Specializations</h1>
      <div className="flex space-x-4 mb-8">
        <button
          className={`py-2 px-4 rounded ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`py-2 px-4 rounded ${
            filter === "programmingLanguages"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setFilter("programmingLanguages")}
        >
          Programming Languages
        </button>
        <button
          className={`py-2 px-4 rounded ${
            filter === "technologies"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setFilter("technologies")}
        >
          Technologies
        </button>
        <button
          className={`py-2 px-4 rounded ${
            filter === "cloudAndDatabases"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => setFilter("cloudAndDatabases")}
        >
          Cloud & Databases
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skillsData[filter].map((skill) => (
          <SkillLogo key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
