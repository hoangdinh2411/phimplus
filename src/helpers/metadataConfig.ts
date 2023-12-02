import { APP_CONFIG } from './config';

const metadataConfig = {
  metadataBase: new URL('https://facebook.com'),
  title: {
    template: `%s | ${APP_CONFIG.NAME}`,
    default: APP_CONFIG.NAME,
  },
  icons: {
    icon: ['/favicon.ico?v=1'],
    apple: ['apple-touch-icon.png?v=1'],
    shortcut: ['apple-touch-icon.png'],
  },
  manifest: 'site.webmanifest',
  applicationName: APP_CONFIG.NAME,
  description: APP_CONFIG.DESCRIPTION,
  authors: [
    {
      name: 'W.D',
    },
    {
      name: 'Q.H',
    },
  ],
  creator: APP_CONFIG.NAME,
  publisher: APP_CONFIG.NAME,
  openGraph: {
    title: 'Plus Phim - Facebook Fanpage',
    description:
      'Plus Phim - Facebook Fanpage, nơi chia sẻ những bộ phim hay nhất, mới nhất, đặc sắc nhất.',
    url: 'https://www.facebook.com/plusphimgroup',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://www.facebook.com/photo?fbid=122095899044143422&set=a.122095092668143422',
        width: 800,
        height: 600,
        alt: 'My Facebook Profile',
      },
      {
        url: 'https://www.facebook.com/photo?fbid=122095899044143422&set=a.122095092668143422',
        width: 1800,
        height: 1600,
        alt: 'My Facebook Profile',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default metadataConfig;
