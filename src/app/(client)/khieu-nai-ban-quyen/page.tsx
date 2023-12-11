import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { color } from '~/theme/variables/palette';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Khiếu Nại Bản Quyền',
};

export default function page() {
  return (
    <Container
      maxWidth='lg'
      sx={{
        my: 16,
        p: 16,
        backgroundColor: color.black,
        borderRadius: '10px',
        fontSize: '12px',
        color: 'text.primary',
      }}
    >
      <Typography
        variant='h5'
        fontWeight={600}
        color='error'
        component='article'
        mb={8}
      >
        1. Bản quyền và trách nhiệm nội dung
        <Typography
          variant='body1'
          color='common.white'
          component='p'
          my={4}
          lineHeight={2}
        >
          Tất cả nội dung của trang web này được thu thập từ các trang web
          Ophim, PhimC ... trên Internet, và không cung cấp phát trực tuyến
          chính hãng. Nếu quyền lợi của bạn bị vi phạm, vui lòng thông báo cho
          chúng tôi, chúng tôi sẽ xóa nội dung vi phạm kịp thời, cảm ơn sự hợp
          tác của bạn!
        </Typography>
      </Typography>
      <Typography
        variant='h5'
        fontWeight={600}
        color='error'
        component='article'
        mb={8}
      >
        2. Sở hữu trí tuệ
        <Typography
          variant='body1'
          color='common.white'
          component='p'
          mb={4}
          lineHeight={2}
        >
          Mọi nội dung được đăng tải trên website, bao gồm tiết kế, logo, các
          phần mềm, chức năng kỹ thuật, cấu trúc trang đều thuộc bản quyền của
          website . Nghiêm cấm mọi sao chép, sửa đổi, trưng bày, phân phát,
          chuyển tải, tái sử dụng, xuất bản, bán, cấp phép, tái tạo hay sử dụng
          bất cứ nội dung nào của trang web cho bất kỳ mục đích nào mà không có
          sự xác nhận của Ban quản trị website .
        </Typography>
      </Typography>
    </Container>
  );
}
