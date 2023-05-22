import {Box, Typography} from '@mui/material'
import Search from './search'

export const NavBar = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap',}}>
    <Typography variant='h1'>Find Movie</Typography>
    <Search/>
    </Box>
  )
}
