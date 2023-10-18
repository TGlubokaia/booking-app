import { createTheme } from '@mui/material/styles';
import { Inter } from 'next/font/google';

export const inter = Inter({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
});


const theme = createTheme({
  palette: {
    primary: {
      main: '#236ADE',
      light: '#60A5FA'
    },
    action: {
      disabledBackground: '#D1D5DB',
      disabled: ({ theme }) => { theme.palette.common.white },
    },
    error: {
      main: '#EF4444',
    },
    'rose': {
      main: '#FECACA',
      light: '#FEF2F2'
    }
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      * {
        box-sizing: border-box;
      }
      body {
        background-color: #EEEEEE;
      }
      h3 {
        height: 26px;
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 18px;
      }`
    },
  }
});

export default theme;