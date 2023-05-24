import { useEffect, useState } from 'react'
import { Box, Typography, Grid , Hidden } from '@mui/material';
import { MovieInterface } from '../config/interfaces';
import { options } from '../config/api';
import { Link } from 'react-router-dom';
const TopMovie = ({ data, rank }: { data: MovieInterface, rank: number }) => {

    const [loading, setLoading] = useState<boolean>(true);
    const [providersLoading, setProvidersLoading] = useState<boolean>(true);
    const [movieDetails, setMovieDetails] = useState<any>({});
    const [providers, setProviders] = useState<any>({});


    const getDetails = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${data.id}?language=ENG`, options);
        const movieDetails = await response.json();
        return movieDetails;
    }

    const getProviders = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${data.id}/watch/providers`, options);
        const providers = await response.json();
        return providers.results.PL;
    }

    useEffect(() => {
        getDetails().then((data) => {
            setMovieDetails(data);
            setLoading(false);
        });
        getProviders().then((data) => {
            setProviders(data);
            setProvidersLoading(false);
        }
        )
    }, [data.id])



    if (loading || providersLoading) {
        return null;
    }

    return (
        <Link to={`/movie/${data.id}`} style={{ textDecoration: 'none', color: 'white' }}>
            <Grid container sx={{ border: '1px solid #555', mb: '20px', flexWrap: 'wrap', boxShadow: '0px 0px 10px 2px black', height: { lg: '300px' } }}>
                <Hidden only={'xs'}>
                <Grid item sm={'auto'} sx={{ bgcolor: '#EFCA3C', color: 'black', display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ pl: '10px', pr: '10px', fontSize: '2.5em', flexGrow: '1', textAlign: 'center' }}>{rank}</Typography>
                </Grid>
                </Hidden>
                <Grid item xs={12} sm={'auto'}>
                    <img src={`https://image.tmdb.org/t/p/w185/${data.poster_path}`} style={{ height:'100%', width: '100%' }}></img>
                </Grid>
                <Grid item xs={12} sm={true} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: '1rem' }}>
                    <Box>
                        <Typography variant='h3'>{data.title}</Typography>
                    </Box>
                    <Box>
                        <Typography>Relase date: {data.release_date}</Typography>
                        <Typography>{movieDetails.overview.split(" ").slice(0, 30).join(" ") + "..."}</Typography>

                        <Typography>Generes: {movieDetails.genres.map((genre: { id: number; name: 'string' }) => genre.name + " ")}</Typography>
                        <Typography> Providers:</Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: '10px' }}>
                            {providers && providers.flatrate ? (providers.flatrate.map((provider: { logo_path: string, provider_id: number, provider_name: 'string', display_priority: number }) =>
                                <img src={`https://image.tmdb.org/t/p/w92/${provider.logo_path}`} style={{ width: '50px', borderRadius: '50%', border: '1px solid #555' }} key={provider.provider_id}></img>)) : <Typography>Brak</Typography>}
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={'auto'} sx={{ bgcolor: '#EFCA3C', color: 'black', p: '10px', borderLeft: '1px solid #555', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
                    <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                        <Typography sx={{ alignSelf: 'center' }}>Rate: </Typography>
                        <Typography sx={{ fontWeight: 'bold', fontSize: '3rem' }}>{data.vote_average.toFixed(1)}</Typography>
                    </Box>
                    <Box>
                        <Typography>Votes: {data.vote_count}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Link>
    )
}

export default TopMovie;