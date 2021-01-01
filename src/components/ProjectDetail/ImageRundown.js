import React from "react";

const ImageRundown = ({ imageSets }) => {
  return (
    <>
      {imageSets.map((set) => (
        <div
          key={set.title}
          className={`flex mb-20 flex-col ${
            set.orientation === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
          }`}
        >
          <div
            className={`bg-gray-300 rounded-lg p-9 shadow-md ${
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

export default ImageRundown;
