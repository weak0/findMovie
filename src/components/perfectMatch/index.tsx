import { useState, useEffect, useContext } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { NavBar } from '../navbar';
import OriginCountry from './originCountry';
import ProvidersFilter from './providers';
import RelaseYear from './relaseYear';
import WithGenres from './withGenres';
import VoteAvg from './vote_average';
import SortBy from './sortBy';
import { matchContext } from '../store/PerfectMatchContext';
import { options } from '../config/api';
import { MovieInterface } from '../config/interfaces';
import MovieComponent from '../../assets/movieListComponent/movieComoponent';

const PerfectMatch = () => {
  const matchCtx = useContext(matchContext);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleRequest = () => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}` +
        `&sort_by=${matchCtx.sortby}` +
        `&vote_average.gte=${matchCtx.voteAverage[0]}` +
        `&vote_average.lte=${matchCtx.voteAverage[1]}` +
        `&watch_region=PL` +
        `${
          matchCtx.genres.length !== 0
            ? `&with_genres=${matchCtx.genres.join(',')}`
            : ''
        }` +
        `${
          matchCtx.relaseYear.length !== 0
            ? `&primary_release_date.gte=${matchCtx.relaseYear[0]}-01-01&primary_release_date.lte=${matchCtx.relaseYear[1]}-12-31`
            : ''
        }` +
        `${
          matchCtx.country.length !== 0
            ? `&with_origin_country=${matchCtx.country}`
            : ''
        }` +
        `${
          matchCtx.provider.length !== 0
            ? `&with_watch_providers=${matchCtx.provider.join(',')}`
            : ''
        }`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setMovies(response.results);
        setTotalPages(response.total_pages);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  };


  useEffect(() => {
    handleRequest();
  }, [page]);

  const styles = {
    button: {
      width: { xs: '100%', sm: 'fit-content' },
    },
    searchingOptions: {
      mr: '1rem',
      mt: '1rem',
      bgcolor: '#555',
      padding: '5px 1rem',
      borderRadius: '1rem',
    },
  };

  return (
    <>
      <NavBar />
      <ProvidersFilter />
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
          justifyContent: { lg: 'flex-end', md: 'center' },
          flexWrap: 'wrap',
        }}
      >
        <SortBy />
        <OriginCountry />
        <WithGenres />
        <RelaseYear />
        <VoteAvg />
        <Button
          variant="outlined"
          sx={styles.button}
          onClick={() => handleRequest()}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          mt: '1rem',
          alignItems: 'center',
        }}
      >
        <Typography sx={styles.searchingOptions} variant="h3">
          Searching Options:
        </Typography>
        {matchCtx.country.length > 0 && (
          <Typography sx={styles.searchingOptions}>
            Origin Country: {matchCtx.country}
          </Typography>
        )}
        {matchCtx.provider.length > 0 && (
          <Typography sx={styles.searchingOptions}>
            Providers: {matchCtx.provider}
          </Typography>
        )}
        <Typography sx={styles.searchingOptions}>
          Relase years: {matchCtx.relaseYear.join('-')}
        </Typography>
        <Typography sx={styles.searchingOptions}>
          Sort by: {matchCtx.sortby}
        </Typography>
        <Typography sx={styles.searchingOptions}>
          Vote average: {matchCtx.voteAverage.join('-')}
        </Typography>
        {matchCtx.genres.length > 0 && (
          <Typography sx={styles.searchingOptions}>
            Genres: {matchCtx.genres.join(', ')}
          </Typography>
        )}
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          mt: '1rem',
          justifyContent: 'center',
        }}
      >
        {!isLoading && movies.length !== 0 ? (
          movies.map((movie) => (
            movie.poster_path && <MovieComponent movie={movie} key={movie.id} /> 
          ))
        ) : (
          <Typography variant="h2" sx={{ width: '100%', textAlign: 'center' }}>
            No movies found
          </Typography>
        )}
        {movies.length !== 0 && totalPages > 1 && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            {page > 1 && (
              <Button
                variant="outlined"
                onClick={() => setPage((prev) => prev - 1)}
              >
                Prev Page
              </Button>
            )}
            {page < totalPages && (
              <Button
                variant="outlined"
                onClick={() => setPage((prev) => prev + 1)}
              >
                Next Page
              </Button>
            )}
          </Box>
        )}
      </Box>
    </>
  );
};

export default PerfectMatch;
