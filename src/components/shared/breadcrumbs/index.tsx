'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Button from '@mui/material/Button';
import { APP_ROUTERS } from '~/helpers/config';

export default function BreadCrumbs() {
  const router = useRouter();
  const pathname = usePathname();
  const paths = pathname.split('/').map((path) => {
    return path.replaceAll('-', ' ');
  });

  const handleNavigate = (path: string) => () => {
    if (path === '') {
      router.push(APP_ROUTERS.HOME);
    } else {
      router.push(path);
    }
  };

  return (
    <Container
      disableGutters
      maxWidth='lg'
      sx={{
        pt: 4,
        display: pathname.endsWith('/') ? 'none' : 'block',
      }}
    >
      <Breadcrumbs aria-label='breadcrumb'>
        {paths.map((path, index) => {
          return (
            <Button
              key={path + index}
              onClick={handleNavigate(path)}
              variant='text'
              size='small'
              disabled={index + 1 === paths.length}
              sx={{
                textTransform: 'capitalize',
                p: 0,
                backgroundColor: 'transparent',
                '.MuiTouchRipple-root': {
                  display: 'none',
                },
                '&:hover': {
                  color: 'error.main',
                  backgroundColor: 'transparent',
                },
                '&:disabled': {
                  color: 'error.main',
                },
              }}
            >
              {path === '' ? 'Trang chủ' : path}
            </Button>
          );
        })}
      </Breadcrumbs>
    </Container>
  );
}
