import React from "react";
import FindAPlaylist from "../src/components/FindAPlaylist";

const FindAPlaylistPage = () => {
  return (
    <main className="bg-gray-100 font-sans pt-20 px-8">
      <section className="w-full flex flex-col justify-center items-center">
        <FindAPlaylist />
      </section>
    </main>
  );
};

export default FindAPlaylistPage;
