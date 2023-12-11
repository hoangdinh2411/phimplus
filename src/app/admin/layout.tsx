import type { Metadata } from 'next';
import MUIThemeProvider, { poppins } from '~/theme/MUIThemeProvider';
import '../index.css';
import React, { Suspense } from 'react';
import Footer from '~/components/shared/footer';
import Header from '~/components/shared/header';

import LoadingSpinner from '~/components/UI/LoadingSpinner';
import metadataConfig from '~/helpers/metadataConfig';

export const metadata: Metadata = metadataConfig;

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <Suspense fallback={<LoadingSpinner />}>
          <MUIThemeProvider>
            <Header />
            {children}
            <Footer />
          </MUIThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
