import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { color } from "~/theme/variables/palette";

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
        Bản quyền và trách nhiệm nội dung
      </Typography>
      <Typography variant="h5" mb={8} color={color.red}>
        1. Trách nhiệm nội dung
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        Nội dung trên PlusPhim được đăng bởi người sử dụng, vì vậy trách nhiệm
        về nội dung thuộc về người gửi bài lên trên hệ thống. Ban quản trị của
        trang web sẽ thường xuyên kiểm tra các nội dung trên trang và loại bỏ
        các nội dung vi phạm bản quyền, nội dung quảng cáo, spam, clip rác, nội
        dung xúc phạm, 18+ hay những nội dung không phù hợp với thuần phong mỹ
        tục, không trái với các quy định pháp luật.
      </Typography>

      <Typography variant="h5" mb={8} color={color.red}>
        2. Bản quyền
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        Là một trang web về thông tin giải trí, nhưng chúng tôi không cam kết
        chắc chắn rằng có thể kiểm soát mọi thông tin trên trang web. Bất kỳ
        hành vi xâm phạm đến bản quyền nào nếu được báo cáo sẽ bị Ban quản trị
        gỡ bỏ khỏi trang web trong thời gian sớm nhất.
      </Typography>
      <Typography variant="h5" mb={8} color={color.red}>
        3. Sở hữu trí tuệ
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        {" "}
        Mọi nội dung được đăng tải trên PlusPhim, bao gồm thiết kế, logo, các
        phần mềm, chức năng kỹ thuật, cấu trúc trang đều thuộc bản quyền của
        PlusPhim . Nghiêm cấm mọi sao chép, sửa đổi, trưng bày, phân phát,
        chuyển tải, tái sử dụng, xuất bản, bán, cấp phép, tái tạo hay sử dụng
        bất cứ nội dung nào của trang web cho bất kỳ mục đích nào mà không có sự
        xác nhận của Ban quản trị PlusPhim .
      </Typography>
      <Typography variant="h5" mb={8} color={color.red}>
        4. Quy trình báo cáo vi phạm bản quyền
      </Typography>
      <Typography variant="body1" mb={8} lineHeight={2}>
        Nếu bạn tin rằng bất kỳ nội dung nào được phát hành thông qua PlusPhim
        vi phạm quyền sở hữu trí tuệ của bạn, vui lòng thông báo cho chúng tôi
        về việc vi phạm bản quyền qua bình luận bên dưới Chúng tôi sẽ xử lý từng
        thông báo vi phạm bản quyền mà chúng tôi nhận được theo quy định của
        Điều khoản sử dụng của PlusPhim và quy định của pháp luật sở hữu trí
        tuệ.
      </Typography>
    </Container>
  );
}
