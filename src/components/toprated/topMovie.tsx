import { useEffect, useState } from 'react'
import { Box, Typography, Grid} from '@mui/material';
import { MovieProps } from '../config/interfaces';
import { options } from '../config/api';
const TopMovie = ({data}: MovieProps) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [movieDetails, setMovieDetails] = useState<any>({});
    const [providers, setProviders] = useState<any>({});    

    
    const getDetails = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${data.id}?language=PL`, options);
        const movieDetails = await response.json();
        return movieDetails;
    }
    
    const getProviders = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${data.id}/watch/providers?language=PL`, options);
        const providers = await response.json();
        return providers.results.PL;
    }

    useEffect(() => {   
        getDetails().then((data) => {
            setMovieDetails(data);
            setLoading(false);
        });
    }, [data.id])

    
    
    if(loading) {
        return <div>Loading...</div>
    }

  return (
    <Grid container sx={{ border: '1px solid #555', mb:'20px', flexWrap:'wrap', boxShadow:'0px 0px 10px 2px black'}}>
        <Grid item xs={3} sm={'auto'} sx={{bgcolor:'#EFCA3C', color:'black', display:'flex', alignItems:'center'}}>
            <Typography sx={{pl:'10px', pr:'20px', fontSize:'2.5em', flexGrow:'1', textAlign:'center'}}>{1}</Typography>
        </Grid>
        <Grid item xs={9} sm={'auto'}>
            <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`} style={{height:'100%', width:'100%'}}></img>
        </Grid>
        <Grid item xs={12} sm={true} sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', p:'1rem'}}>
            <Box>
            <Typography variant='h3'>{data.title}</Typography>
            </Box>
            <Box>
            <Typography>Relase date: {data.release_date}</Typography>
            <Typography>{movieDetails.overview.split(" ").slice(0, 30).join(" ") + "..."}</Typography>

            <Typography>Generes: {movieDetails.genres.map((genre:{id:number; name:'string'}) => genre.name+" ")}</Typography>
            <Typography>Popularity: {data.popularity}</Typography>
            </Box>
        </Grid>
        <Grid item xs={12} sm={'auto'} sx={{bgcolor:'#EFCA3C', color:'black', p:'10px', borderLeft: '1px solid #555', display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:'column'}}>
            <Box sx={{flexGrow:1, display:'flex', flexDirection:'column', justifyContent:'center',}}>
                <Typography sx={{alignSelf:'center'}}>Rate: </Typography>
                <Typography sx ={{ fontWeight:'bold', fontSize:'3rem'}}>{data.vote_average}</Typography>
            </Box>
            <Box>
            <Typography>Votes: {data.vote_count}</Typography>
            </Box>
        </Grid>
    </Grid>
  )
}

export default TopMovie;