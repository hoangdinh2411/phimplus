'use client';
import React from 'react';
import { fetchListCategory, fetchListCountries } from '~/services/appApi';
import { Item } from '~/types/app';

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
      {children}
    </AppContext.Provider>
  );
}
