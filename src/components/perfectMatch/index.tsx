import { NavBar } from "../navbar"
import OriginCountry from "./originCountry"
import ProvidersFilter from "./providersFilter"
import WithGenres from "./withGenres"
import {Box} from '@mui/material'

const PerfectMatch = () => {

return (
<>
<NavBar/>
<ProvidersFilter/>
<Box sx={{display:'flex', gap:'1rem'}}>

<OriginCountry/>
<WithGenres/>
</Box>
</>
)


}
export default PerfectMatch