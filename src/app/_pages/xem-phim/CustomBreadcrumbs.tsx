import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { APP_ROUTERS } from '~/helpers/config';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function CustomBreadcrumbs({ name }: { name: string }) {
  return (
    <Breadcrumbs
      aria-label={name}
      separator={<NavigateNextIcon fontSize='small' />}
      sx={{
        textTransform: 'capitalize',
      }}
    >
      <Link underline='hover' href={APP_ROUTERS.HOME}>
        Trang chủ
      </Link>
      <Typography variant='body1' color='primary.dark'>
        {name}
      </Typography>
    </Breadcrumbs>
  );
}
