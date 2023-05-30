import React from 'react'
import { Box, Typography, IconButton, SxProps } from '@mui/material'
import { style } from './style.tsx'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { MovieInterface } from '../../components/config/interfaces.tsx';
import MovieElement from './movieElement.tsx';


const MovieContainer = ({ data, title }: { data: MovieInterface[], title?: string }) => {

    const scrollRef = React.useRef<HTMLDivElement>(null);

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
        }
    }
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
        }
    }

    const moviesElemnts: JSX.Element[] = data.map((movie) => (<MovieElement data={movie} key={movie.id} />))

    return (
        <>
            {title && <Typography variant='h2'>{title}</Typography>}
            <Box sx={style.mostPopularContainer}>
                <IconButton sx={style.button} onClick={scrollLeft}><NavigateBeforeIcon sx={style.icon} /></IconButton>
                <Box sx={style.mostPopularScroll} ref={scrollRef}>
                    {data ? moviesElemnts : null}
                </Box>
                <IconButton sx={[style.button, style.buttonRight] as SxProps} onClick={scrollRight}><ChevronRightIcon sx={style.icon} /></IconButton>
            </Box>
        </>
    )

}

export default MovieContainer