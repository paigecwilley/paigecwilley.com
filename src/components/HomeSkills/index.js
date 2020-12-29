import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import SkillList from "./SkillList";

const HomeSkills = () => {
  const [skillSet, setSkillSet] = useState("general");

  const generalSkills = [
    "Javascript/ES6",
    "HTML5",
    "React",
    "Typescript",
    "CSS3",
    "Testing",
    "REST API",
  ];
  const specificSkills = [
    "NextJS",
    "GatsbyJS",
    "Apollo Graphql",
    "Shopify",
    "Contentful",
    "Material UI",
    "Styled-Components",
    "React Testing Library",
    "...always learning more",
  ];
  return (
    <div className="my-20">
      <div className="mb-3 text-gray-700">
        <h2 className="font-sans font-semibold mb-1 text-gray-700 text-3xl">
          Skills
        </h2>
        <h4 className="text-lg">
          I love learning new things. I plan for this list to grow <i>much</i>{" "}
          longer.
        </h4>
      </div>
      <div className="flex">
        <div className="mr-5  self-start text-left bg-gray-200 flex flex-col rounded-lg flex-2 p-9">
          <button
            className={`text-left p-3 mb-4 bg-white border-2 border-gray-500 rounded-md" +
              ${
                skillSet === "general" ? "border-gray-600" : "border-gray-500"
              }`}
            onClick={() => setSkillSet("general")}
          >
            General
          </button>
          <button
            className={
              "text-left p-3 mb-4 bg-white border-2 border-green-200 rounded-md" +
              (skillSet !== "specific" ? "border-blue-200" : "border-green-200")
            }
            onClick={() => setSkillSet("specific")}
          >
            A litte more specific
          </button>
        </div>
        <div className="py-12 px-12 bg-gray-50 rounded-lg flex-1 flex items-center shadow-sm">
          {skillSet === "general" ? (
            <SkillList list={generalSkills} />
          ) : (
            <SkillList list={specificSkills} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeSkills;
