import Container from "@mui/material/Container";
import React from "react";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { GALLERY } from "~/helpers/config";
import {
  fetchListCartoonByGallery,
  fetchListNewMovie,
  fetchListSeriesMovieByGallery,
  fetchListSingleMovieByGallery,
  fetchUpcomingMovie,
} from "~/services/movieApi";
import Box from "@mui/material/Box";
import AdsSlideSkeleton from "~/components/UI/Skeleton/AdsSlideSkeleton";
import { IListMovieWithSeo } from "~/types/movie";
const AdsSlide = dynamic(() => import("./_pages/home/AdsSlide/AdsSlide"), {
  loading: () => <AdsSlideSkeleton />,
  ssr: false,
});
const MovieSlide = dynamic(
  () => import("~/components/shared/slide/MovieSlide"),
  { ssr: false }
);
const ListMovie = dynamic(() => import("~/app/_pages/home/ListMovie"), {
  ssr: false,
});

export async function generateMetadata(parent: any): Promise<Metadata> {
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
  const upcomingMovies = await fetchUpcomingMovie();
  const singleMovie: Promise<IListMovieWithSeo> =
    fetchListSingleMovieByGallery();
  const seriesMovie: Promise<IListMovieWithSeo> =
    fetchListSeriesMovieByGallery();
  const cartoonMovie: Promise<IListMovieWithSeo> = fetchListCartoonByGallery();
  return (
    <Box>
      <AdsSlide items={newMovies.items.slice(0, 6)} />
      <Container maxWidth="lg" component="section">
        <MovieSlide
          items={upcomingMovies?.items}
          title={GALLERY.upcoming.name}
          href={GALLERY.upcoming.slug}
        />
      </Container>
      <Container
        component="main"
        maxWidth={false}
        disableGutters
        sx={{
          py: 10,
          px: {
            xs: 4,
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
