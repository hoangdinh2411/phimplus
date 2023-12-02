import type { Metadata } from "next";
import MUIThemeProvider, { poppins } from "~/theme/MUIThemeProvider";
import "./index.css";
import React, { Suspense } from "react";
import Footer from "~/components/shared/footer";
import Header from "~/components/shared/header";
import { APP_CONFIG } from "~/helpers/config";
import AppContextProvider from "~/provider/AppContextProvider";
import { fetchListCategory, fetchListCountries } from "~/services/appApi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import LoadingSpinner from "~/components/UI/LoadingSpinner";

export const metadata: Metadata = {
  metadataBase: new URL("https://facebook.com"),
  title: {
    template: `%s | ${APP_CONFIG.NAME}`,
    default: APP_CONFIG.NAME,
  },
  icons: {
    icon: ["/favicon.ico?v=1"],
    apple: ["apple-touch-icon.png?v=1"],
    shortcut: ["apple-touch-icon.png"],
  },
  manifest: "site.webmanifest",
  applicationName: APP_CONFIG.NAME,
  description: APP_CONFIG.DESCRIPTION,
  authors: [
    {
      name: "W.D",
    },
    {
      name: "Q.H",
    },
  ],
  creator: APP_CONFIG.NAME,
  publisher: APP_CONFIG.NAME,
  openGraph: {
    images: [],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await fetchListCategory();
  const countries = await fetchListCountries();

  return (
    <html lang="vi">
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
