'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { color } from '~/theme/variables/palette';
import Tag from '~/components/UI/Tag';
import { IMovieDetail } from '~/types/movie';
import { joinToStringFromArray } from '~/helpers/functions';
import Skeleton from '~/components/UI/Skeleton/ImageSkeleton';
import Image from 'next/image';
import { APP_ROUTERS } from '~/helpers/config';
import Link from 'next/link';

interface Props {
  item: IMovieDetail;
}
export default function Content({ item }: Props) {
  const {
    name,
    year,
    origin_name,
    quality,
    time,
    lang,
    country,
    category,
    slug,
  } = item;

  const [showSkeleton, setShowSkeleton] = React.useState<boolean>(true);
  const hideSkeleton = () => {
    setShowSkeleton(false);
  };
  return (
    <Box
      component='div'
      position='relative'
      sx={{
        height: '100%',
      }}
    >
      <Skeleton showSkeleton={showSkeleton} />
      <Box
        component='div'
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'background.paper',
          opacity: 0.8,
          zIndex: 1,
        }}
      >
        <Link
          href={APP_ROUTERS.MOVIE + slug}
          style={{
            zIndex: 2,
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '100%',
          }}
          prefetch={false}
        >
          <Image
            src={item.poster_url}
            alt={item.name}
            fill={true}
            priority
            sizes='100% 100%'
            style={{
              top: 0,
              left: 0,
              position: 'absolute',
              zIndex: 2,
              transition: 'all 0.3s linear',
            }}
            onLoad={hideSkeleton}
          />
        </Link>
      </Box>
      <Box
        component='div'
        position='absolute'
        bottom='10%'
        left='5%'
        color='text.primary'
        zIndex={3}
        sx={{
          width: '90%',
        }}
      >
        <Link
          href={APP_ROUTERS.MOVIE + slug}
          style={{
            color: 'inherit',
          }}
          prefetch={false}
        >
          <Tag title='TOP' />
          <Typography
            variant='body1'
            component='h6'
            fontWeight={600}
            my={4}
            textOverflow='ellipsis'
            overflow='hidden'
            sx={{
              whiteSpace: 'nowrap',
              maxWidth: '100%',
              '@media (min-width: 0)': {
                fontSize: 30,
              },
              '@media (min-width: 992px)': {
                fontSize: 60,
              },
            }}
          >
            {name}
          </Typography>
          <Typography
            mb={4}
            variant='subtitle2'
            component='p'
            fontWeight={600}
            fontSize={24}
          >
            -{origin_name}-
          </Typography>
          <Box
            component='p'
            my={4}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <Typography
              variant='body1'
              component='span'
              pr={4}
              sx={{ borderRight: '1px solid' }}
            >
              {year}
            </Typography>
            <Typography
              variant='body1'
              component='span'
              px={4}
              sx={{ color: 'primary.dark' }}
            >
              {quality}
            </Typography>
            <Typography
              variant='body1'
              component='span'
              px={4}
              sx={{ borderLeft: '1px solid', borderRight: '1px solid' }}
            >
              {time}
            </Typography>
            <Typography variant='body1' component='span' px={4}>
              {lang}
            </Typography>
          </Box>
          <Box
            mt={4}
            mb={8}
            component='p'
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'left',
            }}
          >
            <Typography
              variant='body1'
              component='span'
              sx={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <StarOutlinedIcon
                sx={{ color: color.yellow }}
                fontSize='medium'
              />
              <Typography
                variant='body1'
                component='span'
                color='primary'
                fontSize={20}
              >
                5
              </Typography>
            </Typography>
            <Typography variant='subtitle2' px={2} component='span'>
              -
            </Typography>
            <Typography variant='subtitle2' component='span'>
              {joinToStringFromArray(country)}
            </Typography>
            <Typography variant='subtitle2' px={2} component='span'>
              -
            </Typography>

            <Typography
              variant='subtitle2'
              px={2}
              component='span'
              color='error'
            >
              {joinToStringFromArray(category)}
            </Typography>
          </Box>
        </Link>
        <Link href={APP_ROUTERS.WATCH + slug} prefetch={false}>
          <Button
            variant='contained'
            size='large'
            sx={{
              zIndex: 4,
            }}
          >
            <PlayArrowIcon /> WATCH
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
