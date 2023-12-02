"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import ReactPlayer from "react-player/youtube";

type Props = {
  src: string;
};

export default function Trailer({ src }: Props) {
  if (!src) {
    return (
      <Box
        height={300}
        width="100%"
        mt={32}
        display="flex"
        bgcolor="background.paper"
      >
        <Typography variant="body1" m="auto" color="primary">
          Hiện tại Trailer đang được cập nhật, vui lòng quay lại sau
        </Typography>
      </Box>
    );
  }
  return <ReactPlayer url={src} width="100%" height={550} />;
}
