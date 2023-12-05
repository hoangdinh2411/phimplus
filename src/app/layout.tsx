import type { Metadata } from 'next';
import MUIThemeProvider, { poppins } from '~/theme/MUIThemeProvider';
import './index.css';
import React, { Suspense } from 'react';
import Footer from '~/components/shared/footer';
import Header from '~/components/shared/header';
import AppContextProvider from '~/provider/AppContextProvider';

import LoadingSpinner from '~/components/UI/LoadingSpinner';
import metadataConfig from '~/helpers/metadataConfig';

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
