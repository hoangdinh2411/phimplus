import React from 'react';
import Container from '@mui/material/Container';
import { color } from '~/theme/variables/palette';
import Typography from '@mui/material/Typography';

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
      {' '}
      <Typography variant='h3' mb={10}>
        Điều Khoản Sử Dụng
      </Typography>
      <Typography
        variant='h5'
        fontWeight={600}
        color='error'
        component='article'
        mb={10}
      >
        Phân tích
        <Typography
          variant='body1'
          color='common.white'
          component='p'
          mb={6}
          lineHeight={2}
        >
          Chúng tôi sử dụng Google Analytics để phân tích lưu lượng truy cập.
        </Typography>
      </Typography>
      <Typography
        variant='h5'
        fontWeight={600}
        color='error'
        component='article'
        mb={10}
      >
        Chúng tôi chia sẻ dữ liệu của bạn với ai?
        <Typography
          variant='body1'
          color='common.white'
          component='p'
          mb={6}
          lineHeight={2}
        >
          Chúng tôi chia sẻ dữ liệu của bạn với ai Chúng tôi không chia sẻ dữ
          liệu của bạn với bất kỳ ai. Dữ liệu của bạn tồn tại bao lâu Nếu bạn để
          lại bình luận, bình luận và siêu dữ liệu của nó sẽ được giữ lại vô
          thời hạn. Điều này là để chúng tôi có thể tự động nhận ra và chấp nhận
          bất kỳ bình luận nào thay vì giữ chúng trong khu vực đợi kiểm duyệt.
          Đối với người dùng đăng ký trên trang web của chúng tôi (nếu có),
          chúng tôi cũng lưu trữ thông tin cá nhân mà họ cung cấp trong hồ sơ
          người dùng của họ. Tất cả người dùng có thể xem, chỉnh sửa hoặc xóa
          thông tin cá nhân của họ bất kỳ lúc nào (ngoại trừ họ không thể thay
          đổi tên người dùng của họ). Quản trị viên trang web cũng có thể xem và
          chỉnh sửa thông tin đó.
        </Typography>
      </Typography>
      <Typography
        variant='h5'
        fontWeight={600}
        color='error'
        component='article'
        mb={10}
      >
        Các quyền nào của bạn với dữ liệu của mình
        <Typography
          variant='body1'
          color='common.white'
          component='p'
          mb={6}
          lineHeight={2}
        >
          {' '}
          Nếu bạn có tài khoản trên trang web này hoặc đã để lại nhận xét, bạn
          có thể yêu cầu nhận tệp xuất dữ liệu cá nhân mà chúng tôi lưu giữ về
          bạn, bao gồm mọi dữ liệu bạn đã cung cấp cho chúng tôi. Bạn cũng có
          thể yêu cầu chúng tôi xóa mọi dữ liệu cá nhân mà chúng tôi lưu giữ về
          bạn. Điều này không bao gồm bất kỳ dữ liệu nào chúng tôi có nghĩa vụ
          giữ cho các mục đích hành chính, pháp lý hoặc bảo mật.
        </Typography>
      </Typography>
      <Typography
        variant='h5'
        fontWeight={600}
        color='error'
        component='article'
        mb={10}
      >
        Các dữ liệu của bạn được gửi tới đâu?
        <Typography
          variant='body1'
          color='common.white'
          component='p'
          mb={6}
          lineHeight={2}
        >
          {' '}
          Các bình luận của khách (không phải là thành viên) có thể được kiểm
          tra thông qua dịch vụ tự động phát hiện spam.
        </Typography>
      </Typography>
    </Container>
  );
}
