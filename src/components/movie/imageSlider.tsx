import { useState, useEffect, useRef} from 'react';
import { Box, IconButton} from '@mui/material';
import { options } from '../config/api';
import { MovieImagesInterface } from '../config/interfaces';
import { style } from '../popular/style';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { SxProps } from '@mui/material/styles';
import ImageModal from './imageModal';

const ImageSlider = ({ id }: { id: string | undefined }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState<MovieImagesInterface[]>();
  const [modalIsActive, setModalIsActive] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<number>(0);

  const getImages = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/images`,
        options
      );
      const data = await response.json();
      setImages(data.backdrops);
    } catch (error) {
      console.error(error);
    }
  };

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

const handleImageClick = (imageInd: number) => {
  setModalImage(imageInd);
  setModalIsActive(true);
}

const handleModalClose = () => {
  setModalIsActive(false); 
}

  useEffect(() => {
    getImages();
  }, [id]);

  if (!images) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box>
        <Box sx={style.mostPopularContainer}>
          <IconButton sx={style.button} onClick={scrollLeft}>
            <NavigateBeforeIcon sx={style.icon} />
            </IconButton>
            <Box sx={style.mostPopularScroll} ref={scrollRef}>
          {images.map((image, index) => (
            <Box sx={{cursor:'pointer'}} key={image.file_path} onClick={() => handleImageClick(index) }>
            <img
              src={`https://image.tmdb.org/t/p/w300/${image.file_path}`}
            >
            </img>
            </Box>
            ))}
            </Box>
            <IconButton sx={[style.button, style.buttonRight] as SxProps} onClick={scrollRight}><ChevronRightIcon sx={style.icon} /></IconButton>
        </Box> 
      </Box>
     { modalIsActive && <ImageModal images={images} number={modalImage} modalClose={handleModalClose} />}
    </>
  );
};

export default ImageSlider;