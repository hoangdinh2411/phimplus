import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Theme } from '@emotion/react';
import { SxProps } from '@mui/system/styleFunctionSx';
type Props = {
  showSkeleton: boolean;
  sx?: SxProps<Theme> | undefined;
};
function ImageSkeleton({ showSkeleton, sx, ...rest }: Props) {
  return (
    <Skeleton
      animation='wave'
      variant='rounded'
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: 'background.paper',
        display: showSkeleton ? 'block' : 'none',
        ...sx,
      }}
      {...rest}
    ></Skeleton>
  );
}

export default React.memo(ImageSkeleton);
