'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMovie from '~/hooks/useMovie';

export default function AboutMovie() {
  const { movie } = useMovie();
  return (
    <Box component='div' py={20}>
      <Typography variant='h5' component='h5' pb={8}>
        Nội dung phim
      </Typography>
      <p dangerouslySetInnerHTML={{ __html: movie.item.content }} />
    </Box>
  );
}
