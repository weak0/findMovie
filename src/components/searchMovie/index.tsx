import { useEffect, useState } from 'react'
import { NavBar } from '../navbar'
import { MovieInterface } from '../config/interfaces'
import { Link, useParams } from 'react-router-dom'
import { options } from '../config/api'
import { Box, Button, Typography, Grid } from '@mui/material'

const SearchMovie = () => {
  const { query } = useParams<{ query: string }>()
  const [data, setData] = useState<MovieInterface[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)

  const getSearchedMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`, options)
    const data = await response.json()
    setData(data.results)
    setTotalPages(data.total_pages)
    
  }

  useEffect(() => {
    getSearchedMovie()
  }, [query, page])

  if (!data) return <div>Loading...</div>

  return (
    <>
      <NavBar />
      <Typography variant='h3'>Searched movies for: "{query}"</Typography>

{ data.length !== 0 ?  <Grid container>
        {data.map((movie) => {
          return (
            movie.poster_path && (
                <Grid item xs={12} sm={4} md={3}  lg={2} xl={1.5} sx={{  overflow: 'hidden',p:'1rem'}} key={movie.id}>
                <Link to={`/movie/${movie.id}`} >
                <Box sx={{border: '1px solid #555', boxShadow: '0px 0px 5px 2px black', height: '100%', width: '100%', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.1)' }}}>
                    <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} style={{ height: '100%', width: '100%' }} />
                  </Box>
              </Link>
                  </Grid>
            )
          )
        })}
      </Grid> :
      <Typography variant='h2' sx={{ width:'100%', textAlign:'center'}} color='primary'>No movies found</Typography>}

     {totalPages > 1 && <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        {page > 1 && <Button variant='outlined' onClick={() => setPage(page - 1)}>Previous</Button>}
        <Button variant="outlined" onClick={() => setPage(page + 1)}>Next</Button>
        </Box>}

    </>
  )
}

export default SearchMovie