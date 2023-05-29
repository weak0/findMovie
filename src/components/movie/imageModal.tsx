import { Backdrop, Box, IconButton } from '@mui/material';
import { MovieImagesInterface } from '../config/interfaces';
import { useState, useLayoutEffect, useRef } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const ImageModal = ({ images, number, modalClose }: { images: MovieImagesInterface[], number: number, modalClose: () => void }) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const [indexBack, setIndex] = useState<number>(number);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (backdropRef.current === e.target) {
      modalClose();
    }
  };

  useLayoutEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setIndex(prevIndex => {
        if (e.key === 'ArrowRight') {
          if (prevIndex === images.length - 1) {
            return 0;
          }
          return prevIndex + 1;
        }
        if (e.key === 'ArrowLeft') {
          if (prevIndex === 0) {
            return images.length - 1;
          }
          return prevIndex - 1;
        }
        return prevIndex;
      });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
  <>
    <Backdrop open={true} sx={{ zIndex: 1 }} onClick={(event) => handleBackdropClick(event as React.MouseEvent<HTMLDivElement>)} ref={backdropRef}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
      <IconButton onClick={() => setIndex((prevIndex) =>{
          if (prevIndex === images.length - 1) {
            return 0;
          }
          return prevIndex + 1;
        })}
        sx={{mr:'-35px'}}>
        <NavigateBeforeIcon sx={{ color: 'white' }} />
      </IconButton>
        <img src={`https://image.tmdb.org/t/p/original/${images[indexBack].file_path}`} style={{ maxHeight: '70vh', maxWidth: '90vw' }} alt="Movie Image" />
      <IconButton  onClick={() => setIndex((prevIndex) => {
          if (prevIndex === 0) {
            return images.length - 1;
          }
          return prevIndex - 1;
        })}
        sx={{ml:'-35px'}}>
        <ChevronRightIcon sx={{ color: 'white' }} />
      </IconButton>
      </Box>
    </Backdrop>
  </>
  );
};

export default ImageModal;
