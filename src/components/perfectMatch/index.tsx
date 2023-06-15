import { NavBar } from "../navbar"
import OriginCountry from "./originCountry"
import ProvidersFilter from "./providersFilter"
import RelaseYear from "./relaseYear"
import WithGenres from "./withGenres"
import {Box} from '@mui/material'
import VoteAvg from "./vote_average"
import SortBy from "./sortBy"
import Tags from "./tags"

const PerfectMatch = () => {

return (
<>
<NavBar/>
<ProvidersFilter/>
<Box sx={{display:'flex', gap:'1rem'}}>
<SortBy/>
<OriginCountry/>
<WithGenres/>
<RelaseYear/>
<Tags/>
<VoteAvg/>
</Box>
</>
)


}
export default PerfectMatch