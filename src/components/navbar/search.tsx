import { Box, TextField, FormControl} from '@mui/material';

const Search = () => {

  return (
    <Box>
        <FormControl sx={{ width:'25vw', minWidth:'300px', padding:'20px'}}>
        <TextField  label="Search..."   /> 
        </FormControl> 


    </Box>
  )
}

export default Search