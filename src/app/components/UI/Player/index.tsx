'use client';
import React, { IframeHTMLAttributes } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Skeleton from '../Skeleton/ImageSkeleton';

interface PlayerProps extends IframeHTMLAttributes<HTMLIFrameElement> {}

function Player(props: PlayerProps) {
  const { style, src, ...rest } = props;
  const [showSkeleton, setShowSkeleton] = React.useState<boolean>(true);

  const hideSkeleton = () => {
    setShowSkeleton(false);
  };

  React.useEffect(() => {
    setShowSkeleton(true);
  }, [src]);
  return (
    <Card
      component='section'
      sx={{
        backgroundColor: 'transparent',
        width: '100%',
        p: '0 !important',
        height: {
          md: 650,
          xs: 450,
        },
        position: 'relative',
        ...style,
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
          p: '0 !important',
          height: '100%',
          zIndex: 1,
        }}
      >
        <iframe
          style={{
            border: 'none ',
          }}
          src={src}
          width='100%'
          height='100%'
          onLoad={hideSkeleton}
          {...rest}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      </CardContent>
    </Card>
  );
}

export default React.memo(Player);
