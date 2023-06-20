import { useState, useContext } from "react";
import { Slider, Box, Button } from "@mui/material";
import { matchContext } from "../store/PerfectMatchContext";

const VateAvg = () => {
  const matchCtx = useContext(matchContext);
  const [isActivated, setIsActivated] = useState<boolean>(true);

  return (
    <>
      <Box sx={{ position: "relative", width:{xs: '100%', sm:'fit-content'} }}>
        <Button
          onClick={() => setIsActivated(!isActivated)}
          variant="contained"
          sx={{ width:{xs: '100%', sm:'164px'} }}
        >
          Rate
        </Button>
        <Box
          sx={{
            display: isActivated ? "none" : "block",
            position: "absolute",
            top: "3rem",
            left: "0",
            padding: "1rem 20px",
            border: "1px solid #EFCA3C",
            borderRadius: "15px",
            zIndex: 999,
            bgcolor: '#242424',
          }}
        >
          <Slider
            sx={{ width: "150px", mt: "1rem" }}
            value={matchCtx.voteAverage}
            valueLabelDisplay="auto"
            size="medium"
            step={0.1}
            min={0}
            max={10}
            onChange={(event, newValue) =>{
              event.preventDefault(),
               matchCtx.setVoteAverageHandler(newValue as number[])}}
            marks={[
              { value: 0, label: "0" },
              { value: 10, label: "10" },
            ]}
          />
        </Box>
      </Box>
    </>
  );
};

export default VateAvg;
