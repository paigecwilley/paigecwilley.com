import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import HomeSkills from "../src/components/HomeSkills";
import HomeWork from "../src/components/HomeWork";
import HomeAbout from "../src/components/HomeAbout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col justify-center items-center bg-gray-100 font-sans">
        <div className="px-8 max-w-6xl">
          <div className="px-9 py-9 my-10 flex justify-between">
            <Image
              src="/static/images/waving_hand_emoji.png"
              width="300px"
              height="300px"
            />
            <div className="max-w-md px-9 py-9 my-10 bg-gray-50 rounded-lg shadow-md text-gray-700">
              <h1 className="font-sans mb-5 text-3xl font-semibold text-gray-600">
                Hi! I'm Paige.
              </h1>
              <h3 className="mb-2 text-3xl">A developer and writer.</h3>
              <h3>
                I've never met a problem I didn't want to solve (sometimes 10
                different ways).
              </h3>
            </div>
          </div>
          <div className="my-10 flex text-gray-700 mb-4">
            <p className=" p-9 max-w-2xl bg-gray-50 shadow-md rounded-lg mr-5">
              I'm a developer with previous experience in web marketing and
              writing. I've worked on web products, ecommerce sites, and
              marketing sites at Underbelly since January 2017.
            </p>
            <p className=" p-9 max-w-2xl  bg-gray-50 shadow-md rounded-lg text-lg">
              I love solving problems. Whether that means tinkering away on a
              Wednesday night or rubber ducking with an actual rubber duck or a
              teammate, I'm always in search of a solution. Development and
              programming allow me to sovle all kinds of problems (especially
              ones that keep me up at night) in effecient and satisfying ways.
            </p>
          </div>
          <div>
            <HomeSkills />
          </div>
          <div id="work">
            <HomeWork />
          </div>

          {/* <div id="about">
            <HomeAbout />
          </div> */}
        </div>
      </main>

      <footer></footer>
    </>
  );
}
