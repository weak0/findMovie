import { useEffect, useState } from "react";
import styles from "./styles.module.css"
import Movie from "./movie";
import { MovieInterface } from "./interfaces";

const MostPopular = () => {
    const [movies, setMovies] = useState<MovieInterface[]>([]);

    const getMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=89deea3c8d37bb65b17b0aca255f928a&language=en-US&page=1");
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
    <div className={styles.mostPopularContainer} >
        {moviesElemnts ? moviesElemnts : null}
    </div>  
  )
}

export default MostPopular