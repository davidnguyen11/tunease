import type { Metadata, NextPage } from 'next';

import { Header } from '@/components/header';
import { data, NAVIGATION } from '@/utils/constants';
import { Footer } from '@/components/footer';

const { privacyPolicy } = NAVIGATION;

export const metadata: Metadata = {
  title: 'TuneEase - Privacy Policy',
};

const PrivacyPolicy: NextPage = () => {
  const slideIndex = 3;
  const currentElement = data[slideIndex];
  const bgColor = `bg-${currentElement.color}`;
  const textColor = `${currentElement.textColor}`;

  return (
    <>
      <Header bgColor={bgColor} textColor={textColor} />
      <main>
        <div className="flex flex-col items-center md:space-x-4 mt-16">
          <div className="md:max-w-screen-md px-4">
            <div className={`text-center text-3xl md:text-4xl`}>
              <strong className="bg-clip-text text-transparent bg-kyeMeh">{privacyPolicy.text}</strong>
            </div>
            <div className="text-lg mt-10">TuneEase Privacy Policies.</div>
            <div className="text-lg mt-10">
              <strong>I. Introduction</strong>
              <p>
                TuneEase is a lightweight music controller that enhances your listening experience by allowing you to
                play, pause, like, or skip tracks while browsing the web—without switching to the Spotify app.
              </p>
            </div>

            <div className="text-lg mt-7">
              <strong>II. Data Collection</strong>
              <ul className="list-decimal">
                <li className="ml-10">TuneEase does not collect or store any personal data.</li>
                <li className="ml-10">All data is stored locally on your device using the localStorage API.</li>
                <li className="ml-10">TuneEase does not transmit or save any data to external servers.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
