import { spotifyAccountAgent } from '@/agents';

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const SPOTIFY_REDIRECT_URI = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;

export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}

export async function getAccessToken(code: string) {
  if (!SPOTIFY_REDIRECT_URI || !CLIENT_ID) {
    throw Error('Missing env vars');
  }

  const verifier = localStorage.getItem('verifier');

  const params = new URLSearchParams();
  params.append('client_id', CLIENT_ID);
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('redirect_uri', SPOTIFY_REDIRECT_URI);
  params.append('code_verifier', verifier!);

  return spotifyAccountAgent.post('/api/token', params, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  });
}
