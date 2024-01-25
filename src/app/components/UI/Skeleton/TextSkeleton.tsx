import React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function TextSkeleton() {
  return (
    <Skeleton
      variant='text'
      animation='wave'
      sx={{ fontSize: '24px', borderRadius: 2, width: '100%', minHeight: 75 }}
    />
  );
}
