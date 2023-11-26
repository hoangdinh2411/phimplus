import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Grid from '@mui/material/Grid';
import { color } from '~/theme/variables/palette';
import Link from 'next/link';

interface Props {
  title?: string;
  seeMore?: boolean;
  href?: string;
}
export default function Title({ title, seeMore, href = '' }: Props) {
  return (
    <Box my={8} component='div'>
      <Grid
        container
        spacing={0}
        direction='row'
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item sm={10} xs={8}>
          <Typography
            variant='h2'
            fontSize='20px'
            fontWeight={500}
            lineHeight='32px'
            noWrap
            sx={{
              display: 'flex',
              alignItems: 'center',
              '@media (min-width: 992px)': {
                fontSize: '24px',
              },
            }}
          >
            {seeMore && <PlayArrowIcon sx={{ color: color.red, mr: 4 }} />}
            {title}
          </Typography>
        </Grid>
        {seeMore ? (
          <Grid
            item
            sm={2}
            xs={4}
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Link href={href}>
              <Typography
                variant='body1'
                fontSize='16px'
                fontWeight={500}
                lineHeight='20px'
                color='text.primary'
                component='span'
                noWrap
                sx={{
                  transition: 'all 0.3s',
                  textAlign: 'end',
                  ':hover': {
                    color: color.red,
                  },
                }}
              >
                Xem thêm
              </Typography>
            </Link>
          </Grid>
        ) : null}
      </Grid>
    </Box>
  );
}
