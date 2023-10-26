import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./ModalWindow.scss";

interface ModalWindowProps {
  onSetModalClose?(): void;
}


const ModalWindow:FC<ModalWindowProps> = (props) => {

  const {onSetModalClose} = props;

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
    <div className="modal" onClick={e => onClickingOut(e)}>
      <div className="modal__dialog">
        <FontAwesomeIcon icon={faXmark} className="modal__close" tabIndex={-1} onClick={e => onClickExit(e)} onKeyDown={e => closeModalOnKeyDown(e)}/>
        <div className="modal__content">

          {props.children}

        </div>
      </div>
    </div>
  )
}

export default ModalWindow;