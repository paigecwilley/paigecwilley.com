import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WorkList = [
  {
    id: "NFJS",
    image: "/static/images/netflix_jobs_grid.png",
    headline: "Netflix Job Site",
    paragraph:
      "V2 of the Netflix Job site. Moved from a REST API to Graphql to query content from Contentful. Built the blog and refreshed designs including architecting the content model and displaying the multimedia grid (pictured).",
    stack: ["NextJS", "Contentful", "Apollo Graphql"],
    type: "Front-end",
    link: "/work/netflix-jobsite",
  },

  {
    id: "NFIT",
    image: "/static/images/vendor_survey_crop.png",
    headline: "Netflix Internal Product",
    paragraph:
      "Mountains of evolving data in one place. A tool for receiving, viewing, and editing a lot of data. Includes a Google Forms-style survey builder (pictured).",
    stack: ["NextJS", "Apollo Graphql", "Postgres", "Typescript"],
    type: "Front-end",
    link: "/work/netflix-internal-tool",
  },
];

const WorkBlock = ({ image, headline, paragraph, link }) => (
  <div className="lg:w-1/2 lg:first:mr-5 text-gray-700">
    <div
      className="rounded-md shadow-md relative w-full mb-4"
      style={{ height: 370 }}
    >
      <Image src={image} layout="fill" objectFit="cover" />
    </div>
    <div className="mb-4 flex flex-col max-w-sm">
      <h3 className="mb-3 text-gray-700 font-semibold">{headline}</h3>
      <p className="text-gray-700 max-w-sm mb-4">{paragraph}</p>
      <div className="w-12 self-end max-w-sm cursor-pointer hover:scale-110">
        <Link href={link} className="cursor-pointer">
          <svg
            viewBox="0 0 629 332"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={1.5}
          >
            <path
              d="M14.548 163h599.914L460.865 14.408 614.462 163 468.216 317.153"
              fill="none"
              stroke="#000"
              strokeWidth={27.74}
            />
          </svg>
        </Link>
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
