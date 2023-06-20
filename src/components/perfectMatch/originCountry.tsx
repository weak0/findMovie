import { useState, useEffect, useContext } from "react";
import { MovieCuntryInterface } from "../config/interfaces";
import { options } from "../config/api";
import {
  Box,
  Radio,
  FormControlLabel,
  FormGroup,
  Button,
} from "@mui/material";
import { matchContext } from "../store/PerfectMatchContext";

const OriginCountry = () => {
  const matchCtx = useContext(matchContext);
  const [countries, setCountries] = useState<MovieCuntryInterface[]>([]);
  const [isActivated, setIsActivated] = useState<boolean>(true);

  const handleCountryChange = (event : any) => {
    const selectedCountry = event.target.value;
    if (event.target.checked) {
      matchCtx.setCountryHandler(selectedCountry);
    }
  };

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
    <Box sx={{ position: 'relative', width:{xs:'100%', sm:'fit-content'} }}>
      <Button sx={{ width: {xs:'100%', md:"200px"} }}
        onClick={() => setIsActivated(!isActivated)}
        variant="contained"
      >
        Origin country
      </Button>
      <FormGroup
        sx={{
          position: "absolute",
          top: "3rem",
          height: "300px",
          overflowY: "scroll",
          overflowX: "hidden",
          display: isActivated ? "none" : "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          border: "1px solid #EFCA3C",
          padding: "1rem",
          zIndex: 99,
          bgcolor: '#242424',
          "&::-webkit-scrollbar": {
            width: "5px", 
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#555",
            borderRadius: "5px",
          },
        }}
      >
        {countries.map((country) => {
          return (
            <FormControlLabel
              key={country.iso_3166_1}
              control={<Radio />}
              value={country.iso_3166_1}
              checked={matchCtx.country.includes(country.iso_3166_1)}
              onChange={(e) => handleCountryChange(e)}
              label={country.english_name}
            />
          );
        })}

      </FormGroup>
    </Box>
  );
};

export default OriginCountry;
