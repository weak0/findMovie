import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { MovieInterface } from '../../components/config/interfaces';

const MovieComponent = ({ movie} : {movie : MovieInterface}) => {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box
        key={movie.id}
        sx={{
          borderRadius: '15px',
          width: '200px',
          boxShadow: '0 0 10px 2px black',
          color: 'black',
          transition: '0.3s',
          '&:hover': { boxShadow: '0 0 15px 3px #EFCA3C' },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ height: '300px' }}>
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <Typography
            sx={{
              position: 'absolute',
              top: '5px',
              right: '5px',
              bgcolor: 'rgba(0,0,0,0.8)',
              color: 'white',
              zIndex: '1',
              borderRadius: '50%',
              height: '40px',
              width: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid white',
            }}
          >
            {movie.vote_average.toFixed(1)}
          </Typography>
          <Box>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: '#EFCA3C',
            height: '60px',
            p: '1rem',
            width: '100%',
            zIndex: 1,
            opacity: 0.9,
            transition: 'opacity 0.3s',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography>{movie.title}</Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default MovieComponent;
