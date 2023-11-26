import Container from "@mui/material/Container";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";
import Grid from "@mui/material/Grid";
import TopList from "~/app/_pages/xem-phim/TopList";
import { fetchListNewMovie, getMovieBySlug } from "~/services/movieApi";

import { notFound } from "next/navigation";
import { handleError } from "~/services/request";
import Screen from "~/app/_pages/xem-phim/Screen";
import CustomBreadcrumbs from "~/app/_pages/xem-phim/CustomBreadcrumbs";
import MovieContextProvider from "~/provider/MovieContextProvider";
import Review from "~/components/shared/Review/Review";

type Props = {
  params: { slug: string };
};
export async function generateMetadata(
  { params: { slug } }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const movie = await getMovieBySlug(slug);
  const previousImages = (await parent).openGraph?.images || [];
  if (!movie.status) {
    return {};
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
export default async function WatchMoviePage({ params: { slug } }: Props) {
  const movie = await getMovieBySlug(slug);

  if (!movie.data) {
    notFound();
  }

  if (!movie.status) {
    handleError(movie);
  }

  const newMoviesAtCurrentYear = await fetchListNewMovie();
  return (
    <MovieContextProvider movie={movie?.data}>
      <Container
        component="main"
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
        <Grid container spacing={0} columnSpacing={16}>
          <Grid item xs={12} mb={8}>
            <CustomBreadcrumbs name={movie.data.item.name} />
          </Grid>
          <Grid item xs={12} md={9}>
            <Screen movie={movie.data.item} />
          </Grid>
          <Grid item md={3} display={{ xs: "none", md: "block" }}>
            <TopList items={newMoviesAtCurrentYear.items.splice(0, 8)} />
          </Grid>
          <Grid item md={9} xs={12}>
            <Review />
          </Grid>
        </Grid>
      </Container>
    </MovieContextProvider>
  );
}
