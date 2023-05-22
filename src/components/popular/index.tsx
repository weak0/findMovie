import { useEffect, useState, useRef } from "react";
import { style } from './style.tsx'
import Movie from "./popularMovie.tsx";
import { MovieInterface } from "../config/interfaces.tsx";
import { Box, IconButton, Typography } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { SxProps } from "@mui/material/styles";


const MostPopular = () => {
    const [movies, setMovies] = useState<MovieInterface[]>([]);
    const scrollRef = useRef<HTMLDivElement>(null);

    const getMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=89deea3c8d37bb65b17b0aca255f928a&language=PL&page=1");
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        getMovies();
    }, [])

    const moviesElemnts: JSX.Element[] = movies.map((movie) => (<Movie data={movie} key={movie.id} />))


    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 500;
        }
    }
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 500;
        }
    }

    return (
        <>
            <Typography variant='h2'>Top rated</Typography>
            <Box sx={style.mostPopularContainer}>
                <IconButton sx={style.button} onClick={scrollLeft}><NavigateBeforeIcon sx={style.icon} /></IconButton>
                <Box sx={style.mostPopularScroll} ref={scrollRef}>
                    {moviesElemnts ? moviesElemnts : null}
                </Box>
                <IconButton sx={[style.button, style.buttonRight] as SxProps} onClick={scrollRight}><ChevronRightIcon sx={style.icon} /></IconButton>
            </Box>
        </>
    )
}


export default MostPopular