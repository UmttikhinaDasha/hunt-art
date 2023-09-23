import {FC, useState, useEffect} from "react";
import "./Gallery.scss";

interface GalleryProps {
  onSetModalOpen?(imgSrc?: string): void;
}

export const Gallery:FC<GalleryProps> = (props) => {

  const {onSetModalOpen} = props;

  const [images, setImages] = useState<object[]>();

  useEffect(() => {
    
    setImages(Array.from({length: 40}).map((_, index) => {
      return {
        id: index,
        src:`https://picsum.photos/200/${Math.floor(
          Math.random() * (300 - 200 + 1) + 200
        )}`
      }
    }));

  }, []);

  const renderGallery = () => {

    return images?.map(img => (
      <div className="masonry-brick masonry-brick--h" 
           tabIndex={0}
           key={img.id} 
           onClick={e => onSetModalOpen?.(img.src)}>
        <img className='masonry-img'
             src={img.src}
          />
      </div>
    ));
  }

  return (
    <div className="gallery">
      <div className="masonry">
        {renderGallery()}
      </div>
    </div>
  )
}