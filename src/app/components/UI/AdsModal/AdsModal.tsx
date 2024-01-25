import Box from '@mui/system/Box';
import Link from 'next/link';
import React from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function AdsModal({ open, onClose }: Props) {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '100%',
        opacity: 0.8,
        zIndex: 100,
        display: open ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Link
        href='https://www.i9bet300.com/Register?a=1284708'
        target='_blank'
        onClick={onClose}
        title='Đăng ký tài khoản i9bet300'
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          zIndex: 100,
        }}
      />
      <Link
        href='https://www.i9bet300.com/Register?a=1284708'
        onClick={onClose}
        target='_blank'
        style={{
          width: '400px',
          height: '300px',
          zIndex: 101,
          backgroundColor: 'transparent',
          backgroundImage: 'url(https://imgyn.imageshh.com/400x300.jpg)',
          backgroundSize: 'auto',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
        }}
      ></Link>
    </Box>
  );
}
