import type { Metadata } from 'next';
import { META_DESCRIPTION } from '@/utils/constants';
import '../globals.css';
import { WrapperQueryClient } from '@/providers/wrapper-query-client';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tunease.com'),
  title: 'TuneEase - Helps you control music while using Spotify',
  description: META_DESCRIPTION,
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/favicon.ico' }],
  },
  openGraph: {
    images: [{ url: '/tunease-logo.png' }],
  },
  twitter: {
    images: [{ url: '/tunease-logo.png' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WrapperQueryClient>{children}</WrapperQueryClient>
        <script
          src={`https://cdn.jsdelivr.net/npm/@statsig/js-client@latest/build/statsig-js-client+session-replay+web-analytics.min.js?apikey=${process.env.STATSIG_CLIENT_KEY}`}
        />
      </body>
    </html>
  );
}
