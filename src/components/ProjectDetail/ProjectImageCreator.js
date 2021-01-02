import React from "react";
import Image from "next/image";

const ImageCreator = ({ imageUrl, width, height }) => {
  return (
    <div className={` rounded-lg relative shadow-md w-full ${width} ${height}`}>
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
