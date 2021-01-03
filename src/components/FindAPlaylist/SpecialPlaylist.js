import React from "react";
import useSWR from "swr";

import PlaylistCard from "./PlaylistCard";

const fetcher = (url) => fetch(url).then((r) => r.json());

const SpecialPlaylist = () => {
  const { data, error } = useSWR("/api/special-playlist", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <>
      <PlaylistCard
        images={data.images}
        description="You ever listen to the same 8 songs (and only 8 songs) over and over again while watching 32 hours of a K-drama on vacation? No? Just me?"
        name={data.name}
        link={data.link}
      />
    </>
  );
};

export default SpecialPlaylist;
