import type { BackgroundColor } from '../components/screenshot';

type TextColor = BackgroundColor;

interface Data {
  src: string;
  title: string;
  category?: string;
  reverse: boolean;
  color: BackgroundColor;
  textColor?: 'white' | 'black';
  spotifyTextColor?: TextColor;
  text?: string[];
}

interface StoreInfo {
  image: string;
  title: string;
  href: string;
  downloads: string;
}

interface Payment {
  logo: string;
  qr: string;
  title: string;
  href: string;
}

export type BankName = 'momo' | 'techcombank' | 'tpbank' | 'paypay';

type Navigation = { [key in NavigationKey]: NavigationItem };

type BankObject = { [key in BankName]: Payment };

type NavigationKey =
  | 'motivation'
  | 'whatDoesItLookLike'
  | 'installation'
  | 'buyMeACoffee'
  | 'qr'
  | 'followMe'
  | 'privacyPolicy'
  | 'contact'
  | 'connectWithSpotify';

interface NavigationItem {
  text: string;
  id?: string;
  href?: string;
}

export const HOST = 'https://www.tunease.com';

export const GA_TRACKING_ID = 'UA-147652451-2';

export const data: Data[] = [
  {
    src: '/images/with-you-ngau-hung-hoaprox.png',
    title: 'With You (Ngẫu Hứng) - Hoaprox',
    category: '🎶 Music',
    reverse: false,
    color: 'champagne',
    spotifyTextColor: 'evening',
    textColor: 'black',
    text: ['Features dynamic background color', 'with volume control'],
  },
  {
    src: '/images/faded-zhu.png',
    title: 'Faded - Zhu',
    category: '🎶 Music',
    reverse: true,
    color: 'evening',
    spotifyTextColor: 'metapolis',
    textColor: 'white',
    text: ['Easily turn on/off repeat mode'],
  },
  {
    src: '/images/setting.png',
    title: 'Configure your listening experience',
    category: '⚙️ Settings',
    reverse: false,
    color: 'aurora',
    spotifyTextColor: 'ubuntu',
    textColor: 'white',
    text: ['Changing UI is easy', 'Right click the extension icon', 'Access the settings page', 'Switch the UI'],
  },
  {
    src: '/images/waiting-for-love.png',
    title: 'Waiting for love - Avicii',
    category: '🎶 Music',
    reverse: true,
    color: 'ubuntu',
    spotifyTextColor: 'aurora',
    textColor: 'white',
    text: [
      'Bigger UI with more features',
      'Quickly copy a link to share with your friend',
      'You can now play songs on shuffle',
    ],
  },
  {
    src: '/images/coming-home-datmaniac.png',
    title: 'Coming home - Datmaniac',
    category: '🎶 Music',
    reverse: false,
    color: 'metapolis',
    spotifyTextColor: 'atlas',
    textColor: 'white',
    text: ['Easily jump to next or previous songs'],
  },
  {
    src: '/images/behind-the-tech.png',
    title: 'Behind the tech',
    category: '🎙 Podcast',
    reverse: true,
    color: 'atlas',
    spotifyTextColor: 'orange',
    textColor: 'white',
    text: ['Enjoy your favorite podcasts as well as music'],
  },
  {
    src: '/images/joe-rogan-podcast.png',
    title: 'Joe Rogan',
    category: '🎙 Podcast',
    reverse: false,
    color: 'orange',
    spotifyTextColor: 'deepSea',
    textColor: 'black',
    text: ['And control your podcasts'],
  },
  {
    src: '/images/right-click-search.png',
    title: 'Right click to search',
    category: '🔎 Search your song',
    reverse: true,
    color: 'almost',
    spotifyTextColor: 'purple',
    textColor: 'black',
    text: ['Searching is so easy', 'Highlight a text', 'Right click and search'],
  },
  // {
  //   src: '/images/lyric.png',
  //   title: '🎶 Lyric',
  //   reverse: false,
  //   color: 'moss',
  //   spotifyTextColor: 'purple',
  //   textColor: 'black',
  //   text: ['Click the microphone icon on the player', 'Or select "🎶 Lyric" from the extension menu'],
  // },
  // {
  //   src: '/images/sign-in.png',
  //   title: 'Sign in',
  //   reverse: true,
  //   color: 'purple',
  //   spotifyTextColor: 'green',
  //   textColor: 'white',
  //   text: ['with your Spotify account'],
  // },
  {
    src: '/images/app-not-running.png',
    title: 'App not running',
    reverse: false,
    color: 'green',
    spotifyTextColor: 'blush',
    textColor: 'black',
    text: ['Always turn on Spotify desktop app'],
  },
];

export const banks: BankObject = {
  momo: {
    logo: '/payments/banks/momo.png',
    qr: '/payments/qr/momo.jpeg',
    title: 'Momo',
    href: '/donation/momo',
  },
  techcombank: {
    logo: '/payments/banks/techcombank.png',
    qr: '/payments/qr/techcombank.jpeg',
    title: 'Techcombank',
    href: '/donation/techcombank',
  },
  tpbank: {
    logo: '/payments/banks/tpbank.png',
    qr: '/payments/qr/tpbank.jpeg',
    title: 'TPBank',
    href: '/donation/tpbank',
  },
  paypay: {
    logo: '/payments/banks/paypay.png',
    qr: 'https://user-images.githubusercontent.com/6290720/208659347-8b857c21-6d25-4eb9-b051-01d808329318.png',
    title: 'PayPay',
    href: '/donation/paypay',
  },
};

export const jpPayments: Payment[] = [banks.paypay];
export const payments: Payment[] = [banks.momo, banks.techcombank, banks.tpbank];

export const stores: StoreInfo[] = [
  {
    image: '/stores/chrome.png',
    title: 'Chrome',
    href: 'https://chrome.google.com/webstore/detail/spotify-player/bhdjjppbnlpjpeicimhemencfgjeldoa',
    downloads: '30k+',
  },
  {
    image: '/stores/firefox.png',
    title: 'Firefox',
    href: 'https://addons.mozilla.org/en-US/firefox/addon/tunease',
    downloads: '68',
  },
  {
    image: '/stores/edge.png',
    title: 'Edge',
    href: 'https://microsoftedge.microsoft.com/addons/detail/spotify-player/odplfjpibjdajlmaocmfmlcdidldlmnk',
    downloads: '10k+',
  },
];

export const NAVIGATION: Navigation = {
  motivation: {
    text: 'Motivation',
    id: 'motivation',
  },
  whatDoesItLookLike: {
    text: 'What does it look like?',
    id: 'what-does-it-look-like',
  },
  installation: {
    text: 'Installation',
    id: 'installation',
  },
  qr: {
    text: 'QR code',
    id: 'qr',
  },
  followMe: {
    text: 'Follow me',
    href: 'https://twitter.com/davidnguyen121',
  },
  privacyPolicy: {
    text: 'Privacy Policy',
  },
  contact: {
    text: 'Contact',
  },
  buyMeACoffee: {
    text: 'Buy me a coffee',
    id: 'buy-me-a-coffee',
  },
  connectWithSpotify: {
    text: 'Connect with Spotify',
    href: '/auth/spotify',
  },
};

export const META_DESCRIPTION =
  'Controlling Spotify while working or browsing can be distracting, requiring you to switch windows and lose focus. With our simple extension, you can effortlessly control playback without leaving your current tab.';

export const LOGO = 'logo.png';
