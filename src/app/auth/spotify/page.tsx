'use client';

import type { NextPage } from 'next';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';
import { Header } from '@/components/header';
import { data } from '@/utils/constants';
import { Suspense, useEffect } from 'react';
import { useSpotifyAuthUrl } from '@/hooks/useSpotifyAuthUrl';
import { useSpotifyAccessToken } from '@/hooks/useSpotifyAccessToken';

const Container = () => {
  const { authUrl } = useSpotifyAuthUrl();
  const searchParams = useSearchParams();
  const slideIndex = 0;
  const currentElement = data[slideIndex];
  const bgColor = `bg-atlas`;
  const textColor = `${currentElement.textColor}`;
  const codeParam = searchParams.get('code');

  const mutation = useSpotifyAccessToken();

  useEffect(() => {
    if (codeParam) {
      mutation.mutate(codeParam);
    }
  }, [codeParam]);

  return (
    <div className="flex flex-col flex-1">
      <Head>
        <title>TuneEase - Connect with Spotify</title>
      </Head>
      <Header bgColor={bgColor} textColor={textColor} />
      <main className="flex bg-atlas flex-col justify-center flex-1">
        <div className="flex justify-center">
          {!codeParam ? (
            <a
              href={authUrl}
              className={`flex items-center font-medium bg-green shadow-lg shadow-amber-500/40 py-4 px-8 rounded-full cursor-pointer`}
              style={{ color: textColor }}
            >
              <svg className="inline-block mr-1" width={15} height={15} viewBox="0 0 24 24">
                <g>
                  <g>
                    <path
                      d="M5.9,24c-1.6,0-3.1-0.6-4.2-1.7C0.6,21.2,0,19.7,0,18.1c0-1.6,0.6-3.1,1.7-4.2l3.8-3.8l2,2l2.8-2.8l1.4,1.4l-2.8,2.8
			l1.6,1.6l2.8-2.8l1.4,1.4l-2.8,2.8l2,2l-3.7,3.8C9,23.3,7.5,24,5.9,24z M5.5,12.9l-2.3,2.3C2.4,16,2,17,2,18s0.4,2,1.2,2.8
			c1.5,1.5,4.1,1.5,5.6,0l2.3-2.4L5.5,12.9z M18.5,13.9l-8.4-8.4l3.7-3.8C14.9,0.6,16.5,0,18,0c1.5,0,3,0.6,4.2,1.7
			C23.4,2.8,24,4.3,24,5.9s-0.6,3.1-1.7,4.2L18.5,13.9z M13,5.5l5.5,5.5l2.3-2.3C21.6,7.9,22,7,22,5.9c0-1-0.4-2-1.2-2.8
			c-1.5-1.5-4-1.5-5.6,0L13,5.5z"
                    />
                  </g>
                </g>
              </svg>
              <span>Connect with Spotify</span>
            </a>
          ) : (
            <div className="flex flex-col text-center">
              <span className='text-4xl'>🎉 Spotify authorization successful!</span>
              <span className='italic'>You can now use the extension to control your music.</span>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

const AuthSpotify: NextPage = () => {
  return (
    <Suspense>
      <Container />
    </Suspense>
  );
};

export default AuthSpotify;
