import React from "react";
import useSWR from "swr";

import PlaylistCard from "./PlaylistCard";
import SpecialPlaylist from "./SpecialPlaylist";

const fetcher = (url) => fetch(url).then((r) => r.json());

const FindAPlaylist = () => {
  const { data, error } = useSWR("/api/playlists", fetcher);

  if (error) return <div>failed to load</div>;

  return (
    <div className="my-20 max-w-6xl w-full">
      <h2 className="font-semibold">In a music rut?</h2>
      <h3 className="mb-6 max-w-3xl">
        I've lovingly curated several playlists on Spotify (or jokingly, in one
        case). I've listed some of my favorites here. I hope they can bring you
        as much joy as they've brought me!
      </h3>
      {data
        ? data.playlists.map((playlist) => (
            <PlaylistCard key={playlist.name} {...playlist} />
          ))
        : ["", "", "", ""].map(() => <PlaylistCard />)}
      {data && <SpecialPlaylist />}
    </div>
  );
};

export default FindAPlaylist;
