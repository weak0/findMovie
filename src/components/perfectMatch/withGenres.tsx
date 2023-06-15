import {useState, useEffect} from 'react'
import {options} from '../config/api'
import {Box, Button, FormGroup, FormControlLabel, Checkbox} from '@mui/material'

const WithGenres = () => {

    const [genres, setGenres] = useState<{id : number , name: string}[]>([])
    const [isActivated, setIsActivated] = useState<boolean>(true)

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
  .then(response => response.json())
  .then(response => setGenres(response.genres))
  .catch(err => console.error(err));
    }, [])

    if (!genres) {
        return <div>Loading...</div>
    }

  return (
    <Box sx={{width:'max-content'}}>
    <Button sx={{width:'100%'}} onClick={() => setIsActivated(!isActivated)}  variant="contained">Genres</Button>
   <FormGroup 
   sx={{height:'300px', overflowY:'scroll', overflowX:'hidden', display: isActivated ? 'none':'flex' , flexDirection:'column', flexWrap:'nowrap',    '&::-webkit-scrollbar': {
       width: '5px', // Adjust the height of the scrollbar
     },
     '&::-webkit-scrollbar-thumb': {
       backgroundColor: '#555',
       borderRadius: '5px', // Round the edges of the thumb
     }}}>
    {genres.map((genre) => {
        return <FormControlLabel sx={{width:'100%'}} key={genre.id} control={<Checkbox  value={genre.id}/>} label={genre.name} checked={true}/>;
    }
    )}
  </FormGroup>
    </Box>
  )
}

export default WithGenres