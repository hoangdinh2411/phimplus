'use client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Link from 'next/link';
import Content from './Content';
import { APP_ROUTERS } from '~/helpers/config';
import React from 'react';
type Props = {
  slug: string;
  thumbnail: string;
  name: string;
  view?: number;
  tagTitle: string;
};

function MovieCard({ slug, thumbnail, name, view, tagTitle }: Props) {
  if (!view || view < 0) view = 3;
  if (view && view > 5) view = 5;

  return (
    <Card
      sx={{
        position: 'relative',
        width: '100%',
        height: {
          md: 400,
          xs: 350,
        },
        borderRadius: {
          lg: 6,
          xs: 2,
        },
        overflow: 'hidden',
        ':hover': {
          '.see_more': {
            visibility: 'visible',
            opacity: 1,
            height: 40,
          },
        },
      }}
    >
      <CardContent
        component='figure'
        sx={{
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          p: 0,
          ':last-child': {
            p: 0,
          },
          ':hover': {
            img: {
              transform: 'scale(1.05)',
            },
            '.see_more': {
              display: {
                lg: 'block',
              },
            },
          },
        }}
      >
        <Link
          href={APP_ROUTERS.MOVIE + slug}
          prefetch={false}
          title={name}
          style={{
            zIndex: 1,
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={'https://img.ophim9.cc/uploads/movies/' + thumbnail}
            alt={name}
            quality={50}
            fill
            loading='lazy'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYA'
            placeholder='blur'
            sizes='(min-width: 270px) 20vh, 270px'
            style={{
              objectFit: 'cover',
              top: 0,
              left: 0,
              position: 'absolute',
              zIndex: 1,
              transition: 'all 0.3s linear',
            }}
          />
          <Content name={name} view={view} tagTitle={tagTitle} slug={slug} />
        </Link>
      </CardContent>
    </Card>
  );
}

export default React.memo(MovieCard);
