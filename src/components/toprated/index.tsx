import { useEffect, useState } from "react";
import { MovieInterface } from "../config/interfaces";
import { options } from "../config/api";

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
            <h2>Top rated</h2>
            {movies.map((movie) => (<div key={movie.id}>{movie.title}</div>))
            }

        </>
    )
}


export default TopRated