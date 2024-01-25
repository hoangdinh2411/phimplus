import type { Metadata } from 'next';
import MUIThemeProvider, { poppins } from '~/theme/MUIThemeProvider';
import './index.css';
import React, { Suspense } from 'react';
import AppContextProvider from '~/provider/AppContextProvider';

import metadataConfig from '~/helpers/metadataConfig';
import LoadingSpinner from './components/UI/LoadingSpinner';
import Header from './components/shared/header';
import Footer from './components/shared/footer';

export const metadata: Metadata = metadataConfig;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Suspense fallback={<LoadingSpinner />}>
          <AppContextProvider>
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
