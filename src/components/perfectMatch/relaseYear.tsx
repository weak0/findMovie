import { Slider, Box, Typography, Button } from "@mui/material";
import { useState } from "react";

const RelaseYear = () => {
  const [value, setValue] = useState<number[]>([1950, 2023]);
  const [isActivated, setIsActivated] = useState<boolean>(true);

  return (
    <Box sx={{ position: "relative" }}>
      <Button
        sx={{ width: "242px" }}
        onClick={() => setIsActivated(!isActivated)}
        variant="contained"
      >
        RelaseYear
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
          zIndex: 1,
          bgcolor: '#242424',
        }}
      >
        <Slider
          sx={{
            display: isActivated ? "none" : "block",
            width: "200px",
            mt: "1rem",
          }}
          value={value}
          valueLabelDisplay="auto"
          size="medium"
          min={1950}
          max={2023}
          onChange={(event, newValue) => setValue(newValue as number[])}
          marks={[
            { value: 1950, label: "1950" },
            { value: 2000, label: "2000" },
            { value: 2023, label: "2023" },
          ]}
        />
      </Box>
    </Box>
  );
};

export default RelaseYear;
