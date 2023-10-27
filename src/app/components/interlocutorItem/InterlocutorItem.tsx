import { FC } from "react";

import Avatar from "../avatar/Avatar";
import "./InterlocutorItem.scss";

interface InterlocutorItemProps {
  username: string;
  avatar: string;
}

const InterlocutorItem:FC<InterlocutorItemProps> = ({username, avatar}) => {

  return (
    <div className="interlocutor__item">
      <Avatar img={avatar}/>
      <a className="interlocutor__username" href="#">{username}</a>
    </div>
  )
}

export default InterlocutorItem;