import  {useState} from 'react'
import { Slider, Box , Button } from '@mui/material'

const VateAvg = () => {

    const [value, setValue] = useState<number[]>([0, 10]);
    const [isActivated, setIsActivated] = useState<boolean>(true)

  return (
    <Box sx={{width:'max-content'}}>
        <Button onClick={() => setIsActivated(!isActivated)} variant='contained' sx={{width:'100%'}}>Rate</Button>
        <Slider 
        sx={{display: isActivated ? 'none':'block', width:'150px', mt:'1rem'}}
        value={value}
        valueLabelDisplay='auto'
        size='medium'
        step={0.1}
        min={0}
        max={10}
        onChange={(event, newValue) => setValue(newValue as number[])}
        marks={[{value:0, label:'0'},{value:10, label:'10'}]} 
        />

    </Box>
  )
} 

export default VateAvg