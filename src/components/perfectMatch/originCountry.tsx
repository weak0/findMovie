import { useState, useEffect } from "react";
import { MovieCuntryInterface } from "../config/interfaces";
import { options } from "../config/api";
import {Box,  Checkbox , List, FormControlLabel, FormGroup, Button} from '@mui/material';

const OriginCountry = () => {
  const [countries, setCountries] = useState<MovieCuntryInterface[]>([]);
  const [isActivated, setIsActivated] = useState<boolean>(true);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/configuration/countries?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => setCountries(response))
      .catch((err) => console.error(err));
  }, []);

    if (!countries) {
    return <div>Loading...</div>;
    }

  return (
  <Box sx={{width:'max-content'}}>
   <Button sx={{width:'100%'}} onClick={() => setIsActivated(!isActivated)}  variant="contained">Origin country</Button>
  <FormGroup 
  sx={{height:'300px', overflowY:'scroll', overflowX:'hidden', display: isActivated ? 'none':'flex' , flexDirection:'column', flexWrap:'nowrap',    '&::-webkit-scrollbar': {
      width: '5px', // Adjust the height of the scrollbar
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#555',
      borderRadius: '5px', // Round the edges of the thumb
    }}}>
    {countries.map((country) => {
        return <FormControlLabel key={country.iso_3166_1} control={<Checkbox  value={country.iso_3166_1}/>} label={country.english_name} checked={true}/>;
    }
    )}
  </FormGroup>
  </Box>

    );
};

export default OriginCountry;
