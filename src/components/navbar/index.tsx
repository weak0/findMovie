import { Box, Typography, Grid } from '@mui/material'
import Search from './search'
import { Link } from 'react-router-dom'

export const NavBar = () => {

  return (
    <Grid container>
      <Grid item xs={12} md={3} sx={{p:'1rem'}}>
        <Link to='/'><Typography variant='h1' sx={{ flexGrow: { xs: 1, sm: 0 }, textAlign: 'center', borderBottom: '1px solid #EFCA3C' }} color={'white'}>
          Find Movie
        </Typography></Link>
      </Grid>
      <Grid item xs={12} md={3} sx={{p:'1rem'}}>
        <Link to='/perfectMatch'><Typography variant='h1' sx={{ flexGrow: { xs: 1, sm: 0 }, textAlign: 'center', borderBottom: '1px solid #EFCA3C' }} color={'white'}>
          Perfect Match
        </Typography></Link>
      </Grid>
      <Grid item xs={12} md={6} sx={{p:'1rem', mt:'auto', mb:'auto'}}>
        <Search />
      </Grid>
    </Grid>
  )
}
