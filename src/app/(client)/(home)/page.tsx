import Container from '@mui/material/Container';
import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { GALLERY } from '~/helpers/config';
import {
  fetchListCartoonByGallery,
  fetchListNewMovie,
  fetchListSeriesMovieByGallery,
  fetchListSingleMovieByGallery,
} from '~/services/movieApi';
import Box from '@mui/material/Box';
import AdsSlideSkeleton from '~/components/UI/Skeleton/AdsSlideSkeleton';
import { IListMovieWithSeo } from '~/types/movie';
const AdsSlide = dynamic(() => import('~/app/_pages/home/AdsSlide/AdsSlide'), {
  loading: () => <AdsSlideSkeleton />,
  ssr: false,
});
const MovieSlide = dynamic(
  () => import('~/components/shared/slide/MovieSlide'),
  { ssr: false }
);
const ListMovie = dynamic(() => import('~/app/_pages/home/ListMovie'), {
  ssr: false,
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Xem phim FullHD miễn phí mới nhất năm ${new Date().getFullYear()}. Cập nhật nhanh chóng, chất lượng cao và không quảng cáo`,
    description:
      'Website cung cấp phim miễn phí nhanh chất lượng cao. Phim online VietSub, Thuyết minh, lồng tiếng chất lượng Full HD. Nguồn phim vietsub chất lượng cao cập nhật nhanh nhất',
  };
}

export default async function Home() {
  const newMovies = await fetchListNewMovie();
  const singleMovie: Promise<IListMovieWithSeo> =
    fetchListSingleMovieByGallery();
  const seriesMovie: Promise<IListMovieWithSeo> =
    fetchListSeriesMovieByGallery();
  const cartoonMovie: Promise<IListMovieWithSeo> = fetchListCartoonByGallery();
  return (
    <Box>
      <AdsSlide items={newMovies.items.slice(0, 6)} />
      <Container maxWidth='lg' component='section'>
        <MovieSlide
          items={newMovies?.items.slice(6, newMovies.items.length)}
          title={GALLERY.new.name}
          seeMore={false}
        />
      </Container>
      <Container
        component='main'
        maxWidth={false}
        disableGutters
        sx={{
          py: 10,
          px: {
            xs: 2,
            lg: 0,
          },
        }}
      >
        <ListMovie
          limit={8}
          listMovie={singleMovie}
          title={GALLERY.single.name}
          href={GALLERY.single.slug}
          YPosition={600}
        />
        <ListMovie
          limit={8}
          listMovie={seriesMovie}
          title={GALLERY.series.name}
          href={GALLERY.series.slug}
          YPosition={1600}
        />
        <ListMovie
          limit={8}
          listMovie={cartoonMovie}
          title={GALLERY.cartoon.name}
          href={GALLERY.cartoon.slug}
          YPosition={2500}
        />
      </Container>
    </Box>
  );
}
