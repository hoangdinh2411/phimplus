'use client';
import Box from '@mui/material/Box';
import { usePathname } from 'next/navigation';
import React from 'react';
import { APP_CONFIG } from '~/helpers/config';
import { initFacebookSdk } from '~/helpers/loadSDKFacebook';
import { color } from '~/theme/variables/palette';

export default function CommentsForInFormation() {
  React.useEffect(() => {
    initFacebookSdk();
  });
  const path = usePathname();
  console.log(path);

  return (
    <React.Fragment>
      <Box
        component='div'
        py={10}
        sx={{ backgroundColor: color.white, mt: 16 }}
      >
        <div
          className='fb-comments'
          data-href={`${APP_CONFIG.DOMAIN}${path}`}
          data-width='100%'
          data-numposts='5'
          // data-lazy={true}
          data-colorscheme='light'
        ></div>
      </Box>
    </React.Fragment>
  );
}
