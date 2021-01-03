import React from "react";
import FindAPlaylist from "../src/components/FindAPlaylist";

const FindAPlaylistPage = () => {
  return (
    <main className="flex flex-col justify-center items-center bg-gray-100 font-sans pt-20 px-8">
      <section>
        <FindAPlaylist />
      </section>
    </main>
  );
};

export default FindAPlaylistPage;
