import { Box, TextField, FormControl} from '@mui/material';

const Search = () => {

  return (
    <Box  sx={{flexGrow: {xs: 1 , sm: 0}}} >
        <FormControl sx={{ width: {xs:'100%', sm: '50vw'}, display:'flex', justifyContent:'center'}}>
        <TextField   label="Search..."   /> 
        </FormControl> 


    </Box>
  )
}

export default Search