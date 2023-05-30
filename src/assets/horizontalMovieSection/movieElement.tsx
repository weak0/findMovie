import { MovieInterface} from '../../components/config/interfaces'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


const MovieElement = ({ data }: { data: MovieInterface }) => {
  return (
    <Link to={`/movie/${data.id}`} style={{ textDecoration: 'none', color: 'white' }}>
      <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} style={{ height: '300px' }}></img>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', ml: '5px', mr: '5px', mt: '-50px' }}>
        <Box sx={{ bgcolor: 'rgba(0,0,0,0.7)', padding: '10px', borderRadius: '15px', border: '1px solid white' }}>
          <Typography>{data.release_date}</Typography>
        </Box>
        <Box sx={{ bgcolor: 'rgba(0,0,0,0.7)', padding: '10px', borderRadius: '50%', border: '1px solid yellow' }}>
          <Typography>{data.vote_average.toFixed(1)}</Typography>
        </Box>
      </Box>
    </Link>
  );

}

export default MovieElement