import React from 'react';
import MovieContextProvider from '~/provider/MovieContextProvider';
import { IMovieWithSeo } from '~/types/movie';
import Detail from './Detail/Detail';
import Trailer from './Trailer/Trailer';
import Review from '~/components/shared/Review/Review';
import { IResponse } from '~/services/request';
import { notFound } from 'next/navigation';

type Props = {
  moviePromise: Promise<IResponse<IMovieWithSeo>>;
};

export default async function Content({ moviePromise }: Props) {
  const movie = await moviePromise;
  if (!movie.status) {
    notFound();
  }
  return (
    <MovieContextProvider movie={movie.data}>
      <Detail />
      <Trailer src={movie.data.item?.trailer_url} />
      <Review />
    </MovieContextProvider>
  );
}
