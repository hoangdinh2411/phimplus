import React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface TagProps extends BoxProps {
  title: string;
}

export default function Tag(props: TagProps) {
  const { title, sx, ...rest } = props;
  return (
    <Box
      {...rest}
      component='span'
      bgcolor={'primary.dark'}
      color={'text.primary'}
      sx={{
        zIndex: 2,
        borderRadius: 2,
        padding: {
          lg: '4px 8px',
          xs: '0 6px',
        },
        width: 'fit-content',
        whiteSpace: 'nowrap',
        ...sx,
      }}
    >
      <Typography
        variant='caption'
        component='span'
        minWidth={16}
        sx={{
          transform: {
            lg: 'scale(1)',
            xs: 'scale(0.8)',
          },
        }}
        textAlign='center'
      >
        {title}
      </Typography>
    </Box>
  );
}
