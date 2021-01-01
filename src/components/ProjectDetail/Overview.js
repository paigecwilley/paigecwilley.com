import React from "react";

const Rundown = ({ rundownText }) => {
  return (
    <>
      <h3 className="text-gray-700 font-semibold">Project Overview</h3>
      <div className="text-gray-600">{rundownText}</div>
    </>
  );
};

const Overview = ({ stack, rundownText, newThings }) => {
  return (
    <div className="flex flex-col lg:flex-row mb-20">
      {stack ? (
        <div className="w-full order-2 lg:order-1 lg:w-1/4 bg-gray-50 p-9 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-4">
          <h3 className="text-gray-700 font-semibold">Stack</h3>
          <ul>
            {stack.map((stackItem) => (
              <li className="font-semibold" key={stackItem}>
                {stackItem}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {rundownText ? (
        <div className="w-full order-1 lg:order-2 lg:w-1/2 bg-gray-50 p-9 rounded-lg shadow-md mb-4 lg:mb-0 lg:mr-4">
          <Rundown rundownText={rundownText} />
        </div>
      ) : null}
      {newThings ? (
        <div className="w-full order-3 lg:w-1/4 bg-gray-50 bg-gray-50 p-9 rounded-lg shadow-md">
          <h3 className="text-gray-700 font-semibold">Learning New Things</h3>
          <ul>
            {newThings.map((newItem) => (
              <li key={newItem}>{newItem}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Overview;
