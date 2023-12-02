import type { Metadata } from 'next';
import MUIThemeProvider, { poppins } from '~/theme/MUIThemeProvider';
import './index.css';
import React, { Suspense } from 'react';
import Footer from '~/components/shared/footer';
import Header from '~/components/shared/header';
import AppContextProvider from '~/provider/AppContextProvider';
import { fetchListCategory, fetchListCountries } from '~/services/appApi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import LoadingSpinner from '~/components/UI/LoadingSpinner';
import metadataConfig from '~/helpers/metadataConfig';
import Script from 'next/script';

export const metadata: Metadata = metadataConfig;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchListCategory();
  const countries = await fetchListCountries();

  return (
    <html lang='en'>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Suspense fallback={<LoadingSpinner />}>
          <AppContextProvider categories={categories} countries={countries}>
            <MUIThemeProvider>
              <Header />
              {children}
              <Footer />
            </MUIThemeProvider>
          </AppContextProvider>
        </Suspense>
        <Script src='https://www.googletagmanager.com/gtag/js?id=G-CL984922DN'></Script>
        <Script id='google-analytic'>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-CL984922DN');
            `}
        </Script>
      </body>
    </html>
  );
}
