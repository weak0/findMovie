import { SxProps } from "@mui/material"

 export const style : Record<string, SxProps> = {
    mostPopularContainer: {
        display: 'flex',
        overflowX: 'auto',
        gap: '0.5rem',
        "&::-webkit-scrollbar":{
            display: 'none',
          },
    },
    icon:{
        color:'white',
        position: 'fixed',
        
     }
    
}