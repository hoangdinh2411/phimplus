import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import React from 'react';
import Typography from '@mui/material/Typography';
import Brand from '../header/Brand';
import NextLink from 'next/link';
import { APP_CONFIG, APP_ROUTERS } from '~/helpers/config';

export default function Logo() {
  return (
    <Grid
      item
      xs={12}
      lg={5}
      sx={{
        mb: {
          xs: 30,
          lg: 0,
        },
      }}
    >
      <Grid xs={12} mb={8} item>
        <Brand />
      </Grid>
      <Grid xs={12} item>
        <Typography
          variant='caption'
          component='p'
          fontSize='12px'
          fontWeight={500}
          lineHeight={2}
        >
          <Link
            href={APP_ROUTERS.HOME}
            underline='none'
            color='primary.dark'
            component={NextLink}
          >
            {APP_CONFIG.NAME}
          </Link>{' '}
          - Trang xem phim Online với giao diện mới được bố trí và thiết kế thân
          thiện với người dùng. Nguồn phim được tổng hợp từ các website lớn với
          đa dạng các đầu phim và thể loại vô cùng phong phú.
        </Typography>
      </Grid>
    </Grid>
  );
}
