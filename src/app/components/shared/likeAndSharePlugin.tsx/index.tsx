'use client';
import React from 'react';
import { getDataHref } from '~/helpers/loadSDKFacebook';
import useMovie from '~/hooks/useMovie';

export default function LikeAndSharePlugin() {
  const { movie } = useMovie();
  const href = getDataHref(movie.item.slug);
  return (
    <React.Fragment>
      <div
        className='fb-like'
        data-href={href}
        // data-width="auto"
        data-layout='button_count'
        data-action='like'
        data-size='large'
        data-share='true'
      ></div>
    </React.Fragment>
  );
}
