"use client";
import React from "react";
import { APP_ROUTERS, DOMAIN } from "~/helpers/config";
import useMovie from "~/hooks/useMovie";

export default function Comments() {
  const { movie } = useMovie();

  const href = `${DOMAIN}${APP_ROUTERS.MOVIE}${movie.item.slug}`;
  return (
    <React.Fragment>
      <div
        className="fb-comments"
        data-href={`${href}`}
        data-width="100%"
        data-numposts="5"
        // data-lazy={true}
        data-colorscheme="light"
      ></div>
    </React.Fragment>
  );
}
