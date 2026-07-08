import { createTheme } from '@mui/material/styles'

export const muiTheme = createTheme({
  palette: {
    primary: { main: '#6842E8' },
    secondary: { main: '#0F172A' },
    info: { main: '#06B6D4' },
  },
  typography: {
    fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
  },
  shape: { borderRadius: 14 },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: { borderRadius: 16, fontFamily: '"Inter", sans-serif' },
      },
    },
  },
})
