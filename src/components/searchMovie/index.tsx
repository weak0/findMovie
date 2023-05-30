import { useEffect, useState } from 'react'
import { NavBar } from '../navbar'
import { MovieInterface } from '../config/interfaces'
import { Link, useParams } from 'react-router-dom'
import { options } from '../config/api'
import { Box, Typography } from '@mui/material'

//total_pages



const SearchMovie = () => {

    const { query } = useParams<{ query: string }>()
    const [data, setData] = useState<MovieInterface[]>([])

    const getSearchedMovie = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&language=en-US&page=1`, options)
        const data = await response.json()
        setData(data.results)
    }

    useEffect(() => {
        getSearchedMovie()
    }, [query])

    if (!data) return <div>Loading...</div>



    return (
        <>
            <NavBar />
            <Typography variant='h3'>Searched movies for: "{query}"</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap:'10px', p:'10px',  }}>
                {data.map((movie) => {
                    return ( movie.poster_path &&
                        <Link to={`/movie/${movie.id}`} key={movie.id}>
                        <Box sx={{border:'1px solid #555', boxShadow: '0px 0px 10px 3px black'}}>
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} style={{height:'304px', width:'200px'}} />
                        </Box>
                        </Link>
                    )
                })
                }
            </Box>
        </>
    )
}

export default SearchMovie