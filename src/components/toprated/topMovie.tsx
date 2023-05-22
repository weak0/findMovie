import React from 'react'
import { Box, Typography, Grid} from '@mui/material';
import { MovieProps } from '../config/interfaces';
const TopMovie = ({data}: MovieProps) => {
  return (
    <Grid container sx={{ border: '1px solid #555', mb:'20px', flexWrap:'wrap', boxShadow:'0px 0px 10px 2px black',}}>
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
            <Typography>Geners ID: {data.genre_ids}</Typography>
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