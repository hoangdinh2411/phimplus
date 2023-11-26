import { PaletteOptions } from '@mui/material/styles';
export const color = {
  red: '#E50914',
  white: '#ffffff',
  smokyWhite: '#EDEDED',
  lightGrey: 'rgba(216, 216, 216, 0.45)',
  black: '#0D0C11',
  darkGrey: '#17161B',
  green: '#0DE509',
  yellow: '#FCC209',
};
const palette: PaletteOptions = {
  mode: 'dark',
  common: {
    black: color.black,
  },
  primary: {
    main: color.white,
    dark: color.red,
  },
  secondary: {
    main: color.red,
    dark: color.red,
  },

  text: {
    primary: color.white,
    secondary: color.smokyWhite,
    disabled: color.smokyWhite,
  },

  background: {
    default: color.black,
    paper: color.darkGrey,
  },
  action: {
    active: color.red,
  },
  success: {
    main: color.green,
  },
  error: {
    main: color.red,
  },
  divider: color.lightGrey,
};

export default palette;
