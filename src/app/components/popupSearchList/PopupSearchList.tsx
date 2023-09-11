import { FC } from "react";
import "./PopupSearchList.scss"

export interface PopupSearchListProps {
  foundValues?: string[] | string;
  isPopupOpen?: boolean;
}

const PopupSearchList: FC<PopupSearchListProps> = (props) => {

  const {foundValues, isPopupOpen} = props;
  
  const renderItems = ()  => {

    if (typeof foundValues === "string") {
      return null;
    } else if (foundValues?.length) {
      return (
          <ul className="found-list">
            {
              foundValues?.map((item, i) => (
                <li key={i} 
                    className="found-list__item"
                    tabIndex={0}
                    onClick={() => console.log('click')}>{item}</li>
              ))
            }
          </ul>
      )
    } else {
      return (
        <div className="not-found-msg">По Вашему запросу ничего не найдено :с</div>
      )
    }
    
  }

  const foundComponents = renderItems();
  const element = isPopupOpen ? foundComponents : null;

  return (
    <div className="popup-sl-wrapper">
      {element}
    </div>
  )
}

export default PopupSearchList;