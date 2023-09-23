
import {FC, useState, useEffect, useRef} from "react";
import ImageSection from "../imageSection/ImageSection";
import InfoSection from "../infoSection/InfoSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./ArtInfoModalWindow.scss";

interface ArtInfoModalWindowProps {
  imgSrc?: string;
}

const ArtInfoModalWindow:FC<ArtInfoModalWindowProps> = (props) => {

  const {imgSrc} = props;

  const [classNames, setClassNames] = useState<string>('modal');

  useEffect(() => {
    console.log(imgSrc)
    if (imgSrc && imgSrc !== '') setClassNames('modal active');
  }, [imgSrc]);

  const onClickingOut = (e : MouseEvent) => {
    if (e.target === e.currentTarget) {
      setClassNames("modal");
    }
  }

  const onClickExit = (e : MouseEvent) => {
    setClassNames("modal");
  }
  
  const closeModalOnKeyDown = (e : KeyboardEvent) => {
    if (e.code === "Enter" || e.code === "Space") setClassNames("modal");
  }

  return (
    <div className={classNames} onClick={e => onClickingOut(e)}> 
      <div className="modal__dialog">

        <FontAwesomeIcon icon={faXmark} className="modal__close" tabIndex={-1} onClick={e => onClickExit(e)} onKeyDown={e => closeModalOnKeyDown(e)}/>
        
      
        <div className="modal__content">
        
          <ImageSection imgSrc={imgSrc}/>
          <InfoSection/>

        </div>

      </div>
    </div>
  )
}

export default ArtInfoModalWindow;