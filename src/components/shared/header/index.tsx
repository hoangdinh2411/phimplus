import Container from '@mui/material/Container';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logo from './Logo';
import Navbar from './Navbar';

export default function Header() {
  return (
    <AppBar position='relative' color='transparent'>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          height: '100%',
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: {
              xs: '0 8px',
              lg: 0,
            },
          }}
        >
          <Logo />
          <Navbar />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
