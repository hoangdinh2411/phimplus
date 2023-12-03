import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { APP_ROUTERS } from '~/helpers/config';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
export default function NotFound() {
  return (
    <Container
      maxWidth={false}
      sx={{
        height: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box component='div' py={20}>
        <Typography variant='h4' component='h4' mb={20}>
          Error: 404 - Không tìm thấy trang
        </Typography>
        <Button variant='contained' color='primary'>
          <Link
            href={APP_ROUTERS.HOME}
            component={NextLink}
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'bold',
            }}
          >
            Quay lại trang chủ
          </Link>
        </Button>
      </Box>
    </Container>
  );
}
