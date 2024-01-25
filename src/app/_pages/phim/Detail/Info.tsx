'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
// import ThumbDownOutlinedIcon from "@mui/icons-material/ThumbDownOutlined";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';
import useMovie from '~/hooks/useMovie';
import { APP_ROUTERS } from '~/helpers/config';
import React from 'react';
import Link from 'next/link';
import LikeAndSharePlugin from '~/app/components/shared/likeAndSharePlugin.tsx';
export default function Info() {
  const { movie } = useMovie();

  const getMovieStatus = React.useCallback(() => {
    switch (movie.item.episode_current) {
      case 'Full':
        return 'Full';
      case 'Trailer':
        return 'Trailer';

      default:
        return movie.item.episode_current;
    }
  }, [movie.item.episode_current]);
  return (
    <Box
      component='aside'
      sx={{
        my: {
          md: 0,
          xs: 20,
        },
        pl: {
          xs: 0,
          md: 20,
        },
        minWidth: {
          xs: 300,
          md: '100%',
        },
        height: {
          lg: 450,
          xs: '100%',
        },
        marginX: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography pb={12} variant='h4' component='h4' fontWeight='600'>
        {movie.item.name}
      </Typography>

      <Typography
        pb={8}
        variant='h6'
        component='p'
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Tên gốc:
        <Typography
          variant='caption'
          component='span'
          color='primary.dark'
          ml={4}
        >
          {movie.item.origin_name}
        </Typography>
      </Typography>
      <Typography
        pb={8}
        variant='h6'
        component='p'
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Số tập:
        <Typography
          variant='caption'
          component='span'
          color='primary.dark'
          ml={4}
        >
          {movie.item.episode_total}
        </Typography>
      </Typography>
      <Typography
        pb={8}
        variant='h6'
        component='p'
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Mới nhất:
        <Typography
          variant='caption'
          component='span'
          color='primary.dark'
          ml={4}
        >
          {getMovieStatus()}
        </Typography>
      </Typography>
      <Typography
        pb={8}
        variant='h6'
        component='p'
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Năm sản xuất:
        <Typography
          variant='caption'
          component='span'
          color='primary.dark'
          ml={4}
        >
          {movie.item.year}
        </Typography>
      </Typography>
      <Typography
        pb={8}
        variant='h6'
        component='p'
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Thể loại:
        <>
          {movie.item.category.map((item) => (
            <Link
              key={item.id}
              href={APP_ROUTERS.CATEGORY + item.slug}
              prefetch={true}
            >
              <Typography
                variant='caption'
                component='span'
                ml={4}
                color='primary.dark'
                sx={{
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </>
      </Typography>
      <Typography
        pb={8}
        variant='h6'
        component='p'
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Đạo diễn:
        <Typography
          variant='caption'
          component='span'
          color='primary.dark'
          ml={4}
        >
          {movie.item.director.join('- ')}
        </Typography>
      </Typography>

      <LikeAndSharePlugin />

      <Box
        width={200}
        mt={8}
        sx={{
          display: {
            md: 'flex',
            xs: 'none',
          },
        }}
      >
        <Link href={APP_ROUTERS.WATCH + movie.item.slug} prefetch={false}>
          <Button variant='contained' size='large'>
            <PlayArrowIcon />
            Xem phim{' '}
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
