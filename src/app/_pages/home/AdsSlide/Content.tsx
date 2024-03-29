'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { color } from '~/theme/variables/palette';
import { IMovieDetail } from '~/types/movie';
import { joinToStringFromArray } from '~/helpers/functions';
import Image from 'next/image';
import { APP_ROUTERS } from '~/helpers/config';
import Link from 'next/link';
import Tag from '~/app/components/UI/Tag';

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

  return (
    <Box
      component='div'
      position='relative'
      sx={{
        height: '100%',
      }}
    >
      <Box
        component='figure'
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
        >
          <Image
            quality={75}
            src={'https://img.ophim9.cc/uploads/movies/' + item.poster_url}
            alt={item.name}
            fill={true}
            loading='lazy'
            sizes='100%'
            placeholder='blur'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYA'
            style={{
              objectFit: 'contain',
              top: 0,
              left: 0,
              position: 'absolute',
              zIndex: 2,
              transition: 'all 0.3s linear',
            }}
          />
        </Link>
      </Box>
      <Box
        component='figcaption'
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
              fontSize: {
                xs: 24,
                md: 30,
                lg: 60,
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
            fontSize={20}
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
              variant='subtitle2'
              component='span'
              px={4}
              sx={{ color: 'primary.dark' }}
            >
              {quality}
            </Typography>
            <Typography
              variant='subtitle2'
              component='span'
              px={4}
              sx={{ borderLeft: '1px solid', borderRight: '1px solid' }}
            >
              {time}
            </Typography>

            <Typography variant='subtitle2' component='span' px={4}>
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
              fontSize={20}
            >
              <StarOutlinedIcon
                sx={{ color: color.yellow }}
                fontSize='medium'
              />
              5
            </Typography>

            <Typography
              variant='subtitle2'
              px={2}
              component='span'
              fontSize={16}
            >
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
