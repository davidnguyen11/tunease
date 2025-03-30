const permissions = [
  'user-modify-playback-state',
  'user-read-playback-state',
  'user-read-currently-playing',
  'user-library-modify',
  'user-library-read',
  'user-read-recently-played',
  'streaming',
  'user-read-private',
  'user-read-email',
];
const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

export const VERIFIER_LENGTH = 128;

export interface OverrideSpotifyOptions {
  scopes: string;
  clientId: string;
  redirectUri: string;
}

export async function getToAuthCodeFlowUrl(verifier: string, options?: OverrideSpotifyOptions) {
  if (!SPOTIFY_REDIRECT_URI || !CLIENT_ID) {
    throw Error('Missing env vars');
  }
  const challenge = await generateCodeChallenge(verifier);
  const params = new URLSearchParams();

  const clientId = options?.clientId ?? CLIENT_ID;
  const scope = options?.scopes ?? permissions.join(',');
  const redirectUri = options?.redirectUri ?? SPOTIFY_REDIRECT_URI;

  params.append('client_id', clientId);
  params.append('response_type', 'code');
  params.append('redirect_uri', redirectUri);
  params.append('scope', scope);
  params.append('code_challenge_method', 'S256');
  params.append('code_challenge', challenge);

  return `https://accounts.spotify.com/authorize?${params.toString()}`;
}

export function generateCodeVerifier(length: number) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

async function generateCodeChallenge(codeVerifier: string) {
  const data = new TextEncoder().encode(codeVerifier);
  const digest = await window.crypto.subtle.digest('SHA-256', data);
  return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}
