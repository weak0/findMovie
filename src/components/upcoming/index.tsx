import { useEffect, useState } from "react";
import { MovieInterface } from "../config/interfaces.tsx";
import MovieContainer from "../../assets/horizontalMovieSection/movieContainer.tsx";
import { options } from "../config/api.tsx";


const Upcoming = () => {
    const [movies, setMovies] = useState<MovieInterface[]>([]);

    const getMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming", options);
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        getMovies();
    }, [])


    if (!movies) {
        return <div>Loading...</div>;
    }

    return (
        <MovieContainer data={movies} title="Upcoming" />
    )
}


export default Upcoming