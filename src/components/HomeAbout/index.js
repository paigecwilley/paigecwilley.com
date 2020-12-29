import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

const listOfHobbies = [
  "Rowing on the Great Salt Lake",
  "Teaching her Dalmatian a new trick",
  "Trying (and failing) a new meditation technique",
  "Running on the trails near her house",
  "Attending a class on the yoga sutras with her mentor",
  "Attending an integrative Ayurveda class for her health counselor certification",
  "Hiking near her home",
  "Drooling over Japanese furniture",
];

const HomeAbout = () => {
  const [randomHobby, setRandomHobby] = useState(2);
  return (
    <div className="my-20">
      <h2 className="font-sans font-semibold mb-3 text-gray-500">
        A little more about
      </h2>
      <div>
        <div>
          <h4>
            I'm a developer with previous experience in web marketing and
            writing. I've worked on web products, ecommerce sites, and marketing
            sites at Underbelly since January 2017. My first introduction to
            programming came in 2008, and I've been dabbling in it in some form
            ever since. I made the switch to full-time in 2015.
          </h4>
        </div>
        <h4>
          Hobbies? I've got a lot of 'em. I'm interested in <i>a lot</i> of
          things, too many to list here. If you're super curious, click the
          button.{" "}
        </h4>
      </div>
      <div>
        <button onClick={() => setRandomHobby(4)}>
          What might Paige be up to today?
        </button>
        <h4> {listOfHobbies[randomHobby]}</h4>
      </div>
    </div>
  );
};

export default HomeAbout;
