import React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function AdsSlideSkeleton() {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      sx={{ width: "100%" }}
      height={750}
    />
  );
}
