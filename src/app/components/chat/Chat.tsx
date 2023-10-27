

import CommunicationSection from "../communicationSection/CommunicationSection";
import CommentsField from "../commentField/CommentsField";
import InterlocutorItem from "../interlocutorItem/InterlocutorItem";
import "./Chat.scss";

const Chat = () => {

  const user = {id: 2, username: "Geto Suguru", avatar: "https://i.pinimg.com/564x/9e/6e/f0/9e6ef0e2b9ffb83c05c2772442235b86.jpg"}

  return (
    <>
      <InterlocutorItem username={user.username} avatar={user.avatar}/>
      <CommentsField switcher={true}/>
    </>
  )
}

export default Chat;