import { getPlaylists } from "../../lib/spotify";

export default async (_, res) => {
  const response = await getPlaylists();
  const { items } = await response.json();

  const playlists = items
    .filter((playlist) => playlist.description.includes("Paige&#x27;s Fave"))
    .map((playlist) => ({
      name: playlist.name,
      link: playlist.external_urls.spotify,
      description: playlist.description,
      images: playlist.images,
    }));

  return res.status(200).json({ playlists });
};
