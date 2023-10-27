
import InterlocutorItem from "../interlocutorItem/InterlocutorItem";
import "./InterlocutorLists.scss";


const InterlocutorsList = () => {
  const interlocutors = [{id: 0, username: "Gojo Satoru", avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoZQBfD_3lhmfbNG7RKfmPKry5ZGZxaJoQ2ukUD9PHkkvA9W1I_aVYq3qEmsSzwajSiVQ&usqp=CAU"},
  {id: 1, username: "Ieri Shoko", avatar: "https://i.pinimg.com/564x/77/ef/fa/77effa9b1af4918ab607ca40cf9f6860.jpg"},
  {id: 2, username: "Geto Suguru", avatar: "https://i.pinimg.com/564x/9e/6e/f0/9e6ef0e2b9ffb83c05c2772442235b86.jpg"},
  {id: 3, username: "Fushiguro Toji", avatar: "https://i.pinimg.com/564x/b6/9c/1e/b69c1ee18c2ac5346fb23557e1afc8b6.jpg"},];

  const renderItems = () => {
    return interlocutors.map(user => (
      <li key={user.id} className="interlocutor">
        <InterlocutorItem username={user.username} avatar={user.avatar}/>
      </li>
    ))
  } 

  return (
    <ul className="interlocutorsList">
      {renderItems()}
    </ul>
  )
}

export default InterlocutorsList;