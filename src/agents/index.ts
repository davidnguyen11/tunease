import axios from 'axios';

export const spotifyAccountAgent = axios.create({
  baseURL: `https://accounts.spotify.com`,
});
