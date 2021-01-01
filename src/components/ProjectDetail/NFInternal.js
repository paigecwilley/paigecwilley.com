import React, { useState } from "react";
import Overview from "./Overview";
import ImageRundown from "./ImageRundown";
import ImageCreator from "./ProjectImageCreator";

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
      "This is the part of the project I'm most proud of. Netflix wanted to compare similar sets of data over time. If the data for October was different from September, I highlighted how it was different by showing both October and September’s data and highlighting in the October data what had changed, been removed, or been added from the September data (the colored outlines in the image). This involved comparing large sets of data to each other and manipulating the data in such a way that we could still see everything we needed.",
    orientation: "left",
    paragraphW: "w-1/2",
    imageSetup: (
      <ImageCreator imageUrl="/static/images/diff_engine.png" width="w-1/2" />
    ),
  },
];

const stack = [
  "NextJS (React)",
  "Material UI",
  "Apollo Graphql",
  "React Testing Library",
];

const NFInternal = () => {
  return (
    <div className="my-20 max-w-6xl">
      <h2 className="font-semibold mb-20">Netflix Internal Tool</h2>
      <Overview
        rundownText=" As this is an internal Netflix tool, I can't say a ton about it. Here's
        what I can tell you: Netflix needed a tool for receiving, viewing, and
        editing A LOT of data. They also needed a custom survey builder tool
        that did everything Google Forms does and then some. I built the
        front-end for this project and queried all the data from the database
        our backend engineer built using a Graphql server. I build countless
        tables and grids for displaying data and just as many inputs for
        altering data (so many mutations!)"
        stack={stack}
        newThings={[
          "Postgres",
          "Netflix Design System",
          "Writing backend migrations",
        ]}
      />
      <ImageRundown imageSets={imageSets} />
    </div>
  );
};

export default NFInternal;
