import React from 'react';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { APP_CONFIG, APP_ROUTERS } from '~/helpers/config';
type Props = {
  size?: 'md' | 'sm';
  position?: 'left' | 'right' | 'center';
};

export default function Brand({ size = 'md', position = 'left' }: Props) {
  return (
    <Link
      variant={size === 'md' ? 'h5' : 'h6'}
      href={APP_ROUTERS.HOME}
      component={NextLink}
      prefetch={false}
      color={'primary.dark'}
      sx={{
        textTransform: 'uppercase',
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        justifyContent: position,
        width: {
          xs: '100%',
        },
      }}
    >
      {APP_CONFIG.NAME}
    </Link>
  );
}
