import React, { useState } from "react";
import Image from "next/image";

const Rundown = () => {
  return (
    <>
      <h3 className="text-gray-400 font-semibold">Project Overview</h3>
      <body className="text-gray-600">
        The Netflix Jobsite has had multiple iterations and versions since
        Underbelly first re-designed and developed it in 2017. For V2, Netflix
        wanted to highlight their diversity and inclusion initiatives and make
        it easier to hire for their various office locations. Working with a
        designer, I created the blog (including the Contentful model), moved the
        site from using a REST API to Graphql to query all content from
        Contentful, and updated designs or added features to every page.
      </body>
    </>
  );
};

const imageSets = [
  {
    image: "/static/images/netflix_blog.png",
    title: "A home for content",
    paragraph:
      "V1 of the the jobs site didn't have a blog. For V2, Netflix knew they wanted to highlight the many experiences and people at Netflix with a blog. I created the content model for the blog in Contentful and created this page from the designs.",
    orientation: "left",
  },
  {
    image: "/static/images/netflix_grid.png",
    title: "A new way to display media",
    paragraph:
      "Creating this grid was my favorite part of this project. Based on the designs, each row could have one, two, or three items and each item could be any number of content or media elements with its own constraints and requirements. Architecting this from both a content-modeling standpoint in Contentful and then creating and rendering all the components for that content was a lot of fun for me and a very interesting exercise!",
    orientation: "right",
  },
  {
    image: "/static/images/netflix_jobs_teams.png",
    title: "Moving to Graphql",
    paragraph:
      "V1 of this project originally used the Contentful REST API. I started work on V2 using that API. Partway through the project, the team decided the complexities of working with the more complex content could benefit from using Graphql. I moved all the content-based pages over to Graphql, and it definitely made iterating on the new design faster and cleaner.",
    orientation: "left",
  },
];

const ImageRundown = () => {
  return (
    <>
      {imageSets.map((set) => (
        <div
          className={`flex mb-20 ${
            set.orientation === "left" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <div
            className={`w-1/3 bg-gray-300 rounded-lg p-9 ${
              set.orientation === "left" ? "mr-4" : "ml-4"
            }`}
          >
            <h3 className="mb-5">{set.title}</h3>
            <p>{set.paragraph}</p>
          </div>
          <div />
          <div
            className="h-96 relative shadow-md"
            style={{ width: "750px", height: "500px" }}
          >
            <Image src={set.image} layout="fill" objectFit="cover" />
          </div>
        </div>
      ))}
    </>
  );
};

const BBDetail = () => {
  return (
    <div className="my-20 max-w-6xl">
      <h2 className="font-semibold mb-20">Netflix Jobsite</h2>
      <div className="flex flex-row mb-20">
        <div className=" w-1/3 bg-gray-50 p-9 rounded-lg shadow-md mr-4">
          <h3 className="text-gray-400 font-semibold">Stack</h3>
          <ul>
            <li className="text-gray-600">NextJS (React)</li>
            <li className="text-gray-600">Shopify</li>
            <li className="text-gray-600">Styled-Components</li>
            <li className="text-gray-600">Apollo Graphql</li>
            <li className="text-gray-600">Contentful</li>
          </ul>
        </div>
        <div className="w-2/3 bg-gray-50 p-9 rounded-lg shadow-md">
          <Rundown />
        </div>
      </div>
      <ImageRundown />
    </div>
  );
};

export default BBDetail;
