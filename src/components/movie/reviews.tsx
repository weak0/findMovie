import {useState, useEffect} from 'react'
import { MovieReviewsInterface } from '../config/interfaces';
import {useParams} from 'react-router-dom';
import {options} from '../config/api';
import {Box, Typography} from '@mui/material';



const Reviews = () => {

    const {id} = useParams<{ id: string }>();
    const [reviews, setReviews] = useState<MovieReviewsInterface[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const getReviews = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=ENG&page=${page}`, options);
            const data = await response.json();
            setReviews(data.results);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getReviews();
    }, [id, page]);

    if (!reviews) {
        return <div>Loading...</div>;
    }

  return (
    <Box>
        {reviews.map((review) => (
            <Box key={review.id} sx={{ border:'1px solid #555', borderRadius:'15px', p: '1rem', mb:'1rem'}}>
                <Box sx={{display:'flex', alignItems:'center', gap:'1rem'}}>
                <Box><img src={`https://ui-avatars.com/api/?name=${review.author}&background=random&size=32&rounded=true`} alt={review.author}/></Box>
                <Typography variant='h4' sx={{color: '#EFCA3C'}}>{review.author}</Typography> 
                <Typography>{review.created_at.slice(0,10)}</Typography>
                {review.author_details.rating && <Typography variant='h4' sx={{color: '#EFCA3C', flexGrow:'1', textAlign:'right'}} >Rating: {review.author_details.rating} </Typography> }               
                </Box>
                <Typography>{review.content}</Typography>
            </Box>
        ))}
        {totalPages > 1 && (
        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <Typography variant='h4' sx={{color: '#EFCA3C'}}>{page}</Typography>
            <Box sx={{display:'flex', gap:'1rem'}}>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
            </Box>
        </Box>
        )}
    </Box>
  )
}

export default Reviews