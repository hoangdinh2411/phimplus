'use client';
import React from 'react';
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
  categories,
  countries,
}: {
  children: React.ReactNode;
  categories: Item[];
  countries: Item[];
}) {
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
