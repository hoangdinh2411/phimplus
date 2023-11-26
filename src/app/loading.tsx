import React from 'react';
import LoadingSpinner from '~/components/UI/LoadingSpinner';
import Container from '@mui/material/Container';
import { color } from '~/theme/variables/palette';

export default function loading() {
  return (
    <Container
      maxWidth='xl'
      disableGutters
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: color.black,
      }}
    >
      <LoadingSpinner />
    </Container>
  );
}
