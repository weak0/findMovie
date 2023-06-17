import { NavBar } from "../navbar"
import OriginCountry from "./originCountry"
import ProvidersFilter from "./providers"
import RelaseYear from "./relaseYear"
import WithGenres from "./withGenres"
import {Box, Button} from '@mui/material'
import VoteAvg from "./vote_average"
import SortBy from "./sortBy"
import Tags from "./tags"
import { matchContext } from "../store/PerfectMatchContext"
import { useContext, useState } from "react"
import { options } from "../config/api"
import { MovieInterface } from "../config/interfaces"

const PerfectMatch = () => {
const matchCtx = useContext(matchContext)
const [isLoading, setIsLoading] = useState<boolean>(false)
const [movies, setMovies] = useState<MovieInterface[]>([])


const handleRequest = () => {
setIsLoading(true)
fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

}


return (
<>
<NavBar/>
<ProvidersFilter/>
<Box sx={{display:'flex', gap:'1rem', justifyContent:{lg:'flex-end', md:'center'}, flexWrap:'wrap'}}>
<SortBy/>
<OriginCountry/>
<WithGenres/>
<RelaseYear/>
<Tags/>
<VoteAvg/>
</Box>
<Box sx={{display:'flex', justifyContent:'flex-end'}}>
<Button variant='outlined' sx={{ mt:'1rem'}}>Search</Button>
</Box>
</>
)


}
export default PerfectMatch