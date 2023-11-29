'use client';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';
import Link from 'next/link';
import Content from './Content';
import { APP_ROUTERS } from '~/helpers/config';
import Skeleton from '../Skeleton/ImageSkeleton';
type Props = {
  slug: string;
  thumbnail: string;
  name: string;
  view?: number;
  tagTitle: string;
};

export default function MovieCard({
  slug,
  thumbnail,
  name,
  view,
  tagTitle,
}: Props) {
  const [showSkeleton, setShowSkeleton] = useState<boolean>(true);

  if (!view || view < 0) view = 3;
  if (view && view > 5) view = 5;

  const hideSkeleton = () => {
    setShowSkeleton(false);
  };
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
      <Skeleton
        showSkeleton={showSkeleton}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
        }}
      />

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
            src={thumbnail}
            alt={name}
            fill
            loading='eager'
            sizes='100% 100%'
            style={{
              objectFit: 'cover',
              top: 0,
              left: 0,
              position: 'absolute',
              zIndex: 1,
              transition: 'all 0.3s linear',
            }}
            onLoad={hideSkeleton}
          />
          <Content name={name} view={view} tagTitle={tagTitle} slug={slug} />
        </Link>
      </CardContent>
    </Card>
  );
}
