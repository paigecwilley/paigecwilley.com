import React, { useState } from "react";
import Image from "next/image";

const Rundown = () => {
  return (
    <>
      <h3 className="text-gray-700 font-semibold">Project Overview</h3>
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

const ImageCreator = ({ imageUrl, width, minHeightOptional }) => {
  return (
    <div
      className={`h-72 lg:h-96 rounded-lg relative shadow-md w-full lg:${width}`}
      style={{ minHeight: minHeightOptional ? "auto" : "32rem" }}
    >
      <Image
        src={imageUrl}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
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
      <ImageCreator
        imageUrl="/static/images/vendor_survey_crop.png"
        width="w-2/3"
      />
    ),
  },
  {
    title: "A comment section that's not scary",
    paragraph:
      "Part of the project required a 'feedback' and 'comment' section on one page. This part of the project intimidated me initially from both a ui and a mutation standpoint. Some of this feature's unique challenges included creating a 'recursive ui', making sure a list of 'infinit' comments showed up 'like in Facebook', adding @ mentions to other users, and debouncing.",
    orientation: "right",
    paragraphW: "w-1/2",
    imageSetup: (
      <ImageCreator
        imageUrl="/static/images/nf_feedback.png"
        width="w-1/2"
        minHeightOptional
      />
    ),
  },
  {
    title: "Writing a Diff Engine",
    paragraph:
      "This is the part of the project I'm most proud of. Netflix wanted to compare similar sets of data over time. If the data for time B was different from time A, I highlighted how it was different by showing data that had changed, been added, or been removed from the previous snapshot. This involved comparing large sets of data to each other and manipulating the data in such a way that we could still see everything we needed. The different colors indicate items that have changed, been added, or been removed.",
    orientation: "left",
    paragraphW: "w-1/2",
    imageSetup: (
      <ImageCreator imageUrl="/static/images/diff_engine.png" width="w-1/2" />
    ),
  },
];

const ImageRundown = () => {
  return (
    <>
      {imageSets.map((set) => (
        <div
          className={`flex mb-20 flex-col ${
            set.orientation === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <div
            className={`bg-gray-300 rounded-lg p-9 ${
              set.orientation === "left" ? "lg:mr-4" : "lg:ml-4"
            } w-full mb-4 lg:mb-0 lg:${set.paragraphW}`}
          >
            <h3 className="mb-5 text-gray-700 font-semibold">{set.title}</h3>
            <p>{set.paragraph}</p>
          </div>
          {set.imageSetup}
        </div>
      ))}
    </>
  );
};

const stack = [
  "NextJS (React)",
  "Material UI",
  "Apollo Graphql",
  "React Testing Library",
];

const Intro = () => {
  return (
    <div className="flex flex-col lg:flex-row mb-20">
      <div className="w-full order-2 lg:order-1 lg:w-1/4 bg-gray-50 p-9 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-4">
        <h3 className="text-gray-700 font-semibold">Stack</h3>
        <ul>
          {stack.map((stackItem) => (
            <li key={stackItem}>{stackItem}</li>
          ))}
        </ul>
      </div>
      <div className="w-full order-1 lg:order-2 lg:w-1/2 bg-gray-50 p-9 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-4">
        <Rundown />
      </div>
      <div className="w-full order-3 lg:w-1/4 bg-gray-50 bg-gray-50 p-9 rounded-lg shadow-md">
        <h3 className="text-gray-700 font-semibold">Learning New Things</h3>
        <ul>
          <li className="text-gray-600">Postgres</li>
          <li className="text-gray-600">Netflix Design System</li>
          <li className="text-gray-600">Writing backend migrations</li>
        </ul>
      </div>
    </div>
  );
};

const NFInternal = () => {
  return (
    <div className="my-20 max-w-6xl">
      <h2 className="font-semibold mb-20">Netflix Jobsite</h2>
      <Intro />
      <ImageRundown />
    </div>
  );
};

export default NFInternal;
