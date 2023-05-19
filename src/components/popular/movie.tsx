import { MovieProps } from "../config/interfaces";
import { Box, Typography } from "@mui/material";

const Movie = ({ data }: MovieProps) => {
  return <div>
    <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}></img>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: '5px', mr: '5px', mt: '-50px' }}>
      <Box sx={{ bgcolor: 'rgba(0,0,0,0.7)', padding: '10px', borderRadius: '15px', border: '1px solid white' }}>
        <Typography>{data.release_date}</Typography>
      </Box>
      <Box sx={{ bgcolor: 'rgba(0,0,0,0.7)', padding: '10px', borderRadius: '50%', border: '1px solid yellow' }}>
        <Typography>{data.vote_average}</Typography>
      </Box>
    </Box>
  </div>
};

export default Movie;
