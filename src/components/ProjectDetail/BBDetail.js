import React, { useState } from "react";
import Overview from "./Overview";
import ImageRundown from "./ImageRundown";
import ImageCreator from "./ProjectImageCreator";

const stack = ["NextJS (React)", "Graphql", "Contentful", "Shopify"];

const newThings = [
  "Shopify",
  "Browser Cookies",
  "Marketing Integrations (Klaviyo, Criteo)",
];

const paragraphs = {
  accessories:
    "This was my favorite contribution to this project. (I oddly like filters.) Boosted Boards has tons of amazing accessories for their boards, and the team created a new design for shopping those accessories. I took these designs from XD to reality. All the data came from Shopify. I loved building the ui and the functionality for the filters depicted in on the left-hand column. It's always a fun challenge.",
  summerShowdown:
    "In summer 2018, Boosted ran their Summer Showdown event. I had the pleasure of building the epic event page with many moving parts. Uploads, modals, cookies, fancy scrolling, animations, forms, Klaviyo email integrations. It was a lot. It was on this part of the project that I built one of my favorite accomplishments to date: a function that would check to make sure all child components had loaded on the page for ultra-precise anchor scrolling.",
  delightfulDetails:
    "My lead built the MVP for the board pages, but I got to add that details that delight in a purchase process. This included shopping cart functionality (instead of hosting on Shopify). It also included alternate board view images on board pages that required accurate active states and handling different media types.",
};

const imageSets = [
  {
    image: "/static/images/boosted_accessories.png",
    title: "A new way to shop",
    paragraph: paragraphs.accessories,
    orientation: "left",
    paragraphW: "lg:w-1/3",
    imageSetup: (
      <ImageCreator
        width="lg:w-2/3"
        imageUrl="/static/images/boosted_accessories.png"
        height="h-60 lg:h-108"
      />
    ),
  },
  {
    image: "/static/images/summer_showdown_detail.png",
    title: "A event page as epic as summer",
    paragraph: paragraphs.summerShowdown,
    orientation: "right",
    paragraphW: "lg:w-1/2",
    imageSetup: (
      <ImageCreator
        width="lg:w-1/2"
        imageUrl="/static/images/summer_showdown_detail.png"
        height="h-48 lg:h-96"
      />
    ),
  },
  {
    image: "/static/images/boosted_mini.png",
    title: "All in the details",
    paragraph: paragraphs.delightfulDetails,
    orientation: "left",
    paragraphW: "lg:w-1/3",
    imageSetup: (
      <ImageCreator
        width="lg:w-2/3"
        imageUrl="/static/images/boosted_mini.png"
        height="h-60 lg:h-96"
      />
    ),
  },
];

const BBDetail = () => {
  return (
    <div className="my-20 max-w-6xl">
      <h2 className="font-semibold mb-20">Boosted Boards</h2>
      <Overview
        rundownText="Boosted Boards was ramping up in 2018 and needed a new website for new releases. My lead built the MVP for the release of the Boosted Mini, and I took over for later marketing initiatives, building on what he'd created. I built and launched the brand new accessories page along with content for multiple marketing campaings and events like their board quiz and the 2018 Summer Showdown. This was a varied project that required working with a number of browser features like cookies and marketing integrations with Klaviyo. Built with NextJS, Contentful, Shopify, and Graphql at the core."
        stack={stack}
        newThings={newThings}
      />
      <ImageRundown imageSets={imageSets} />
    </div>
  );
};

export default BBDetail;
