import querystring from "querystring";

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN: refresh_token,
} = process.env;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const EasterEggURI = "4Oj0iAFFFCMqQccFPUmzlX";

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};

const PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/me/playlists?limit=50`;

const SINGLE_PLAYLIST_ENDPOINT = `https://api.spotify.com/v1/playlists/`;

export const getPlaylists = async () => {
  const { access_token } = await getAccessToken();

  return fetch(PLAYLISTS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export const getSinglePlaylist = async () => {
  const { access_token } = await getAccessToken();

  return fetch(SINGLE_PLAYLIST_ENDPOINT + EasterEggURI, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
