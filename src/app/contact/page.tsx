import React from "react";
import Container from "@mui/material/Container";
import { color } from "~/theme/variables/palette";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { EMAIL_PLUS_PHIM, PAGE_PLUS_PHIM } from "~/helpers/config";
import CommentsForInFormation from "~/components/shared/commentsPluginsForInfomation";

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
      <Typography variant="h3" mb={8}>
        Liên Hệ Chúng Tôi
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        Mọi thông tin tư vấn, hỗ trợ vui lòng gửi về email :
        <Link
          href={`mailto:${EMAIL_PLUS_PHIM}`}
          type="email"
          style={{ color: color.red }}
        >
          {" "}
          {EMAIL_PLUS_PHIM}
        </Link>
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        Hoặc liên lệ page :
        <Link
          target="_blank"
          href={PAGE_PLUS_PHIM}
          style={{ color: color.red }}
        >
          {" "}
          PlusPhim
        </Link>
      </Typography>
      <CommentsForInFormation />
    </Container>
  );
}
