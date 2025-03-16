'use client';
import { useState } from 'react';
import type { NextPage } from 'next';

import { Header } from '@/components/header';
import { data, NAVIGATION } from '@/utils/constants';

const { motivation } = NAVIGATION;

const Home: NextPage = () => {
  const currentElement = data[0];
  const bgColor = `bg-${currentElement.color}`;
  const textColor = `${currentElement.textColor}`;

  return (
    <>
      <Header bgColor={bgColor} textColor={textColor} />
      <main>
        <div className="flex flex-col items-center md:space-x-4 mt-16 md:mt-28">
          <div className="md:max-w-screen-md px-4">
            <div className={`text-center text-3xl md:text-4xl`}>
              <strong className="bg-clip-text text-transparent bg-night">{motivation.text}</strong>
            </div>
            <div className="text-lg mt-10 text-black flex flex-col gap-2.5">
              <h1 className="text-2xl text-center">🔥 TuneEase – Coming Soon!</h1>
              <div>🎵 A New & Improved Experience is on the Way!</div>

              <div>We’re working hard on the next version of TuneEase to bring you a better, smoother, and more powerful experience.</div>

              <ul>
                <li>🔹 Completely redesigned & improved</li>
                <li>🔹 Still free for everyone</li>
                <li>🔹 Exciting new features coming soon</li>
              </ul>

              <div>
                We sincerely apologize for any inconvenience caused by the extension’s downtime. Thank you for your patience and support!
              </div>

              <ul>
                <li>💌 Stay Updated</li>
                <li>📢 Follow us for updates or check back soon!</li>
                <li>🚀 TuneEase is launching soon – Stay tuned!</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
