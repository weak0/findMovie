import { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { matchContext } from '../store/PerfectMatchContext'

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

const SearchingOptions = () => {
    const matchCtx = useContext(matchContext)
  return (
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
  )
}

export default SearchingOptions