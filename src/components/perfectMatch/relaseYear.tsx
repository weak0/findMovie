import { Slider, Box , Typography, Button } from '@mui/material'
import {useState} from 'react'

const RelaseYear = () => {
    const [value, setValue] = useState<number[]>([1950, 2023]);
    const [isActivated, setIsActivated] = useState<boolean>(true)

  return (
    <Box sx={{width:'max-content'}}>
        <Button onClick={() => setIsActivated(!isActivated)} variant='contained' sx={{width:'100%'}}>RelaseYear</Button>
        <Slider 
        sx={{display: isActivated ? 'none':'block', width:'200px', mt:'1rem',}}
        value={value}
        valueLabelDisplay='auto'
        size='medium'
        min={1950}
        max={2023}
        onChange={(event, newValue) => setValue(newValue as number[])}
        marks={[{value:1950, label:'1950'},{value:2000, label:'2000',} ,{value:2023, label:'2023'}]} 
        />

    </Box>
  )
}

export default RelaseYear