import {FC} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./ImageSection.scss";

interface ImageSectionProps {
  imgSrc?: string;
}

const ImageSection:FC<ImageSectionProps> = (props) => {

  const {imgSrc} = props;

  return (
    <div className="modal__img-block">
      <div className="modal__img-wrapper">
        <img
          className='modal__img'
          src={imgSrc}
        />
      </div>
      <div className="modal__btns-container">
        <button className="icon-btn modal__like-btn" tabIndex={2}>
          <FontAwesomeIcon className="icon" icon={faHeart}/>
        </button>
        <button className="modal__subscribe-btn text-btn" tabIndex={2}>Подписаться</button>
      </div>
      <div className="modal__tags">#fantasy #art #witcher #forest</div>
    </div>
  )
}

export default ImageSection;