import React from "react";

const SkillLogo = ({ skill }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={`/assets/images/${skill.logo}`}
        alt={skill.name}
        className="w-16 h-16 object-contain"
      />
      <p className="mt-2 text-gray-700">{skill.name}</p>
    </div>
  );
};

export default SkillLogo;
