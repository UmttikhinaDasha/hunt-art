import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import "./CommunicationSection.scss"
import { useState } from 'react';
import CommentsField from "../commentField/CommentsField";

const CommunicationSection = () => {

  const [switcher, setSwitcher] = useState<boolean>(true);

  const onSwitch = () => {
    setSwitcher(switcher => !switcher);
  }


  return (
    <div className="modal__communication-section">
      
      <button className="modal__toggle-comm-block-btn" tabIndex={1} onClick={e => onSwitch()}>{switcher ? "Аукцион" : "Комментарии"}</button>

      {
        switcher ? null :
          <div className="modal__support-block">
            <p><span>sb:</span>30usd <span>mi:</span>5usd <span>ab:</span>100usd</p>
            <button className="modal__support-btn  icon-btn"  tabIndex={1}>
              <FontAwesomeIcon icon={faQuestion} />
            </button>
          </div>
      }

      <CommentsField switcher={switcher}/>

    </div>
  )
}

export default CommunicationSection;