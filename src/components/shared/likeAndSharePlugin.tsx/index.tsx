"use client";
import React from "react";
import { APP_ROUTERS, DOMAIN } from "~/helpers/config";
import useMovie from "~/hooks/useMovie";

export default function LikeAndSharePlugin() {
  const { movie } = useMovie();
  const href = `${DOMAIN}${APP_ROUTERS.MOVIE}${movie.item.slug}`;
  return (
    <React.Fragment>
      <div
        className="fb-like"
        data-href={href}
        // data-width="auto"
        data-layout="button_count"
        data-action="like"
        data-size="large"
        data-share="true"
      ></div>
    </React.Fragment>
  );
}
