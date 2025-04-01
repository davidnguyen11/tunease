'use client';

import type { NextPage } from 'next';
import { Header } from '@/components/header';
import { data } from '@/utils/constants';
import { Suspense } from 'react';

const messages = [
  'Dear users,',
  'I want to sincerely apologize for the incident that occurred on Sunday, March 16, 2025, which caused the extension to stop working properly. I understand how frustrating that must have been, and I truly appreciate your patience.',
  'As the sole developer behind this project, I’m responsible for both building features and maintaining everything. It took me a little time to investigate and find the right solution—but I’m happy to say that a fix is now in place.',
  'Please know that I deeply care about this product and the people who use it. Your support and trust mean a lot to me, and I’m committed to continuing to improve TuneEase to serve you better.',
  'Thank you again for your understanding.',
  '– David',
];

const Container = () => {
  const slideIndex = 0;
  const currentElement = data[slideIndex];
  const bgColor = `bg-almost`;
  const textColor = `${currentElement.textColor}`;

  return (
    <div className="flex flex-col flex-1">
      <Header bgColor={bgColor} textColor={textColor} />
      <main className={`flex ${bgColor} flex-col justify-center items-center flex-1 p-3 pb-8`}>
        <div className="flex flex-col max-w-lg justify-center">
          <div className="flex flex-col text-center">
            <span className="text-2xl">📢 Apology for the Recent Service Interruption (March 16, 2025)</span>
          </div>

          <div className="flex flex-col gap-y-3 mt-8">
            {messages.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col max-w-lg justify-center mt-8">
          <div className="flex flex-col text-center">
            <span className="text-2xl">🔔 What’s New in This Update</span>
          </div>

          <div className="flex flex-col gap-y-3 mt-8">
            <p>Here are some important changes included in the latest release of the extension:</p>

            <div>
              <p className="font-semibold">✅ Rebranding:</p>
              <p>
                The extension is now officially rebranded from Spotit to TuneEase 🎉. Same functionality—new identity!
              </p>
            </div>

            <div>
              <p className="font-semibold">🎨 New Look:</p>
              <p>
                We’ve updated the logo color from green to yellow to give TuneEase a fresh and more distinctive visual
                style.
              </p>
            </div>

            <div>
              <p className="font-semibold">🔄 Important Note:</p>
              <p>
                If you experience any issues after updating, please try reinstalling the extension to ensure everything
                works correctly.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const V4Migration: NextPage = () => {
  return (
    <Suspense>
      <Container />
    </Suspense>
  );
};

export default V4Migration;
