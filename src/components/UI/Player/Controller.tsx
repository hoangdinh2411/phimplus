import React from 'react';
import Box from '@mui/material/Box';
// import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
// import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
type Props = {};

export default function Controller({}: Props) {
  return (
    <Box height='100%' color='text.primary'>
      <Box
        sx={{
          py: 0,
          px: 15,
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <IconButton aria-label='play/pause'>
          <PlayCircleIcon
            color='primary'
            sx={{
              fontSize: 42,
            }}
          />
        </IconButton>
        <IconButton aria-label='play/pause'>
          <VolumeUpIcon
            color='primary'
            sx={{
              fontSize: 28,
            }}
          />
          {/* <VolumeOffIcon
            color='primary'
            sx={{
              fontSize: 28,
            }}
          /> */}
        </IconButton>
      </Box>
    </Box>
  );
}
