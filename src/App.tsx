import './App.css'
import { Box } from '@mui/material'
import  {NavBar}  from './components/navbar'
import MostPopular from './components/popular'


function App() {
  return (
    <Box sx={{
      pl: '20px',
      pr: '20px',
    }}>
      <NavBar/>
      <Box>
      <MostPopular/>
      </Box>

    </Box>
  )
}

export default App