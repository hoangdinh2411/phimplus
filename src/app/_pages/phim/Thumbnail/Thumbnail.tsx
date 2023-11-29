'use client';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Box from '@mui/material/Box';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Button from '@mui/material/Button';
import useMovie from '~/hooks/useMovie';
import Tag from '~/components/UI/Tag';
type Props = {};

export default function Thumbnail({}: Props) {
  const { movie } = useMovie();
  return (
    <>
      <Card
        sx={{
          overflow: 'hidden',
          margin: '0 auto',
          minWidth: {
            md: '100%',
            xs: 300,
          },
          maxWidth: {
            xs: 350,
          },
          height: {
            md: '100%',
            xs: 450,
          },
          borderRadius: {
            lg: 6,
            xs: 2,
          },
          position: 'relative',
        }}
      >
        <CardContent
          component='figure'
          sx={{
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={movie.item.thumb_url}
            alt={movie.item.name}
            fill
            loading='eager'
            objectFit='contain'
            sizes='100%,100%'
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
          <Tag
            title={`${movie.item.quality} ${movie.item.lang}`}
            sx={{
              zIndex: 2,
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </CardContent>
      </Card>
      <Box
        sx={{
          display: {
            md: 'none',
            xs: 'flex',
          },
        }}
      >
        <Button
          variant='contained'
          size='large'
          sx={{
            margin: '40px auto 0',
          }}
        >
          <PlayArrowIcon />
          Xem phim{' '}
        </Button>
      </Box>
    </>
  );
}
