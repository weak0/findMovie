import {MovieProps} from "./interfaces";

const Movie = ({ data }: MovieProps) => {
  return <div>
    <img src={`https://image.tmdb.org/t/p/w300/${data.backdrop_path}`}></img>
  </div>
};

export default Movie;
