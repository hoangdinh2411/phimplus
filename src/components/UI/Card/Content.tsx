import React from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tag from '../Tag';
import Rating from '@mui/material/Rating';
type Props = {
  name: string;
  view: number;
  tagTitle: string;
  slug: string;
};

export default function Content({ name, view, tagTitle, slug }: Props) {
  return (
    <CardContent
      sx={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 2,
        display: 'flex',
        justifyContent: 'flex-end',
        flexDirection: 'column',
        background:
          'linear-gradient(180deg, rgba(29, 29, 29, 0) 0%, rgba(29, 29, 29, 0.8) 80.79%)',
      }}
    >
      <Box>
        <Rating
          name='simple-controlled'
          value={view}
          readOnly
          precision={0.5}
          size='small'
        />
        <Tag
          sx={{
            mb: {
              xs: 4,
              lg: 2,
            },
          }}
          title={tagTitle}
        />
        <Typography
          variant='h5'
          component='h5'
          color='text.secondary'
          fontWeight={500}
          fontSize={{
            lg: 24,
            xs: 16,
          }}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            pb: {
              lg: 2,
              xs: 0,
            },
          }}
        >
          {name}
        </Typography>
      </Box>
      <Typography
        component='span'
        className='see_more'
        color='primary'
        sx={{
          display: {
            lg: 'flex',
            xs: 'none',
          },
          justifyContent: 'left',
          alignItems: 'center',
          visibility: 'hidden',
          opacity: 0,
          height: 0,
          transition: 'all 0.2s linear',
        }}
      >
        Xem phim
        <ArrowForwardIosOutlinedIcon
          sx={{
            fontSize: 12,
            ml: 2,
            mt: 2,
          }}
        />
      </Typography>
    </CardContent>
  );
}
