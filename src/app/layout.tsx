import type { Metadata } from 'next';
import MUIThemeProvider, { poppins } from '~/theme/MUIThemeProvider';
import './index.css';
import React, { Suspense } from 'react';
import Footer from '~/components/shared/footer';
import Header from '~/components/shared/header';
import AppContextProvider from '~/provider/AppContextProvider';
import { fetchListCategory, fetchListCountries } from '~/services/appApi';

import LoadingSpinner from '~/components/UI/LoadingSpinner';
import metadataConfig from '~/helpers/metadataConfig';

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
      </body>
    </html>
  );
}
