import PropTypes from 'prop-types'; 

import { ImageGallerys } from "./ImageGallery.styled";
import {ImageGalleryItems  } from "../ImageGalleryItems/ImageGalleryItems";


export const ImageGallery = ({images, onClick}) => (
    <ImageGallerys >
       {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItems
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={onClick}
          />
        );})}
</ImageGallerys>
) 


ImageGallery.propTypes = {
  images: PropTypes.array.isRequired, 
  onClick: PropTypes.func.isRequired,
}