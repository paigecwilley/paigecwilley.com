import { getPlaylists } from "../../lib/spotify";

export default async (_, res) => {
  const response = await getPlaylists();
  const { items } = await response.json();

  const playlists = items.map((playlist) => ({
    name: playlist.name,
    link: playlist.external_urls.spotify,
    description: playlist.description,
  }));

  return res.status(200).json({ playlists });
};
