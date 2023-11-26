import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Info from './Info';
import dynamic from 'next/dynamic';
import Thumbnail from '../Thumbnail/Thumbnail';
const AboutMovie = dynamic(() => import('./AboutMovie'), {
  ssr: false,
});

export default function Detail() {
  return (
    <Box component='section'>
      <Grid container spacing={0} mb={8}>
        <Grid item md={3} xs={12}>
          <Thumbnail />
        </Grid>
        <Grid item md={9} xs={12}>
          <Info />
        </Grid>
        <Grid item sm={12} xs={12}>
          <AboutMovie />
        </Grid>
      </Grid>
    </Box>
  );
}
