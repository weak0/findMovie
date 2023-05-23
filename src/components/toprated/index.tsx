import { useEffect, useState } from "react";
import { MovieInterface } from "../config/interfaces";
import { options } from "../config/api";
import TopMovie from "./topMovie";
import { Typography, Grid, Box , Button } from "@mui/material";

const TopRated = () => {
    const [movies, setMovies] = useState<MovieInterface[]>([]);
    const [page, setPage] = useState<number>(1);


    const getMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=PL&page=${page}&region=PL`, options);
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        getMovies();
    }, [page])

    return (
        <>
            <Typography variant='h2'>Top rated</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6}>
                    {movies.slice(0, movies.length / 2).map((movie) => <TopMovie data={movie} key={movie.id} />)}
                </Grid>
                <Grid item xs={12} lg={6}>
                    {movies.slice(movies.length / 2).map((movie) => <TopMovie data={movie} key={movie.id} />)}
                </Grid>
            </Grid>
            <Box display='flex' justifyContent='center' gap='10px'>
                {page > 1 && <Button variant="outlined" onClick={() => setPage(page - 1)}>Previous</Button>}
                <Button variant="outlined" onClick={() => setPage(page + 1)}>Next</Button>

            </Box>
        </>
    )
}


export default TopRated