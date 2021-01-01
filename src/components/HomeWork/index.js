import React, { useState } from "react";
import Image from "next/image";

const WorkList = [
  {
    id: "NFJS",
    image: "/static/images/netflix_jobs_grid.png",
    headline: "Netflix Job Site",
    paragraph:
      "V2 of the Netflix Job site. Moved from a REST API to Graphql to query content from Contentful. Built the blog and refreshed designs including architecting the content model and displaying the multimedia grid (pictured).",
    stack: ["NextJS", "Contentful", "Apollo Graphql"],
    type: "Front-end",
  },

  {
    id: "NFIT",
    image: "/static/images/vendor_survey_crop.png",
    headline: "Netflix Internal Product",
    paragraph:
      "Mountains of evolving data in one place. A tool for receiving, viewing, and editing a lot of data. Includes a Google Forms-style survey builder (pictured).",
    stack: ["NextJS", "Apollo Graphql", "Postgres", "Typescript"],
    type: "Front-end",
  },
];

const WorkBlock = ({ image, headline, paragraph, type, stack }) => (
  <div className="lg:w-1/2 lg:first:mr-5 text-gray-700">
    <div
      className="rounded-md shadow-md relative w-full mb-4"
      style={{ height: 370 }}
    >
      <Image src={image} layout="fill" objectFit="cover" />
    </div>
    <div className="mb-4">
      <h3 className="mb-3 text-gray-700 font-semibold">{headline}</h3>
      <p className="text-gray-700 max-w-sm">{paragraph}</p>
    </div>
    <div className="inline-grid grid-cols-2 gap-5 mb-8 lg:mb-0">
      <div>
        <p className="font-semibold">Type</p>
        <p>{type}</p>
      </div>
      <div>
        <p className="font-semibold">Stack</p>
        <ul>
          {stack.map((stackTech) => (
            <li key={stackTech}>{stackTech}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const HomeWork = () => {
  return (
    <div className="my-20">
      <h2 className="font-sans font-semibold text-gray-700">Work</h2>
      <h4 className="max-w-2xl mb-8 text-lg">
        Quite a bit of my work is hidden behind a VPN (super top secret) or is
        lost to the Wayback Machine thanks to fast-moving marketing initiatives
        or clients being acquired. So this is just a peek.
      </h4>

      <div className="flex flex-col lg:flex-row">
        {WorkList.map((workItem) => (
          <WorkBlock {...workItem} key={workItem.headline} />
        ))}
      </div>
    </div>
  );
};

export default HomeWork;
