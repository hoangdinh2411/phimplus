import React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function TextSkeleton() {
  return (
    <Skeleton
      variant="text"
      width={350}
      height={75}
      animation="wave"
      sx={{ fontSize: "24px", borderRadius: "20px" }}
    />
  );
}
