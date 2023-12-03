import { ThemeProvider } from '@mui/material';
import React from 'react';
import theme from './theme';
import { Poppins } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
});
type Props = {
  children: React.ReactNode;
};

export default function MUIThemeProvider({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
