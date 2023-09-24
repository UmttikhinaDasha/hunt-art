
import {FC} from "react";
import ImageSection from "../imageSection/ImageSection";
import InfoSection from "../infoSection/InfoSection";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import "./ArtInfoModalWindow.scss";

interface ArtInfoModalWindowProps {
  imgSrc?: string;
  onSetModalClose?(): void;
}

const ArtInfoModalWindow:FC<ArtInfoModalWindowProps> = (props) => {

  const {imgSrc, onSetModalClose} = props;

  const onClickingOut = (e : MouseEvent) => {
    if (e.target === e.currentTarget) {
      onSetModalClose?.();
    }
  }

  const onClickExit = (e : MouseEvent) => {
    onSetModalClose?.();
  }
  
  const closeModalOnKeyDown = (e : KeyboardEvent) => {
    if (e.code === "Enter" || e.code === "Space") onSetModalClose?.();
  }

  return (
    <div className="modal active" onClick={e => onClickingOut(e)}> 
      <div className="modal__dialog">

        <FontAwesomeIcon icon={faXmark} className="modal__close" tabIndex={-1} onClick={e => onClickExit(e)} onKeyDown={e => closeModalOnKeyDown(e)}/>

        <div className="modal__content">
        
          <div className="modal__row-container">
            <ImageSection imgSrc={imgSrc}/>
            <InfoSection/>
          </div>
          
          <div className="modal__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cupiditate cum, ea in obcaecati veniam odit nemo. Reprehenderit distinctio beatae asperiores sapiente, voluptatum dolores. Cupiditate doloremque, at ab repudiandae, blanditiis magni voluptatum eveniet perspiciatis voluptas, quae tempora officiis ipsum corporis culpa esse. Quisquam perferendis harum iste eos laborum at laudantium perspiciatis praesentium doloremque est beatae in saepe cumque dolorum, totam ipsum neque! Dicta, modi expedita mollitia nostrum cum numquam vel error repellat? Similique id eos quod asperiores, dolor accusantium officia reprehenderit saepe culpa veniam error illo voluptatum corporis, molestiae vitae repellat harum blanditiis. Quas culpa hic dolor nam natus veniam?</div>

        </div>

      </div>
    </div>
  )
}

export default ArtInfoModalWindow;