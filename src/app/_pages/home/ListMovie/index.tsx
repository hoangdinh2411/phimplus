"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "~/components/UI/MovieCard";
import { BoxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Title from "./Title";
import ListMovieSkeleton from "~/components/UI/Skeleton/ListMovieSkeleton";
import { IListMovieWithSeo } from "~/types/movie";
interface Props extends BoxProps {
  listMovie: Promise<IListMovieWithSeo>;
  title?: string;
  seeMore?: boolean;
  href?: string;
  limit?: number;
  YPosition?: number;
}
export default function ListMovie({
  listMovie,
  title,
  seeMore = true,
  href,
  limit,
  YPosition = 0,
  ...rest
}: Props) {
  const [data, setData] = useState<any>(null);
  const [shouldFetchData, setShouldFetchData] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      //call api when shouldFetchData is true
      if (shouldFetchData) {
        try {
          const response = await listMovie;
          setData(response.items);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  });

  //update shouldFetchData when scroll to YPosition
  const handleYScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= YPosition || YPosition === 0) {
      setShouldFetchData(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleYScroll);

    return () => {
      window.removeEventListener("scroll", handleYScroll);
    };
  });

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
      <Grid
        columnSpacing={{ xs: 4, lg: 8 }}
        rowSpacing={{ xs: 4, lg: 8 }}
        container
        my={4}
        ml={-8}
      >
        {data && shouldFetchData ? (
          data?.map((item: any, index: number) => {
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
          })
        ) : (
          <ListMovieSkeleton />
        )}
      </Grid>
    </Box>
  );
}
