import React, { useState } from "react";
import Image from "next/image";

const Rundown = () => {
  return (
    <>
      <h3 className="text-gray-400 font-semibold">Project Overview</h3>
      <body className="text-gray-600">
        As this is an internal Netflix tool, I can't say a ton about it. Here's
        what I can tell you. Netflix needed a tool for receiving, viewing, and
        editing A LOT of data. They also needed a way to build surveys similar
        to Google Forms and send those surveys to others and then handle that
        data too. This project involved a lot of people including myself on
        front-end, a backend dev, and the project lead on my team's side
        building this.
      </body>
    </>
  );
};

const Contribution = () => {
  return (
    <>
      <h3>My contribution</h3>
      <body>
        Basically, I did the front-end for this project with some help from the
        project lead, with whom I had some pair sessions. I queried all the data
        from the database our backend engineer built. I built countless tables
        and grids for displaying data and almost as many inputs for altering
        data (so many mutations!). This was the most involved and extensive
        project I've undertaken with Apollo Graphql. I created a couple search
        features. I handled countless UI details.
      </body>
    </>
  );
};

const imageSets = [
  {
    image: "/static/images/netflix_blog.png",
    title: "Duplicating Google Forms",
    paragraph:
      "The Netflix team on this project needed a way to create surveys similar to Google Forms to send but integrated into the tool and able to handle additional data points. This had a lot of fun features like dragging and dropping of sections and questions, figuring out how to add and remove questions and sections anywhere, and handling multiple kinds of inputs.",
    orientation: "left",
    paragraphW: "w-1/3",
    imageSetup: (
      <div
        className="h-96  relative shadow-md w-2/3"
        style={{ minHeight: "32rem" }}
      >
        <Image
          src="/static/images/vendor_survey_crop.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    ),
  },
  {
    title: "A comment section that's not scary",
    paragraph:
      "Part of the project required a 'feedback' and 'comment' section on one page. This part of the project intimated me initially from both a ui and a mutation standpoint. Making sure that an 'infinite'  list of comments shows up 'like in Facebook', adding @ mentions to other users, and debouncing all presented unique challenges. ",
    orientation: "right",
    paragraphW: "w-1/2",
    imageSetup: (
      <div className="h-96 relative shadow-md w-1/2">
        <Image
          src="/static/images/nf_feedback.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    ),
  },
  {
    title: "Writing a Diff Engine",
    paragraph:
      "This is the part of the project I'm most proud of. Netflix wanted to compare similar sets of data over time. If the data for time B was different from time A, I highlighted how it was different by showing data that had changed, been added, or been removed from the previous snapshot. This involved comparing large sets of data to each other and manipulating the data in such a way that we could still see everything we needed. The different colors indicate items that have changed, been added, or been removed.",
    orientation: "left",
    paragraphW: "w-1/2",
    imageSetup: (
      <div
        className="h-96  relative shadow-md w-1/2"
        style={{ minHeight: "32rem" }}
      >
        <Image
          src="/static/images/diff_engine.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
    ),
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
            className={`bg-gray-300 rounded-lg p-9 ${
              set.orientation === "left" ? "mr-4" : "ml-4"
            } ${set.paragraphW}`}
          >
            <h3 className="mb-5">{set.title}</h3>
            <p>{set.paragraph}</p>
          </div>
          {set.imageSetup}
        </div>
      ))}
    </>
  );
};

const NFInternal = () => {
  return (
    <div className="my-20 max-w-6xl">
      <h2 className="font-semibold mb-20">Netflix Jobsite</h2>
      <div className="flex flex-row mb-20">
        <div className=" w-1/4 bg-gray-50 p-9 rounded-lg shadow-md mr-4">
          <h3 className="text-gray-400 font-semibold">Stack</h3>
          <ul>
            <li className="text-gray-600">NextJS (React)</li>
            <li className="text-gray-600">Material UI</li>
            <li className="text-gray-600">Apollo Graphql</li>
            <li className="text-gray-600">React Testing Library</li>
          </ul>
        </div>
        <div className="w-1/2 bg-gray-50 p-9 rounded-lg shadow-md mr-4">
          <Rundown />
        </div>
        <div className="w-1/4 bg-gray-50 bg-gray-50 p-9 shadow-md">
          <h3 className="text-gray-400 font-semibold">Learning New Things</h3>
          <ul>
            <li className="text-gray-600">Postgres</li>
            <li className="text-gray-600">Netflix Design System</li>
            <li className="text-gray-600">Writing backend migrations</li>
          </ul>
        </div>
      </div>
      <ImageRundown />
    </div>
  );
};

export default NFInternal;
