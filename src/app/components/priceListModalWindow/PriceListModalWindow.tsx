import {FC} from "react";
import ModalWindow from "../modalWindow/ModalWindow";
import "./PriceListModalWindow.scss";

interface ModalWindowProps {
  onSetModalClose?(): void;
}


const PriceListModalWindow:FC<ArtInfoModalWindowProps> = ({onSetModalClose}) => {

  return (
    <ModalWindow onSetModalClose={onSetModalClose}>
      <div className="price-list__img-wrapper">
        <img className="price-list__img" src="./src/app/resources/images/default_hor.jpg" alt="price-list" />
      </div>
    </ModalWindow>
  )
}

export default PriceListModalWindow;