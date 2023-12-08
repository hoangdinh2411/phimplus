import React from "react";
import Container from "@mui/material/Container";
import { color } from "~/theme/variables/palette";
import Typography from "@mui/material/Typography";

export default function page() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 16,
        p: 16,
        backgroundColor: color.black,
        borderRadius: "10px",
        fontSize: "12px",
        color: "text.primary",
      }}
    >
      {" "}
      <Typography variant="h3" mb={8}>
        Điều Khoản Sử Dụng
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        Điều Khoản Sử Dụng
      </Typography>
    </Container>
  );
}
