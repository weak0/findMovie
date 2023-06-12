import {Box, Typography} from '@mui/material'
import Search from './search'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  
  return (
    <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap'}}>
    <Link to='/'><Typography variant='h1' sx={{flexGrow: {xs:1 , sm: 0}, textAlign:'center'}} color={'white'}>
       Find Movie
       </Typography></Link>
       <Link to='/'><Typography variant='h2' sx={{flexGrow: {xs:1 , sm: 0}, textAlign:'center'}} color={'white'}>
       Perfect Match
       </Typography></Link>
       
    <Search/>
    </Box>
  )
}
