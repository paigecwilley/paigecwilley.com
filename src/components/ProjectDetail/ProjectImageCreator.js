import React from "react";
import Image from "next/image";

const ImageCreator = ({ imageUrl, width, minHeightOptional }) => {
  return (
    <div
      className={` rounded-lg relative shadow-md w-full lg:${width} ${
        minHeightOptional ? "h-60 lg:h-96" : "h-96 lg:h-108"
      }`}
    >
      <Image
        src={imageUrl}
        layout="fill"
        objectFit="cover"
        className="rounded-lg min-h-full"
      />
    </div>
  );
};

export default ImageCreator;
