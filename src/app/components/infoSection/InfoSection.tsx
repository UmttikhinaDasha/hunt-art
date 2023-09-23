import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import "./InfoSection.scss"
import { useState } from 'react';
import CommentsField from "../commentField/CommentsField";

const InfoSection = () => {

  const [switcher, setSwitcher] = useState<boolean>(true);

  const onSwitch = () => {
    setSwitcher(switcher => !switcher);
  }

  return (
    <div className="modal__info">
      <div className="modal__info__user">
        <div className="modal__info__username" tabIndex={1}>Имя_автора</div>
        <button className="modal__info__toggle-comm-block-btn text-btn" tabIndex={1} onClick={e => onSwitch()}>{switcher ? "Аукцион" : "Комментарии"}</button>
      </div>

      <div className={switcher ? "modal__support-block hide" : "modal__support-block"}>
        <p><span>sb:</span> 30usd <span>mi:</span> 5usd <span>ab:</span> 100usd</p>
        <button className="modal__support-btn  text-btn"  tabIndex={1}>
          <FontAwesomeIcon icon={faQuestion} />
        </button>
      </div>

      <CommentsField switcher={switcher}/>
    </div>
  )
}

export default InfoSection;