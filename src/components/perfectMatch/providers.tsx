import { useState, useEffect, useContext } from 'react';
import { options } from '../config/api.tsx';
import { Box, IconButton } from '@mui/material';
import { MovieProviderInterface } from '../config/interfaces.tsx';
import { matchContext } from '../store/PerfectMatchContext.tsx';


const ProvidersFilter = () => {
  const matchCtx = useContext(matchContext);
  const [providers, setProviders] = useState<MovieProviderInterface[]>([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/watch/providers/movie?language=PL&watch_region=PL', options)
      .then(response => response.json())
      .then(response => setProviders(response.results))
      .catch(err => console.error(err));
  }, [])

  const providerHandler = (providerId: number) => {
    if (matchCtx.provider.includes(providerId)) {
      matchCtx.removeProviderHandler(providerId)
    }
    else {
      matchCtx.setProviderHandler(providerId)
    }
  }

  if (!providers) {
    return <Box>Loading...</Box>
  }
  return (
    <>
      <Box sx={{
        display: 'flex',
        pb: '1rem',
        mb: '1rem',
        mt: '1rem',
        gap: '0.5rem',
        overflowX: 'scroll',
        '&::-webkit-scrollbar': {
          height: '5px', // Adjust the height of the scrollbar

        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#555',
          borderRadius: '5px', // Round the edges of the thumb
        },
      }}>

        {providers.map((provider) => {
          return (
            <IconButton key={provider.provider_id} onClick={() => providerHandler(provider.provider_id)}>
              <img
                src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                style={{ height: '50px', width: '50px', borderRadius: '50%', border:'2px solid yellow', filter: matchCtx.provider.length === 0 ?  'none' :!matchCtx.provider.includes(provider.provider_id) ? 'grayscale(100%)' : 'none' }}
                alt={provider.provider_name}
              />
            </IconButton>
          );
        })}
      </Box>
    </>
  );

}

export default ProvidersFilter