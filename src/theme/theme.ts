'use client';
import { poppins } from './MUIThemeProvider';
import components from './variables/components';
import palette from './variables/palette';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette,
  typography: {
    fontFamily: poppins.style.fontFamily,
    fontSize: 16,
    h6: {
      fontSize: 16,
    },
  },
  spacing: 2,
  shape: {
    borderRadius: 2,
  },

  components,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1140,
      xl: 1920,
    },
  },
});

export default theme;
