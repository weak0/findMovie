import { Box, ThemeProvider, CssBaseline } from '@mui/material'
import { NavBar } from './components/navbar'
import MostPopular from './components/popular'
import { createTheme, } from '@mui/material/styles';
import TopRated from './components/toprated';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#ABABA7',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        color: 'secondary',
      },
      styleOverrides: {
        root: {
          color: '#fff',
          '& .MuiOutlinedInput-root': {

            color: '#fff',
            '& fieldset': {
              color: '#fff',
              borderColor: '#ABABA7',
            },
            '&:hover fieldset': {
              color: '#fff',
              borderColor: '#fff',
            },
            '&.Mui-focused fieldset': {
              color: '#fff',
              borderColor: '#fff',
            },

          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&.Mui-focused': {
            color: '#fff',
          }
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: { fontSize: '4rem',
        padding: '1rem  0' },
        h2: { fontSize: '2rem',
      padding: '1rem 0' },
        h3: { fontSize: '1.5rem',
        padding: '1rem 0 '},
      },
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Box sx={{
        p: '20px',
        width: 'calc(100% - 40px)',
      }}>
        <NavBar />
        <MostPopular />
        <TopRated />
      </Box>
    </ThemeProvider>
  )
}

export default App