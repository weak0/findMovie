import { useState, useContext } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Button,
} from "@mui/material";
import { keywords } from "../config/keywords";
import { matchContext } from "../store/PerfectMatchContext";

const Tags = () => {
  const matchCtx = useContext(matchContext);
  const [isActivated, setIsActivated] = useState<boolean>(true);

  const keywordsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedKeyword = e.target.value;
    if (e.target.checked) {
      matchCtx.setTagsHandler(selectedKeyword);
    }
    else {
      matchCtx.removeTagsHandler(selectedKeyword);
    }
  }


  return (
    <Box sx={{ position:'relative' }}>
      <Button
        sx={{ width: "270px" }}
        onClick={() => setIsActivated(!isActivated)}
        variant="contained"
      >
        Tags
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
          padding: "10px",
          zIndex: 1,
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
        {keywords.map((keyword) => {
          return (
            <FormControlLabel
              key={keyword}
              control={<Checkbox value={keyword} 
              checked={matchCtx.tags.includes(keyword)}
              onChange={(e) => keywordsHandler(e)}
              />}
              label={keyword}
            />
          );
        })}
      </FormGroup>
    </Box>
  );
};

export default Tags;
