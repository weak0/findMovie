import {useEffect, useState}from 'react'
import { Box, Typography } from '@mui/material'
import { MovieInterface } from '../config/interfaces'
import { options } from '../config/api'
import { useParams } from 'react-router-dom'
import VideoPlayer from '../config/youtube';

const Movie = ({}) => {
  const {id} = useParams<{id: string}>()
  const [movie, setMovie] = useState<MovieInterface>({} as MovieInterface);
  const [video, setVideo] = useState<string>('');

  const getMovie = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=ENG`, options);
    const data = await response.json();
    setMovie(data);
  };

  const getVideo = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=ENG`, options);
    const data = await response.json();
    console.log(data.results[0].key);
    setVideo(data.results[0].key);
  };

  useEffect(() => {
    getMovie();
    getVideo();
  }, [id]);


  if(!movie || !video) {
    return <p>Loading...</p>
  }

  return (
    <Box>
      <VideoPlayer videoId={video} />
      <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}></img>
      <Typography variant='h2'>{movie.title}</Typography>
    </Box>
  )
}

export default Movie