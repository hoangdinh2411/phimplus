import React from 'react';

import { notFound } from 'next/navigation';
import { getMovieBySlug } from '~/services/movieApi';
import type { Metadata, ResolvingMetadata } from 'next';
import Container from '@mui/material/Container';

import Content from '~/app/_pages/phim/Content';
import { IMovieWithSeo } from '~/types/movie';
import { IResponse } from '~/services/request';

type Props = {
  params: { slug: string };
};
export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const movie = await getMovieBySlug(slug);
  const previousImages = (await parent).openGraph?.images || [];
  if (!movie?.data) {
    return notFound();
  }
  return {
    title: movie.data.seoOnPage?.titleHead || movie.data.titlePage,
    description: movie.data.seoOnPage?.descriptionHead,
    openGraph: {
      title: movie.data.titlePage,
      description: movie.data.seoOnPage?.descriptionHead,
      images: [...movie.data.seoOnPage.og_image, ...previousImages],
    },
  };
}
export default function MovieDetailPage({ params: { slug } }: Props) {
  if (!slug) {
    notFound();
  }

  const moviePromise: Promise<IResponse<IMovieWithSeo>> = getMovieBySlug(slug);

  return (
    <Container
      component='main'
      maxWidth={false}
      disableGutters
      sx={{
        py: 30,
        px: {
          xs: 8,
          lg: 0,
        },
      }}
    >
      <Content moviePromise={moviePromise} />
    </Container>
  );
}
