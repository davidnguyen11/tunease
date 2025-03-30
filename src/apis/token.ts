import { spotifyAccountAgent } from '@/agents';
import { OverrideSpotifyOptions } from '@/auth-flow';

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

interface Params {
  code: string;
  options?: OverrideSpotifyOptions;
}

export async function getAccessToken({ code, options }: Params) {
  if (!SPOTIFY_REDIRECT_URI || !CLIENT_ID) {
    throw Error('Missing env vars');
  }
  const clientId = options?.clientId ?? CLIENT_ID;
  const redirectUri = options?.redirectUri ?? SPOTIFY_REDIRECT_URI;

  const verifier = localStorage.getItem('verifier');

  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', redirectUri);
  params.append('code_verifier', verifier!);

  return spotifyAccountAgent.post('/api/token', params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
}
