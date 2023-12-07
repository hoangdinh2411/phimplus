import React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "~/components/UI/MovieCard";
import { IMovieDetail } from "~/types/movie";
import { BoxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Title from "~/app/_pages/home/ListMovie/Title";
interface Props extends BoxProps {
  listMovie: IMovieDetail[];
  title?: string;
  seeMore?: boolean;
  href?: string;
  limit?: number;
}
export default function ListCategoryMovie({
  listMovie,
  title,
  seeMore = true,
  href,
  limit,
  ...rest
}: Props) {
  return (
    <Box
      mb={{
        xs: 16,
        lg: 20,
      }}
      {...rest}
      component="section"
    >
      <Title seeMore={seeMore} title={title} href={href} />
      <Grid spacing={8} container my={4} ml={-8}>
        {listMovie &&
          listMovie.map((item, index) => {
            if (limit && index >= limit) return null;
            return (
              <Grid key={index} item md={3} sm={4} xs={6}>
                <MovieCard
                  name={item.name}
                  slug={item.slug}
                  thumbnail={item.thumb_url}
                  tagTitle={item.category && item.category[0].name}
                />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
