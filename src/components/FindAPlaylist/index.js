import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const FindAPlaylist = () => {
  const { data, error } = useSWR("/api/playlists", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  console.log(data);
  return <div>Find a playlist!</div>;
};

export default FindAPlaylist;
