import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { color } from '~/theme/variables/palette';
import Link from 'next/link';
import { APP_ROUTERS } from '~/helpers/config';

export default function page() {
  return (
    <React.Fragment>
      <Container
        maxWidth='lg'
        sx={{
          my: 16,
          p: 16,
          backgroundColor: color.black,
          borderRadius: '10px',
        }}
      >
        <Typography variant='h2' component='h2' mb={10}>
          Về Chúng Tôi
        </Typography>
        <Typography variant='body1' component='p' mb={8} lineHeight={2}>
          Chào mừng bạn đến với{' '}
          <Link
            href={APP_ROUTERS.HOME}
            style={{ color: color.red }}
            title={APP_ROUTERS.HOME}
          >
            <strong>PlusPhim</strong>
          </Link>
          , trang web tuyệt vời để thỏa mãn niềm đam mê với điện ảnh và thư giãn
          sau những ngày làm việc căng thẳng!
          <br />
          <br />
          <Link
            href={APP_ROUTERS.HOME}
            style={{ color: color.red }}
            title={APP_ROUTERS.HOME}
          >
            <strong>PlusPhim</strong>
          </Link>
          là một website xem phim trực tuyến hoàn toàn miễn phí, nơi bạn có thể
          khám phá và tận hưởng hàng ngàn bộ phim hấp dẫn từ nhiều thể loại khác
          nhau. Chúng tôi tập trung vào việc mang đến cho bạn những trải nghiệm
          giải trí đỉnh cao, đáp ứng mọi sở thích và độ tuổi. Với{' '}
          <Link
            href={APP_ROUTERS.HOME}
            style={{ color: color.red }}
            title={APP_ROUTERS.HOME}
          >
            <strong>PlusPhim</strong>
          </Link>
          , bạn sẽ tìm thấy một bộ sưu tập phong phú với hàng nghìn bộ phim từ
          cổ điển đến hiện đại, từ hành động, phiêu lưu đến tình cảm, hài hước
          hay kinh dị.
          <br />
          Chúng tôi liên tục cập nhật và thêm mới những bộ phim hot nhất, giúp
          bạn không bao giờ bị lạc hậu với các xu hướng điện ảnh mới nhất.
          <br />
          <br />
          Đặc biệt,{' '}
          <Link
            href={APP_ROUTERS.HOME}
            style={{ color: color.red }}
            title={APP_ROUTERS.HOME}
          >
            {' '}
            <strong> PlusPhim.com</strong>
          </Link>{' '}
          là địa điểm lý tưởng cho những tín đồ của điện ảnh Việt Nam. Bạn sẽ
          tìm thấy những bộ phim bom tấn của làng phim Việt, cùng với những tác
          phẩm độc lập và phim ngắn tuyệt vời từ các nhà làm phim trẻ tài năng.
          Chúng tôi tự hào là một nền tảng ủng hộ sự phát triển và lan tỏa của
          ngành công nghiệp điện ảnh Việt Nam. Tuyệt vời hơn nữa, với giao diện
          thân thiện và dễ sử dụng,{' '}
          <Link
            href={APP_ROUTERS.HOME}
            style={{ color: color.red }}
            title={APP_ROUTERS.HOME}
          >
            <strong>PlusPhim</strong>
          </Link>{' '}
          mang đến cho bạn trải nghiệm xem phim tuyệt đỉnh. Bạn có thể tìm kiếm
          bộ phim yêu thích của mình theo danh mục, tên phim, diễn viên hoặc đạo
          diễn. Ngoài ra, chúng tôi cung cấp chức năng đề xuất phim dựa trên sở
          thích của bạn, giúp bạn khám phá những tác phẩm mới thú vị.
          <br /> Bên cạnh đó,{' '}
          <Link
            href={APP_ROUTERS.HOME}
            style={{ color: color.red }}
            title={APP_ROUTERS.HOME}
          >
            <strong>PlusPhim</strong>
          </Link>{' '}
          cũng mang đến cho bạn những tính năng đặc biệt để tăng thêm niềm vui
          khi xem phim. Bạn có thể tạo danh sách phim yêu thích để lưu trữ và
          xem lại sau này.
          <br />
          Ngoài ra, bạn cũng có thể chia sẻ những bộ phim thú vị với bạn bè
          thông qua các nút chia sẻ mạng xã hội. Sự an toàn và bảo mật thông tin
          cá nhân của bạn là ưu tiên hàng đầu của chúng tôi.
          <br />
          <br />
          <Link
            href={APP_ROUTERS.HOME}
            style={{ color: color.red }}
            title={APP_ROUTERS.HOME}
          >
            <strong>PlusPhim</strong>
          </Link>{' '}
          cam kết bảo vệ thông tin cá nhân của bạn và không chia sẻ thông tin
          này với bất kỳ bên thứ ba nào. Với tất cả những điều tuyệt vời mà{' '}
          <Link
            href={APP_ROUTERS.HOME}
            style={{ color: color.red }}
            title={APP_ROUTERS.HOME}
          >
            <strong>PlusPhim</strong>
          </Link>{' '}
          mang lại, chúng tôi tin rằng bạn sẽ tìm thấy niềm vui và thỏa mãn
          trong việc khám phá và xem các bộ phim tuyệt hay trên trang web của
          chúng tôi.
        </Typography>
      </Container>
    </React.Fragment>
  );
}
