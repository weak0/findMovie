import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MovieInterface } from '../config/interfaces'
import { options } from '../config/api'
import MovieContainer from '../../assets/horizontalMovieSection/movieContainer'



const SimilarMovies = () => {
    const { id } = useParams<{ id: string }>();
    const [similarMovies, setSimilarMovies] = useState<MovieInterface[]>([]);

    const getSimilarMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/similar`, options);
        const data = await response.json();
        setSimilarMovies(data.results);
    }

    useEffect(() => {
        getSimilarMovies();
    }, [id])

    if (!similarMovies) {
        return <div>Loading...</div>
    }


    return (
        <MovieContainer data={similarMovies} />
    )
}

export default SimilarMovies