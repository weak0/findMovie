import {Box, Typography} from '@mui/material'
import Search from './search'

export const NavBar = () => {
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
    <Typography variant='h1' sx={{flexGrow: {xs:1 , sm: 0}, textAlign:'center'}}>Find Movie</Typography>
    <Search/>
    </Box>
  )
}
