import { useEffect, useState } from "react";
import { MovieInterface } from "../config/interfaces";
import { options } from "../config/api";
import TopMovie from "./topmovie";
import { Typography, Grid } from "@mui/material";

const TopRated = () => {
    const [movies, setMovies] = useState<MovieInterface[]>([]);


    const getMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=PL&page=1&region=PL", options);
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        getMovies();
    }, [])

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
        </>
    )
}


export default TopRated