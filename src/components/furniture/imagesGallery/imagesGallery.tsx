import * as React from 'react';
import './imagesGallery.css';

export interface IImagesGalleryProps {
  title: string;
  images: string[];
}

export const ImagesGallery = (props: IImagesGalleryProps) => {
  const [selectedImage, setSelectedImage] = React.useState<string>(
    props.images.length ? props.images[0] : ''
  );

  return (
    <div className="images-gallery">
      <div className="main-image">
        <img src={selectedImage} alt={props.title}></img>
      </div>
      <div className="small-images">
        {props.images.map((image) => (
          <img
            src={image}
            alt={props.title}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
    </div>
  );
};
