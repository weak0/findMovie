import { useEffect, useState } from "react";
import { style } from './style.tsx'
import Movie from "./movie";
import { MovieInterface } from "./interfaces";
import { Box, IconButton } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const MostPopular = () => {
    const [movies, setMovies] = useState<MovieInterface[]>([]);

    const getMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=89deea3c8d37bb65b17b0aca255f928a&language=PL&page=1");
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        getMovies();
    }, [])  

    const moviesElemnts : JSX.Element[] = movies.map((movie) => {
        return (
            <Movie data={movie} />
            )
        })
        
        return (
            <>
        <h2>Most Popular</h2>
    <Box sx={style.mostPopularContainer} >
        <IconButton><NavigateBeforeIcon sx={style.icon} /></IconButton>
        {moviesElemnts ? moviesElemnts : null}
        <IconButton><ChevronRightIcon/></IconButton>
    </Box>  
            </>
  )
}

export default MostPopular