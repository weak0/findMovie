import { useEffect, useState } from "react";
import { MovieInterface } from "../config/interfaces.tsx";
import MovieContainer from "../../assets/horizontalMovieSection/movieContainer.tsx";


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


    if (!movies) {
        return <div>Loading...</div>;
    }

    return (
        <MovieContainer data={movies} title="Most Popular" />
    )
}


export default MostPopular