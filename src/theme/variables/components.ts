import { Components } from '@mui/material/styles';
import { color } from './palette';

const navbarHeight = '100px';
const textFieldHeight = 42;
const components: Components = {
  //Button
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: 500,
        color: '#ffffff',
        padding: '10px 30px',
        textTransform: 'lowercase',
        border: 'none',
        ':hover': {
          border: 'none',
        },
        height: 36,
      },
      // Button with red background
      contained: ({ theme }: any) => ({
        backgroundColor: theme.palette.error.main,
      }),
      // Button with light-black background

      outlined: ({ theme }: any) => ({
        backgroundColor: theme.palette.background.paper,
      }),

      // large button with red background and uppercase text

      sizeLarge: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        height: 40,
        transition: 'all 0.3s ease-in-out',

        '@media (min-width: 1140px)': {
          ':hover': {
            transform: 'scale(1.1)',
          },
        },
      },
    },
  },

  //container
  MuiContainer: {
    styleOverrides: {
      root: {
        maxWidth: '1140px',
        width: '100%',
      },
      maxWidthXl: {
        maxWidth: '100%',
        '@media (min-width: 600px)': {
          maxWidth: '100%',
        },
      },
    },
  },

  MuiToolbar: {
    styleOverrides: {
      root: {},
    },
  },

  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }: any) => ({
        boxShadow: 'none',
        height: navbarHeight,
        borderBottom: '0.5px solid ' + theme.palette.divider,
      }),
    },
  },

  //Toolbar

  //Link
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: 'none',
      },
    },
  },

  //TextField

  MuiInputBase: {
    styleOverrides: {
      root: ({ theme }: any) => ({
        height: textFieldHeight,
        outline: 'none',
        border: 'none',
        '& fieldset': {
          border: '0.5px solid ' + theme.palette.divider,
        },
      }),
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 3,
        outline: 'none',
        border: 'none',
      },
      input: ({ theme }: any) => ({
        padding: '0 16px',
        height: textFieldHeight,
        backgroundColor: theme.palette.background.paper,
      }),
    },
  },

  //Paper

  MuiPaper: {
    styleOverrides: {
      root: {
        borderRadius: 2,
        backgroundColor: 'primary.dark',
      },
    },
  },

  //Typography
  //Pagination
  MuiPagination: {
    styleOverrides: {
      root: {
        marginLeft: '16px',
        '.Mui-selected': {
          color: color.white,
          backgroundColor: `${color.red} !important`,
        },
      },
    },
  },

  //FormControl
  MuiFormControl: {
    styleOverrides: {
      root: {
        '.MuiInputBase-root': {
          height: '53px',
          border: '0.5px solid',
          borderRadius: '8px',
          '.MuiSelect-select': {
            backgroundColor: 'transparent',
            fontSize: '14px',
          },
          '.MuiOutlinedInput-notchedOutline': {
            display: 'none',
          },
        },
      },
    },
  },
};

export default components;
