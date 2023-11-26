import React from 'react';
import Grid from '@mui/material/Grid';
import Cart from '~/components/UI/Card';
import { IMovieDetail } from '~/types/movie';
import { BoxProps } from '@mui/material';
import Box from '@mui/material/Box';
import Title from './Title';
interface Props extends BoxProps {
  listMovie: IMovieDetail[];
  title?: string;
  seeMore?: boolean;
  href?: string;
  limit?: number;
}
export default function ListMovie({
  listMovie,
  title,
  seeMore = true,
  href,
  limit,
  ...rest
}: Props) {
  return (
    <Box mb={16} {...rest} component='section'>
      <Title seeMore={seeMore} title={title} href={href} />
      <Grid spacing={8} container my={8} ml={-8}>
        {listMovie &&
          listMovie.map((item, index) => {
            if (limit && index >= limit) return null;
            return (
              <Grid key={index} item md={3} sm={4} xs={6}>
                <Cart
                  name={item.name}
                  slug={item.slug}
                  thumbnail={item.thumb_url}
                  tagTitle={item.category[0].name}
                />
              </Grid>
            );
          })}
      </Grid>
    </Box>
  );
}
