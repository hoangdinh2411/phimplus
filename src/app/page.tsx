import Container from '@mui/material/Container';
import React from 'react';
import { Metadata, ResolvingMetadata } from 'next';
import dynamic from 'next/dynamic';
import { GALLERY } from '~/helpers/config';
import {
  fetchListCartoonByGallery,
  fetchListNewMovie,
  fetchListSeriesMovieByGallery,
  fetchListSingleMovieByGallery,
} from '~/services/movieApi';
import AdsSlideSkeleton from '~/components/UI/Skeleton/AdsSlideSkeleton';
import ListMovieSkeleton from '~/components/UI/Skeleton/ListMovieSkeleton';
import Box from '@mui/material/Box';
const AdsSlide = dynamic(() => import('./_pages/home/AdsSlide/AdsSlide'), {
  loading: () => <AdsSlideSkeleton />,
  ssr: false,
});
const MovieSlide = dynamic(
  () => import('~/components/shared/slide/MovieSlide'),
  { loading: () => <ListMovieSkeleton />, ssr: false }
);
const ListMovie = dynamic(() => import('~/app/_pages/home/ListMovie'), {
  loading: () => <ListMovieSkeleton />,
  ssr: false,
});

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const newMovies = await fetchListNewMovie();
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: newMovies.seoOnPage.titleHead || newMovies.titlePage,
    description: newMovies.seoOnPage?.descriptionHead,
    openGraph: {
      title: newMovies.titlePage,
      description: newMovies.seoOnPage?.descriptionHead,
      images: [...newMovies.seoOnPage.og_image, ...previousImages],
    },
  };
}

export default async function Home() {
  const newMovies = await fetchListNewMovie();
  const singleMovie = await fetchListSingleMovieByGallery();
  const seriesMovie = await fetchListSeriesMovieByGallery();
  const cartoonMovie = await fetchListCartoonByGallery();
  return (
    <Box>
      <AdsSlide items={newMovies.items} />
      <Container maxWidth='lg' component='section'>
        <MovieSlide
          items={newMovies?.items}
          title={GALLERY.upcoming.name}
          href={GALLERY.upcoming.slug}
        />
      </Container>
      <Container
        component='main'
        maxWidth={false}
        disableGutters
        sx={{
          py: 10,
          px: {
            xs: 8,
            lg: 0,
          },
        }}
      >
        <ListMovie
          limit={8}
          listMovie={singleMovie.items}
          mb={16}
          title={GALLERY.single.name}
          href={GALLERY.single.slug}
        />
        <ListMovie
          limit={8}
          listMovie={seriesMovie.items}
          mb={16}
          title={GALLERY.series.name}
          href={GALLERY.series.slug}
        />
        <ListMovie
          limit={8}
          listMovie={cartoonMovie.items}
          mb={16}
          title={GALLERY.cartoon.name}
          href={GALLERY.cartoon.slug}
        />
      </Container>
    </Box>
  );
}
