import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { color } from "~/theme/variables/palette";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Button from "@mui/material/Button";

const Comments = dynamic(() => import("~/components/shared/commentsPlugins"));
type Props = {};

export default function Review({}: Props) {
  return (
    <Box component="div" py={10} sx={{ backgroundColor: color.white, mt: 16 }}>
      <Typography
        variant="body1"
        component="p"
        color={color.black}
        p={8}
        fontSize="13px"
        fontWeight={700}
      >
        Đừng quên để like page của PlusPhim{" "}
        <Button
          variant="text"
          size="small"
          sx={{
            backgroundColor: "#4267b2",
            borderRadius: "5px",
            fontSize: "13px",
            fontWeight: 700,
            padding: "10px",
            ":hover": {
              backgroundColor: "#4267b2",
            },
          }}
        >
          {" "}
          <ThumbUpIcon /> Theo dõi
        </Button>
        để cập nhật phim mỗi ngày{" "}
      </Typography>
      <Comments />
    </Box>
  );
}
