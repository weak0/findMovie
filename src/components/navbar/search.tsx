import { Box, TextField, FormControl} from '@mui/material';

const Search = () => {

  return (
    <Box>
        <FormControl sx={{ width:'50vw'}}>
        <TextField  label="Search..."   /> 
        </FormControl> 


    </Box>
  )
}

export default Search