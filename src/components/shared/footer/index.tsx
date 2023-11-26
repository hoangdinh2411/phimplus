import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Logo from './Logo';
import Menu from './Menu';
export default function Footer() {
  return (
    <Container
      maxWidth={false}
      component='footer'
      disableGutters
      sx={{
        py: 30,
      }}
    >
      <Grid
        spacing={0}
        sx={{
          mt: 0,
          mb: 30,
          mx: 0,
          px: {
            xs: 8,
            lg: 0,
          },
        }}
        container
      >
        <Logo />
        <Grid
          item
          xs={0}
          lg={1}
          sx={{
            display: {
              xs: 'none',
              lg: 'block',
            },
            px: {
              xs: 8,
              lg: 0,
            },
          }}
        />
        <Menu />
      </Grid>
      <Typography
        variant='body1'
        align='center'
        fontSize='14px'
        fontWeight={500}
        lineHeight='32px'
        color='textPrimary'
      >
        © PhimPlus.com - 2023
      </Typography>
    </Container>
  );
}
