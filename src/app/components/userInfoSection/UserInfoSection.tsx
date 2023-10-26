import { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import "./UserInfoSection.scss";

interface UserInfoSectionProps {
  onSetModalOpen?(imgSrc?: string): void;
}


const UserInfoSection:FC<UserInfoSectionProps> = ({onSetModalOpen}) => {

  const [rating, setRating] = useState<number>(4.5);
  const [followers, setFollowers] = useState<number>(10345);

  return (
    <div className="user__container">

      <div className="userinfosection">
        <div className="avatar-container">
          <div className="userinfosection__avatar-wrapper">
            {/* <img src="" alt="" className="userinfosection__avatar-img" /> */}
          </div>
          <div className="userinfosection__username">Username</div>

          <div className="rating">
            <FontAwesomeIcon icon={faStar} className="rating__icon"/>
            <span className="rating__value">{rating}</span>
          </div>

          <div className="followers">
            <FontAwesomeIcon icon={faUserGroup} className="followers__icon"/>
            <span className="followers__value">{followers}</span>
          </div>
        </div>
        

        <div className="btns-container">
          <button className="text-btn followers-btn">Подписчики</button>
          <button className="text-btn followering-btn">Подписки</button>
          <button className="text-btn message-btn">Написать пользователю</button>
          <button className="text-btn open-pricelist-btn" onClick={e => onSetModalOpen?.()}>Открыть прайс-лист</button>
        </div>
        
      
      </div>

      <div className="user__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis minima, harum tempore aspernatur quibusdam similique dolore error quam obcaecati, provident beatae. Earum eligendi ex at quae, quo hic doloremque nostrum itaque possimus neque, deserunt eveniet minus nisi sunt nobis eius!</div>

    </div>
    
  )
}

export default UserInfoSection;