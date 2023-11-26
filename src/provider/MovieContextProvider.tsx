"use client";
import React, { useEffect } from "react";
import { initFacebookSdk } from "~/helpers/loadSDKFacebook";
import { IMovieWithSeo } from "~/types/movie";

type InitialStateType = {
  movie: IMovieWithSeo;
};
const initialState: InitialStateType = {
  movie: {} as IMovieWithSeo,
};
const MovieContext = React.createContext(initialState);

export const useMovieContext = () => React.useContext(MovieContext);
export default function MovieContextProvider({
  children,
  movie,
}: {
  children: React.ReactNode;
  movie: IMovieWithSeo;
}) {
  useEffect(() => {
    initFacebookSdk();
  });
  return (
    <MovieContext.Provider
      value={{
        movie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
