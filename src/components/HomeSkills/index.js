import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import SkillList from "./SkillList";
import Button from "../Button";

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
      <div className="flex flex-col lg:flex-row">
        <div className="mb-4 lg:mb-0 lg:mr-5  lg:self-start text-left bg-gray-50 flex flex-col rounded-lg shadow-md lg:w-1/4 p-9">
          <Button
            active={skillSet === "general"}
            click={() => setSkillSet("general")}
          >
            General
          </Button>
          <Button
            active={skillSet === "specific"}
            click={() => setSkillSet("specific")}
          >
            A little more specific ...
          </Button>
        </div>
        <div className="py-12 px-12 bg-gray-50 rounded-lg flex-1 flex items-center shadow-md">
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
