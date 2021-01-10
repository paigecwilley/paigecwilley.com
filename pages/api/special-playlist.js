import { getSinglePlaylist } from "../../lib/spotify";

export default async (_, res) => {
  const response = await getSinglePlaylist();
  const playlist = await response.json();

  console.log();

  //   const test = items

  const link = playlist.external_urls.spotify;
  const images = playlist.images;
  const title = playlist.name;

  return res.status(200).json({ images, link, title });
};
