'use client';
import React from 'react';
import { getDataHref } from '~/helpers/loadSDKFacebook';
import useMovie from '~/hooks/useMovie';

export default function Comments() {
  const { movie } = useMovie();

  const href = getDataHref(movie.item.slug);

  return (
    <React.Fragment>
      <div
        className='fb-comments'
        data-href={`${href}`}
        data-width='100%'
        data-numposts='5'
        // data-lazy={true}
        data-colorscheme='light'
      ></div>
    </React.Fragment>
  );
}
