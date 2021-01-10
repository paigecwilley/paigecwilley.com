import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const WorkList = [
  {
    id: "NFJS",
    image: "/static/images/netflix_jobs_grid.png",
    headline: "Netflix Job Site",
    paragraph: (
      <p className="text-gray-700 max-w-sm mb-4">
        V2 of the Netflix Job site. Moved from a REST API to{" "}
        <span className="text-red-400">Graphql</span> to query content from
        <span className="text-red-400"> Contentful</span> on{" "}
        <span className="text-red-400">NextJS</span>. Built the blog and
        refreshed designs including architecting the content model and
        displaying the multimedia grid (pictured).
      </p>
    ),
    stack: ["NextJS", "Contentful", "Apollo Graphql"],
    type: "Front-end",
    link: "/work/netflix-jobsite",
  },

  {
    id: "NFIT",
    image: "/static/images/vendor_survey_crop.png",
    headline: "Netflix Internal Product",
    paragraph: (
      <p className="text-gray-700 max-w-sm mb-4">
        Mountains of evolving data in one place. A tool for{" "}
        <span className="text-red-400">
          receiving, viewing, and editing a lot of data
        </span>
        . Includes a Google Forms-style survey builder (pictured).
      </p>
    ),
    stack: ["NextJS", "Apollo Graphql", "Postgres", "Typescript"],
    type: "Front-end",
    link: "/work/netflix-internal-tool",
  },

  {
    id: "NFIT",
    image: "/static/images/boosted_accessories.png",
    headline: "BoostedBoards.com",
    paragraph: (
      <p className="text-gray-700 max-w-sm mb-4">
        Using <span className="text-red-400">NextJS</span> to create a cohesive
        and delightful shopping experience with{" "}
        <span className="text-red-400">Shopify</span> and marketing campaigns
        with <span className="text-red-400">Contentful</span>.
      </p>
    ),
    stack: ["NextJS", "Apollo Graphql", "Contentful", "Shopify"],
    type: "Front-end",
    link: "/work/boosted-boards",
  },
];

const WorkBlock = ({ image, headline, paragraph, link }) => (
  <div className="max-w-1/2 lg:first:mr-5 text-gray-700">
    <div
      className="rounded-md shadow-md relative w-full mb-4"
      style={{ height: 370 }}
    >
      <Image src={image} layout="fill" objectFit="cover" />
    </div>
    <div className="mb-4 flex flex-col max-w-sm">
      <h3 className="mb-3 text-gray-700 font-semibold">{headline}</h3>
      {paragraph}
      {/* <p className="text-gray-700 max-w-sm mb-4">{paragraph}</p> */}
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

      <div className="grid grid-gap-4 grid-cols-1 lg:grid-cols-2">
        {WorkList.map((workItem) => (
          <WorkBlock {...workItem} key={workItem.headline} />
        ))}
      </div>
    </div>
  );
};

export default HomeWork;
