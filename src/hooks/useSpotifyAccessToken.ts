import { getAccessToken } from '@/apis/token';
import { useMutation } from '@tanstack/react-query';

export function useSpotifyAccessToken() {
  return useMutation({
    mutationFn: getAccessToken,
    onSuccess: (response) => {
      const data = response.data;
      localStorage.setItem('token', JSON.stringify(data));
      window.postMessage(
        {
          type: 'LOCAL_STORAGE_DATA',
          data: JSON.stringify(data), // ✅ Send stored token
        },
        '*'
      );
    },
    onError: (error) => {
      console.error('Error fetching access token:', error);
      localStorage.removeItem('token');
      window.location.replace(process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI!);
    },
  });
}
