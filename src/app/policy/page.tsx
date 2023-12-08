import React from "react";
import Container from "@mui/material/Container";
import { color } from "~/theme/variables/palette";
import Typography from "@mui/material/Typography";

export default function index() {
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
        Chính Sách Riêng Tư
      </Typography>
      <Typography variant="h5" mb={8} color={color.red}>
        Cookies
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        Cũng như nhiều website khác, chúng tôi thiết lập và sử dụng cookie để
        tìm hiểu thêm về cách bạn tương tác với nội dung của chúng tôi và giúp
        chúng tôi cải thiện trải nghiệm của bạn khi ghé thăm website của chúng
        tôi, cũng như duy trì thiết lập cá nhân của bạn... Website của chúng tôi
        có thể đăng quảng cáo, và trong trường hợp đó có thể thiết lập và truy
        cập các cookie trên máy tính của bạn và phụ thuộc vào chính sách bảo vệ
        sự riêng tư của các bên cung cấp quảng cáo. Tuy nhiên, các công ty quảng
        cáo không được truy cập vào cookie của chúng tôi. Những công ty đó
        thường sử dụng các đoạn mã riêng để theo dõi số lượt truy cập của bạn
        đến website của chúng tôi.
      </Typography>
      <Typography variant="h5" mb={8} color={color.red}>
        Thay đổi điều khoản
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        Chúng tôi có thể thay đổi các điều khoản của bản Chính sách bảo vệ riêng
        tư này cho phù hợp với điều kiện thực tế. Chúng tôi sẽ thông báo về
        những thay đổi lớn bằng cách đặt thông báo trên site của chúng tôi và
        được đặt trong thiết lập người dùng của bạn.
      </Typography>
      <Typography variant="h5" mb={8} color={color.red}>
        Từ chối bảo đảm
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        Mặc dù Chính sách bảo vệ riêng tư đặt ra những tiêu chuẩn về Dữ liệu và
        chúng tôi luôn cố gắng hết mình để đáp ứng, chúng tôi không bị buộc phải
        bảo đảm những tiêu chuẩn đó. Có thể có những nhân tố vượt ra ngoài tầm
        kiểm soát của chúng tôi có thể dẫn đến việc Dữ liệu bị tiết lộ. Vì thế,
        chúng tôi không chịu trách nhiệm bảo đảm Dữ liệu luôn được duy trì ở
        tình trạng hoàn hảo hoặc không bị tiết lộ.
      </Typography>
      <Typography variant="h5" mb={8} color={color.red}>
        Sự đồng ý của bạn
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        Khi sử dụng dịch vụ của PlusPhim, bạn mặc nhiên chấp nhận điều khoản
        trong Chính sách bảo vệ riêng tư này
      </Typography>
    </Container>
  );
}
