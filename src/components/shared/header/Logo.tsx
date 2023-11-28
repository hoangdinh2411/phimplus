'use client';
import React from 'react';
// import Link from 'next/link';
import Box from '@mui/material/Box';
import Brand from './Brand';
import MenuBarMobile from './MenuBarMobile';

function Logo() {
  return (
    <Box component='aside' sx={{ minWidth: 220, display: 'flex' }}>
      <MenuBarMobile />
      {/* Break point large */}
      <Brand />
    </Box>
  );
}

export default React.memo(Logo);
