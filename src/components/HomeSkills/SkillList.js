import React from "react";

const SkillList = ({ list }) => {
  return (
    <div className="w-full">
      <ul className="flex flex-col flex-wrap max-h-20">
        {list.map((skill) => (
          <li
            key={skill}
            className="list-circle text-gray-700 mr-2 mb-2 font-semibold"
          >
            <span className="text-gray-700">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;
