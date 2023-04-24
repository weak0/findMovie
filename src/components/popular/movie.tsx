import {MovieProps} from "./interfaces";

const Movie = ({ data }: MovieProps) => {
  return <div>
    <img src={`https://image.tmdb.org/t/p/w400/${data.backdrop_path}`}></img>
  </div>
};

export default Movie;
