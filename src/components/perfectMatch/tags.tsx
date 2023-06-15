import { useState, } from "react";
import {Box,  Checkbox, FormControlLabel, FormGroup, Button} from '@mui/material';
import { keywords } from "../config/keywords";

const Tags = () => {
  const [isActivated, setIsActivated] = useState<boolean>(true);

  return (
  <Box sx={{width:'max-content'}}>
   <Button sx={{width:'100%'}} onClick={() => setIsActivated(!isActivated)}  variant="contained">Tags</Button>
  <FormGroup 
  sx={{height:'300px', overflowY:'scroll', overflowX:'hidden', display: isActivated ? 'none':'flex' , flexDirection:'column', flexWrap:'nowrap',    '&::-webkit-scrollbar': {
      width: '5px', // Adjust the height of the scrollbar
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#555',
      borderRadius: '5px', // Round the edges of the thumb
    }}}>
    {keywords.map((keyword) => {
        return <FormControlLabel key={keyword} control={<Checkbox  value={keyword}/>} label={keyword}/>;
    }
    )}
  </FormGroup>
  </Box>

    );
};

export default Tags;
