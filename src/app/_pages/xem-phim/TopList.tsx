import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IMovieDetail } from '~/types/movie';
import { APP_ROUTERS } from '~/helpers/config';

type Props = {
  items: IMovieDetail[];
};
export default function TopList({ items }: Props) {
  return (
    <Box
      sx={{
        position: 'sticky',
        top: 16,
      }}
      bgcolor={'background.paper'}
      borderRadius={2}
      color={'text.primary'}
    >
      <List
        component='nav'
        sx={{
          maxHeight: 'max-content',
          borderRadius: 2,
          overflowY: 'auto',
          '::-webkit-scrollbar': {
            display: 'none',
          },
          position: 'static',
          top: 0,
        }}
      >
        <Box
          py={8}
          mb={4}
          px={8}
          sx={{
            borderBottom: '1px solid ',
            borderColor: 'divider',
          }}
        >
          <Typography
            variant='body1'
            component='p'
            fontWeight='bolder'
            color='error'
            textTransform={'uppercase'}
          >
            Top phim
          </Typography>
        </Box>
        {items.map((item: IMovieDetail) => (
          <Link
            key={item._id}
            href={`${APP_ROUTERS.MOVIE}/${item.slug}`}
            style={{
              color: 'inherit',
            }}
          >
            <ListItemButton
              sx={{
                mb: 2,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box width={46} height={46} mr={8} component='figure'>
                <Image
                  alt={item.name}
                  src={'https://img.ophim9.cc/uploads/movies/' + item.thumb_url}
                  width={46}
                  height={46}
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </Box>
              <Typography variant='caption' fontWeight={500} component='span'>
                {item.name}
              </Typography>
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );
}
