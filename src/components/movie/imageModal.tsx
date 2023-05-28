import {Backdrop, Box} from '@mui/material'

const ImageModal = ({path, modalClose }:{path: string, modalClose: () => void}) => {

    console.log(path)
  return (
    <Backdrop open={true} sx={{zIndex: 100}} onClick={modalClose}>
        <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>   
        <img src={`https://image.tmdb.org/t/p/original/${path}`} style={{maxHeight:'70vh', maxWidth:'90vw'}}></img>
        </Box>
    </Backdrop>

  )
}

export default ImageModal