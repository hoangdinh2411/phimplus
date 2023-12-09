import React from "react";
import Container from "@mui/material/Container";
import { color } from "~/theme/variables/palette";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { APP_CONFIG } from "~/helpers/config";
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
        Mọi thông tin tư vấn, hỗ trợ đặt quảng cáo, banner vui lòng gửi về email
        :
        <Link
          href={`mailto:${APP_CONFIG.EMAIL_PLUS_PHIM}`}
          type="email"
          style={{ color: color.red }}
        >
          {" "}
          {APP_CONFIG.EMAIL_PLUS_PHIM}
          <br />
          (Nếu có vấn đề bản quyền vui lòng liên hệ để chúng tôi gỡ phim xuống
          ngay lập tức…)
        </Link>
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        Hoặc liên lệ fan page :
        <Link
          target="_blank"
          href={APP_CONFIG.PAGE_PLUS_PHIM}
          style={{ color: color.red }}
          title="PlusPhim - Home | Facebook"
        >
          {" "}
          PlusPhim - Facebook
        </Link>
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        Telegram:
        <Link
          href={APP_CONFIG.TELEGRAM}
          style={{ color: color.red }}
          title="PlusPhim Groups - Telegram"
        >
          {" "}
          PlusPhim Groups - Telegram
        </Link>
      </Typography>
      <CommentsForInFormation />
    </Container>
  );
}
