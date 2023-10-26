
import {FC} from "react";
import ModalWindow from "../modalWindow/ModalWindow";
import ImageSection from "../imageSection/ImageSection";
import CommunicationSection from "../communicationSection/CommunicationSection";
import "./ArtInfoMW.scss";

interface ArtInfoModalWindowProps {
  imgSrc?: string;
  onSetModalClose?(): void;
}

const ArtInfoModalWindow:FC<ArtInfoModalWindowProps> = ({imgSrc, onSetModalClose}) => {

  return (
    <ModalWindow onSetModalClose={onSetModalClose}>
      <div className="modal__grid">
        <ImageSection imgSrc={imgSrc}/>
        <div className="modal__description-section">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, adipisci blanditiis fugit, esse a soluta tempore earum, repellat deserunt ex cupiditate?
        </div>
        <CommunicationSection/>
      </div>
    </ModalWindow>
  )
}

export default ArtInfoModalWindow;