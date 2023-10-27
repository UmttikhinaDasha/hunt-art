import {FC, useState, useEffect} from "react";
import "./Gallery.scss";

interface GalleryProps {
  onSetModalOpen?(imgSrc?: string): void;
  clazzName?: string;
  images?: object[];
}

export const Gallery:FC<GalleryProps> = (props) => {

  const {onSetModalOpen, clazzName, images} = props;

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
    <div className={"gallery " + clazzName}>
      <div className="masonry">
        {renderGallery()}
      </div>
    </div>
  )
}