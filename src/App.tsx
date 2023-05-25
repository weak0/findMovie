import { Box, ThemeProvider } from '@mui/material'
import { NavBar } from './components/navbar'
import MostPopular from './components/popular'
import { createTheme, } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Movie from './components/movie/index.tsx'
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
        padding: '1rem  0' ,
        fontWeight: 'bold',
      },
        h2: { fontSize: '2rem',
        fontWeight: 'bold',
      padding: '1rem 0' },
        h3: { fontSize: '1.5rem',
        fontWeight: '600',
        padding: '1rem 0 '},
        h4: { fontSize: '1.2rem',
        fontWeight: '600',
        padding: '0.5rem 0 '},
      },
    }
  }
});

const HomePage = () => {
  return (
    <div>
      <MostPopular />
      <TopRated />
    </div>
  )
}

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/movie/:id', element: <Movie/> },
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        p: {xs: '1rem' ,sm:'2rem'},
      }}>
        <NavBar />      
        <RouterProvider router={router}/>
        </Box>
    </ThemeProvider>
  )
}

export default App