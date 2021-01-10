import React from "react";
import Overview from "./Overview";
import ImageRundown from "./ImageRundown";
import ImageCreator from "./ProjectImageCreator";

const GraphqlOverview = (
  <p>
    V1 of this project originally used the Contentful REST API. I started work
    on V2 using that API. Partway through the project, the team decided the
    complexities of working with the more complex content could benefit from
    using Graphql. I moved all the content-based pages over to Graphql, and it
    definitely made iterating on the new design faster and cleaner.
  </p>
);

const imageSets = [
  {
    image: "/static/images/netflix_blog.png",
    title: "A home for content",
    paragraph:
      "V1 of the the jobs site didn't have a blog. For V2, Netflix knew they wanted to highlight the many experiences and people at Netflix with a blog. I created the content model for the blog in Contentful and created this page from the designs.",
    orientation: "left",
    paragraphW: "lg:w-1/3",
    imageSetup: (
      <ImageCreator
        width="lg:w-2/3"
        imageUrl="/static/images/netflix_blog.png"
        height="h-60 lg:h-108"
      />
    ),
  },
  {
    image: "/static/images/netflix_grid.png",
    title: "A new way to display media",
    paragraph:
      "Creating this grid was my favorite part of this project. Based on the designs, each row could have one, two, or three items and each item could be any number of content or media elements with its own constraints and requirements. Architecting this from both a content-modeling standpoint in Contentful and then creating and rendering all the components for that content was a lot of fun for me and a very interesting exercise!",
    orientation: "right",
    paragraphW: "lg:w-1/3",
    imageSetup: (
      <ImageCreator
        width="lg:w-2/3"
        imageUrl="/static/images/netflix_grid.png"
        height="h-60 lg:h-108"
      />
    ),
  },
  {
    image: "/static/images/netflix_jobs_teams.png",
    title: "Moving to Graphql",
    paragraph: GraphqlOverview,
    orientation: "left",
    paragraphW: "lg:w-1/3",
    imageSetup: (
      <ImageCreator
        width="lg:w-2/3"
        imageUrl="/static/images/netflix_jobs_locations.png"
        height="h-60 lg:h-108"
      />
    ),
  },
];

const NFJobsDetail = () => {
  return (
    <div className="my-20 max-w-6xl">
      <h2 className="font-semibold mb-20">Netflix Jobsite</h2>
      <Overview
        rundownText="The Netflix Jobsite has had multiple iterations and versions since
        Underbelly first re-designed and developed it in 2017. For V2, Netflix
        wanted to highlight their diversity and inclusion initiatives and make
        it easier to hire for their various office locations. Working with a
        designer, I created the blog (including the Contentful model), moved the
        site from using a REST API to Graphql to query all content from
        Contentful, and updated designs or added features to every page."
        stack={[
          "NextJS (React)",
          "Styled-Components",
          "Apollo Graphql",
          "Contentful",
          "Typescript",
        ]}
        newThings={null}
      />
      <ImageRundown imageSets={imageSets} />
    </div>
  );
};

export default NFJobsDetail;
