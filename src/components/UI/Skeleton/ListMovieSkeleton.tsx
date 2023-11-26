import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

export default function ListMovieSkeleton() {
  return (
    <Grid spacing={8} container my={8} ml={8}>
      {Array(4)
        .fill("")
        .map((_, index) => {
          return (
            <Grid key={index} item md={3} sm={4} xs={6}>
              <Skeleton
                variant="rounded"
                width={235}
                height={356}
                animation="wave"
                sx={{ borderRadius: "20px" }}
              />
            </Grid>
          );
        })}
    </Grid>
  );
}
