import { ImageGalleryItem, ImageGalleryItemImage } from "./ImageGalleryItems.styled";
import PropTypes from 'prop-types'; 

export const ImageGalleryItems = ({webformatURL, largeImageURL, onClick}) => <ImageGalleryItem >
<ImageGalleryItemImage src={webformatURL} alt={largeImageURL}  onClick={() => {
          onClick(largeImageURL);
        }}/>
</ImageGalleryItem> 

ImageGalleryItems.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}