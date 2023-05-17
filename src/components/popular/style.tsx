import { SxProps } from "@mui/material"

 export const style : Record<string, SxProps> = {
   
    mostPopularContainer: {
        position: 'relative',
    },
    mostPopularScroll: {
        display: 'flex',
        overflowX: 'auto',
        scrollBehavior: 'smooth',
        "&::-webkit-scrollbar":{
            display: 'none',
          },
    },
    icon:{
        color:'white',
        fontSize: '2rem',
     },
    button: {
        position:'absolute',
        left: '0',
        background: 'rgba(0,0,0, 0.7)',
        border: '1px solid white',
        top:'50%',
        transform: 'translateY(-50%)',
        
    },
    buttonRight: {
        left: 'auto',
        right: 0,
    }
}