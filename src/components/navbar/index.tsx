import { Typography, Grid } from '@mui/material'
import Search from './search'
import { Link } from 'react-router-dom'

const name = localStorage.getItem('name')


export const NavBar = () => {

  return (
    <Grid container>
      <Grid item xs={12} md={4} sx={{ p: '1rem' }}>
        <Link to='/'><Typography variant='h2' sx={{ flexGrow: { xs: 1, sm: 0 }, textAlign: 'center' }} color={'white'} >
          Find Movie
        </Typography></Link>
      </Grid>
      <Grid item xs={12} md={4} sx={{ p: '1rem' }}>
        <Link to='/perfectMatch'><Typography variant='h2' sx={{ flexGrow: { xs: 1, sm: 0 }, textAlign: 'center' }} color={'white'}>
          Perfect Match
        </Typography></Link>
      </Grid>
      <Grid item xs={12} md={4} sx={{ p: '1rem' }}>
        <Link to='/auth'>
           <Typography variant='h2' sx={{ flexGrow: { xs: 1, sm: 0 }, textAlign: 'center' }} color={'white'}>
            {name ? `Witaj ${name}` : "Login"}
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={12} md={12} sx={{ p: '1rem', mt: 'auto', mb: 'auto' }}>
        <Search />
      </Grid>
    </Grid>
  )
}
