import { Box, TextField, FormControl } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Search = () => {
  const navigate = useNavigate(); 
  const [search, setSearch] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch('');
  }

  return (
    <Box sx={{ flexGrow: { xs: 1, sm: 0 } }} >
      <form onSubmit={handleSubmit}>
        <FormControl sx={{ width: { xs: '100%', sm: '50vw' }, display: 'flex', justifyContent: 'center' }}>
          <TextField label="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
        </FormControl>
      </form>
    </Box>
  )
}

export default Search;