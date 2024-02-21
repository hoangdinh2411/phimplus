'use client';
import React from 'react';
import AdsModal from '~/app/components/UI/AdsModal/AdsModal';
import { fetchListCategory, fetchListCountries } from '~/services/appApi';
import { Item } from '~/types/app';
import Container from '@mui/system/Container';
import Link from 'next/link';
import { ADS } from '~/helpers/config';
export type InitialStateAppContextType = {
  categories: Item[];
  countries: Item[];
};
const initialState: InitialStateAppContextType = {
  categories: [],
  countries: [],
};
const AppContext = React.createContext(initialState);

export const useAppContext = () => React.useContext(AppContext);
export default function AppContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [categories, setCategories] = React.useState<Item[]>([]);
  const [countries, setCountries] = React.useState<Item[]>([]);
  const [openAdsModal, setOpenAdsModal] = React.useState<boolean>(true);
  React.useEffect(() => {
    if (categories.length > 0 && countries.length > 0) return;
    async function fetchAll() {
      return await Promise.all([fetchListCategory(), fetchListCountries()]);
    }
    fetchAll().then(([categories, countries]) => {
      setCategories(categories);
      setCountries(countries);
    });
  }, []);
  return (
    <AppContext.Provider
      value={{
        categories,
        countries,
      }}
    >
      <AdsModal
        open={openAdsModal}
        onClose={() => {
          setOpenAdsModal(false);
        }}
      />
      <Container
        maxWidth='xl'
        sx={{
          position: 'fixed',
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 50,
        }}
      >
        <Link
          href={ADS.URL}
          style={{
            height: '90px',
            width: '980px',
            backgroundImage: 'url(/ads/pet-980-x-90.gif)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
          target='_blank'
        ></Link>
      </Container>
      {children}
    </AppContext.Provider>
  );
}
