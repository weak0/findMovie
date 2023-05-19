import './App.css'
import { Box, ThemeProvider } from '@mui/material'
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
    }
  }
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        pl: '20px',
        pr: '20px',
      }}>
        <NavBar />
        <MostPopular />
        <TopRated />
      </Box>
    </ThemeProvider>
  )
}

export default App