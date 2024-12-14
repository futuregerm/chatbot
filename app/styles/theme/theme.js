'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6B7CFF',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'white',
          }
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#6B7CFF',
        }
      }
    }
  }
});

export default theme;