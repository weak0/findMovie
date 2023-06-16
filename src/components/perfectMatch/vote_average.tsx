import { useState } from "react";
import { Slider, Box, Button } from "@mui/material";

const VateAvg = () => {
  const [value, setValue] = useState<number[]>([0, 10]);
  const [isActivated, setIsActivated] = useState<boolean>(true);

  return (
    <>
      <Box sx={{ position: "relative" }}>
        <Button
          onClick={() => setIsActivated(!isActivated)}
          variant="contained"
          sx={{ width: "192px" }}
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
            zIndex: 1,
            bgcolor: '#242424',
          }}
        >
          <Slider
            sx={{ width: "150px", mt: "1rem" }}
            value={value}
            valueLabelDisplay="auto"
            size="medium"
            step={0.1}
            min={0}
            max={10}
            onChange={(event, newValue) => setValue(newValue as number[])}
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
