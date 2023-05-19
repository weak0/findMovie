import {Box} from '@mui/material'
import Search from './search'

export const NavBar = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
    <h1>Find Movie</h1>
    <Search/>
    </Box>
  )
}
