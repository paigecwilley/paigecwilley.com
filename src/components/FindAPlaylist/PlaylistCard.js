import React from "react";
import Image from "next/image";

import { removeHexEncodedChar, removeString } from "../../utils/stringMani";

const PlaylistCard = ({ images, description, name, link }) => {
  return (
    <div className="flex flex-col items-center lg:items-start lg:flex-row p-9 bg-gray-50 mb-6 rounded-lg shadow-md last:mb-0">
      {images.length > 0 ? (
        <div className="w-60 h-60  relative mb-4 lg:mb-0">
          <Image src={images[0].url} layout="fill" objectFit="cover" />
        </div>
      ) : (
        <div className="w-44 h-44 bg-gray-500 relative" />
      )}
      <div className="lg:mx-4">
        <div className="mb-4">
          <h3 className="font-semibold">{name}</h3>
          <p>
            {removeString("Paige's Fave - ", removeHexEncodedChar(description))}
          </p>
        </div>
        {link ? (
          <a href={link} target="__blank" className="font-semibold">
            Take me to this playlist!
          </a>
        ) : (
          <p>Hmmm... it appears the link for this playlist is missing.</p>
        )}
      </div>
    </div>
  );
};

export default PlaylistCard;
