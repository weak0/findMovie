import { useState, useEffect, useContext } from "react";
import { options } from "../config/api";
import {
  Box,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { matchContext } from "../store/PerfectMatchContext";

const WithGenres = () => {
  const matchCtx = useContext(matchContext);
  const [genres, setGenres] = useState<{ id: number; name: string }[]>([]);
  const [isActivated, setIsActivated] = useState<boolean>(true);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((response) => response.json())
      .then((response) => setGenres(response.genres))
      .catch((err) => console.error(err));
  }, []);

  const handleGenresChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedGenres = parseInt(event.target.value, 10);
   
    if (event.target.checked) {
      matchCtx.setGenresHandler(selectedGenres);
    } else {
      matchCtx.removeGenresHandler(selectedGenres);
    }
  };

  if (!genres) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{position:'relative', width:{xs: '100%', sm:'fit-content'}}}>
      <Button
        sx={{ width: { xs:'100%', sm:"155px"} }}
        onClick={() => setIsActivated(!isActivated)}
        variant="contained"
      >
        Genres
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
          zIndex: 999,
          bgcolor: '#242424',
          "&::-webkit-scrollbar": {
            width: "5px", // Adjust the height of the scrollbar
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#555",
            borderRadius: "5px", // Round the edges of the thumb
          },
        }}
      >
        {genres.map((genre) => {
          return (
            <FormControlLabel
              sx={{ width: "100%" }}
              key={genre.id}
              control={<Checkbox value={genre.id}
              checked={matchCtx.genres.includes(genre.id)}
              onChange={(e) => handleGenresChange(e)} />}
              label={genre.name}
  
            />
          );
        })}
      </FormGroup>
    </Box>
  );
};

export default WithGenres;
