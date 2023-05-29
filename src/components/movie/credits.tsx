import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { MovieCreditsInterface } from "../config/interfaces";
import { options } from "../config/api";
import { Box, Typography } from "@mui/material";
import  imgUrl from '../images/unknown.jpg'

const Credits = () => {

    const { id } = useParams<{ id: string }>();
    const [credits, setCredits] = useState<MovieCreditsInterface[]>([]);


    const getCasts = async () => {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${id}/credits`,
                options
            );
            const data = await response.json();
            setCredits(data.cast);
            }
         catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        getCasts();
    }, [id]);



  return (
    <Box sx={{display: 'flex',  flexWrap:'wrap', justifyContent:'space-between'}} >
        {credits.map((credit) => (
             <Box key={credit.id} sx ={{ display:'flex', alignItems:'center', gap:'2rem', border: '1px solid #555', width: {xs: '100%', sm:'45%', md:'30%'}, mb:'10px', pr:'1rem', }}>
                <Box sx={{height:'100px'}}>
                { credit.profile_path?.length ? <img src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`} style={{height:'100%'}} alt={credit.name} ></img> : <img src={imgUrl} style={{height:'100%',width:'66px',}} alt={credit.name} ></img>}
                </Box>
                <Box>
                <Typography variant='h4' sx={{color: '#EFCA3C'}}>{credit.name}</Typography>
                <Typography>{credit.character}</Typography>
                </Box>
            </Box>
        ))}  
    </Box>
  )
}

export default Credits