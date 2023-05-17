import {MovieProps} from "./interfaces";
import {Box, Typography} from "@mui/material";

const Movie = ({ data }: MovieProps) => {
  return <div>
    <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}></img>
    <Box>
      <Typography>{data.release_date}</Typography>
      <Typography>{data.vote_average}</Typography>
    </Box>
  </div>
};

export default Movie;
