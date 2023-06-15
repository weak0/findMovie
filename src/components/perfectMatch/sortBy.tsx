import { useState } from "react";
import {
  FormControl,
  Radio,
  Button,
  RadioGroup,
  FormControlLabel,
  Box,
} from "@mui/material";

const SortBy = () => {
  const [sortBy, setSortBy] = useState<string>("popularity.desc");
  const [isActivated, setIsActivated] = useState<boolean>(true);
  return (
    <Box sx={{with:'max-content'}}>
      <Button variant="contained" sx={{ width: "100%" }} onClick={() => setIsActivated(!isActivated)}>
        Sort By
      </Button>
      <FormControl  sx={{height:'300px', overflowY:'scroll', overflowX:'hidden', display: isActivated ? 'none':'flex' , flexDirection:'column', flexWrap:'nowrap',    '&::-webkit-scrollbar': {
      width: '5px', // Adjust the height of the scrollbar
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#555',
      borderRadius: '5px', // Round the edges of the thumb
    }}}>
        <RadioGroup value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <FormControlLabel
            value="popularity.desc"
            control={<Radio />}
            label="Popularność Descending"
          />
          <FormControlLabel
            value="popularity.asc"
            control={<Radio />}
            label="Popularity Ascending"
          />
          <FormControlLabel
            value="revenue.desc"
            control={<Radio />}
            label="Revenue Descending"
          />
          <FormControlLabel
            value="revenue.asc"
            control={<Radio />}
            label="Revenue Ascending"
          />
          <FormControlLabel
            value="primary_release_date.desc"
            control={<Radio />}
            label="Primary Release Date Descending"
          />
          <FormControlLabel
            value="primary_release_date.asc"
            control={<Radio />}
            label="Primary Release Date Ascending"
          />
          <FormControlLabel
            value="vote_average.desc"
            control={<Radio />}
            label="Vote Average Descending"
          />
          <FormControlLabel
            value="vote_average.asc"
            control={<Radio />}
            label="Vote Average Ascending"
          />
          <FormControlLabel
            value="vote_count.desc"
            control={<Radio />}
            label="Vote Count Descending"
          />
          <FormControlLabel
            value="vote_count.asc"
            control={<Radio />}
            label="Vote Count Ascending"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default SortBy;
