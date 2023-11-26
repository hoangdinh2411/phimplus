'use client';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
export default function NotFoundForFilter() {
  return (
    <Container
      maxWidth={false}
      sx={{
        px: {
          xs: 8,
          md: 0,
        },
        height: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box component='div' py={20}>
        <Typography variant='h5' component='h5' mb={8}>
          Không có kết quả nào để hiển thị với yêu cầu của bạn
        </Typography>
        <Typography
          variant='h6'
          component='h6'
          fontWeight={600}
          mb={4}
          color='error'
        >
          Gợi ý:
        </Typography>
        <List
          component='ul'
          sx={{
            pl: 8,
          }}
          color='text.primary'
        >
          <ListItem disablePadding>
            <Typography variant='caption' component='p' mb={8}>
              + Hãy chắc chắn rằng tất cả điều kiện tìm kiếm chính xác
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography variant='caption' component='p' mb={8}>
              + Hãy thử các điều kiện tìm kiếm khác
            </Typography>
          </ListItem>
          <ListItem disablePadding>
            <Typography variant='caption' component='p' mb={8}>
              + Thử tìm kiếm bằng tên phim hoặc tên diễn viên trên thanh tìm
              kiếm
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
}
