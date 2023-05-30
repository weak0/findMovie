import { useEffect, useState } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import { MovieDetailsInterface, MovieProviderInterface } from '../config/interfaces';
import { options } from '../config/api';
import { useParams } from 'react-router-dom';
import ImageSlider from './imageSlider';
import Reviews from './reviews';
import Credits from './credits';
import VideoPlayer from '../config/youtube';
import { NavBar } from '../navbar';
import SimilarMovies from './similarMovies';

const Movie = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsInterface>();
  const [video, setVideo] = useState<string>('');
  const [providers, setProviders] = useState<MovieProviderInterface[]>([]);

  const getMovie = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=ENG`, options);
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getVideo = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=ENG`, options);
      const data = await response.json();
      if (data.results[0]?.key) {
        setVideo(data.results[0]?.key);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getProviders = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers`, options);
      const providers = await response.json();
      if (providers.results.PL && providers.results.PL.flatrate) {
        setProviders(providers.results.PL.flatrate);
      } else {
        setProviders([]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
    getVideo();
    getProviders();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <NavBar />
    <Container sx={{ mt: '1rem' }}>
      <Grid container sx={{ border: '1px solid #555', borderRadius: { xs: '15px' }, overflow: 'hidden', boxShadow: '0px 0px 10px 2px black' }}>
        <Grid item xs={12} sm={5} md={3} sx={{ display: { xs: 'flex', sm: 'block' }, justifyContent: 'center', bgcolor: 'rgba(0,0,0, 0.5)', pt: { xs: '1rem', sm: 0 } }}>
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} style={{ height: '100%' }} key={movie.id}></img>
        </Grid>
        <Grid container item xs={12} sm={7} md={9} sx={{ bgcolor: 'rgba(0,0,0, 0.5)' }}>
          <Grid item xs={12} sm={12} sx={{ display: 'flex', justifyContent: 'space-around', flexDirection: 'column' }}>
            <Typography variant='h2' sx={{ textAlign: 'center', borderBottom: '1px solid #EFCA3C', ml: '5px', mr: '5px' }}>{movie.title}</Typography>
            <Box sx={{ p: '10px' }}>
              <Typography variant='h3'>Overview</Typography>
              <Typography>{movie.overview}</Typography>
            </Box>
            <Box sx={{ mb: '1rem', p: '1rem' }}>
              <Typography variant='h4'>Genres: {movie.genres.map((genre) => genre.name).join(', ')}</Typography>
              <Typography variant='h4'>Release date: {movie.release_date}</Typography>
              <Typography variant='h4'>Production companies: {movie.production_companies.map((company) => company.name).join(', ')}</Typography>
            </Box>
            {providers && (
              <Box sx={{ display: 'flex', mb: '1rem,', p: '1rem', flexWrap: 'wrap' }}>
                <Typography variant='h4'>Providers: </Typography>
                {providers && (providers.map((provider) => (
                  <Box key={provider.provider_id}>
                    {provider.logo_path && (
                      <img src={`https://image.tmdb.org/t/p/w92/${provider.logo_path}`} style={{ border: '1px solid #555', marginLeft: '10px', borderRadius: '50%', height: '60px' }} key={provider.logo_path}></img>
                      )}
                  </Box>
                )))}
              </Box>
            )}
          </Grid>
          <Grid item xs={12} sm={12} lg={12} sx={{ textAlign: 'center', bgcolor: '#EFCA3C', color: 'black', pt: '1rem', display: 'flex', justifyContent: 'space-around', flexDirection: { xs: 'column' }, alignItems: 'center' }}>
            <Typography variant='h4'>Runtime: {movie.runtime} minutes</Typography>
            <Typography variant='h4'>Budget: {movie.budget} $</Typography>
            <Typography variant='h4'>Revenue: {movie.revenue} $</Typography>
            <Typography variant='h4'>Rate: {movie.vote_average.toFixed(1)}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant='h3'>Images</Typography>
      <ImageSlider id={id} />
      <Typography variant='h3'>Credits</Typography>
      <Credits />
      <Typography variant='h3'>Similar movies</Typography>
      <SimilarMovies />
      <Typography variant='h3'>Video</Typography>
      {video && <VideoPlayer videoId={video} />}
      <Typography variant='h3'>Reviews</Typography>
      <Reviews />
    </Container>
   </>
  );
};

export default Movie;