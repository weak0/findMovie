import { Box, ThemeProvider } from '@mui/material'
import { NavBar } from './components/navbar'
import MostPopular from './components/popular'
import { createTheme, } from '@mui/material/styles';
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Movie from './components/movieDetails/index.tsx'
import TopRated from './components/toprated';
import Upcoming from './components/upcoming/index.tsx';
import SearchMovie from './components/searchMovie/index.tsx';
import PerfectMatch from './components/perfectMatch/index.tsx';
import MatchContextProvider from './components/store/PerfectMatchContext.tsx';
import Auth from './components/authentication/index.tsx';


const theme = createTheme({
  palette: {
    primary: {
      main: '#EFCA3C',
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
    },
    MuiSlider: {
      styleOverrides: {
        marked:{
          color: '#yellow',
        },
        thumb: {
          width: '1rem',
          height: '1rem',
          boxShadow: '0px 0px 2px 1px #EFCA3C',
    },
      mark: {
        width: '1rem',
        height: '1rem',
        borderRadius: '50%',
        opacity: 0.5,
      },
      markActive: {
        opacity: 0,
      },
        markLabel: {
          color: '#fff',
        },
    }
  },
},
})

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <MostPopular />
      <TopRated />
      <Upcoming />
    </div>
  )
}

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/movie/:id', element: <Movie/> },
  { path: '/search/:query', element: <SearchMovie/> },
  { path: '/perfectMatch', element: <MatchContextProvider><PerfectMatch/></MatchContextProvider> },
  { path: '/auth', element: <Auth/> },
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        p: {xs: '1rem 1rem 1rem 1rem' ,sm:' 2rem 2rem 2rem 2rem'},
      }}>    
        <RouterProvider router={router}/>
        </Box>
    </ThemeProvider>
  )
}

export default App