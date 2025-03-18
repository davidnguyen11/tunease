'use client';

import { getToAuthCodeFlowUrl, generateCodeVerifier, VERIFIER_LENGTH } from '@/auth-flow';
import { useEffect, useState } from 'react';

export function useSpotifyAuthUrl() {
  const [authUrl, setAuthUrl] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifier = generateCodeVerifier(VERIFIER_LENGTH);
    async function fetchAuthUrl() {
      try {
        const url = await getToAuthCodeFlowUrl(verifier);
        setAuthUrl(url);
        localStorage.setItem('verifier', verifier);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      }
    }

    fetchAuthUrl();
  }, []);

  return { authUrl, error };
}
