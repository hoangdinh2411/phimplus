import React from 'react';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { APP_ROUTERS } from '~/helpers/config';
type Props = {
  size?: 'md' | 'sm';
};

export default function Brand({ size = 'md' }: Props) {
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
      }}
    >
      PhimPlus
    </Link>
  );
}
