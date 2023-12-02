import React from "react";
import dynamic from "next/dynamic";
import Detail from "../../_pages/phim/Detail/Detail";
// import Trailer from "../../_pages/phim/Trailer/Trailer";
const Trailer = dynamic(() => import("../../_pages/phim/Trailer/Trailer"), {
  ssr: false,
});
import Review from "../../../components/shared/Review/Review";
import MovieContextProvider from "~/provider/MovieContextProvider";
import { notFound } from "next/navigation";
import { getMovieBySlug } from "~/services/movieApi";
import type { Metadata, ResolvingMetadata } from "next";
import Container from "@mui/material/Container";

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
export default async function MovieDetailPage({ params: { slug } }: Props) {
  if (!slug) {
    notFound();
  }

  const movie = await getMovieBySlug(slug);
  if (!movie.status) {
    notFound();
  }

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
        <Detail />
        <Trailer src={movie?.data.item.trailer_url} />
        <Review />
      </Container>
    </MovieContextProvider>
  );
}
