import React from 'react'
import { Box, Typography} from '@mui/material';
import { MovieProps } from '../config/interfaces';
const TopMovie = ({data}: MovieProps) => {
  return (
    <Box sx={{display:'flex', justifyContent:'space-between', border: '1px solid #555', mb:'20px',}}>
        <Box sx={{bgcolor:'#EFCA3C', color:'black', display:'flex', alignItems:'center'}}>
            <Typography sx={{pl:'10px', pr:'10px', fontSize:'2.5em'}}>{1}</Typography>
        </Box>
        <Box>
            <img src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}></img>
        </Box>
        <Box sx={{flexGrow:'1'}}>
            <Typography variant='h3'>{data.title}</Typography>
            <Typography>Relase date: {data.release_date}</Typography>
            <Typography>Geners ID: {data.genre_ids}</Typography>
            <Typography>Popularity: {data.popularity}</Typography>
        </Box>
        <Box>
            <Box>
                <Typography>Vote avg: </Typography>
                <Typography>{data.vote_average}</Typography>
            </Box>
            <Typography>Votes: {data.vote_count}</Typography>
        </Box>
    </Box>
  )
}

export default TopMovie;