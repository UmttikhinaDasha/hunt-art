import { FC } from "react";
import "./CommentsField.scss";

interface CommentsFieldProps {
  switcher?: boolean;
}

const CommentsField:FC<CommentsFieldProps> = (props) => {

  const {switcher} = props;

  const renderComments = () => {

    const comments = [{id:0, username: 'default-name', userPageLink: '#', commContent: "Comment's content"},
                      {id:1, username: 'default-name', userPageLink: '#', commContent: "Какой-то там комментарий очень интересный превысокомногорассмотрительствующий просто невероятный"},
                      {id:2, username: 'Имя_пользователя', userPageLink: '#', commContent: "Какой-то там комментарий очень интересный просто невероятный"},
                      {id:3, username: 'default-name', userPageLink: '#', commContent: "Еще коммент"},
                      {id:4, username: 'default-name', userPageLink: '#', commContent: "Какой-то там комментарий"},
                      {id:5, username: 'default-name', userPageLink: '#', commContent: "Еще коммент"},
                      {id:6, username: 'Имя_пользователя', userPageLink: '#', commContent: "Твой длинный длинный длинный длинный комментарий"},
                      {id:7, username: 'default-name', userPageLink: '#', commContent: "Еще коммент"},
                      {id:8, username: 'default-name', userPageLink: '#', commContent: "И еще комментарий кто-то настрочил"},];

  const yoursUsername = 'Имя_пользователя';

    return (
      <ul className="modal__comments-list">
        {
          comments.map((comment) => {
            let classNames = "modal__comment";
            if (comment.username === yoursUsername) {
              classNames += " modal__comment--yours"
            }
            return (
              <li className={classNames} key={comment.id}>
                <a className="modal__comm-author" href={comment.userPageLink}>{comment.username}</a>
                <p className="modal__comm-content">{comment.commContent}</p>
              </li>
            )
          })
        }
      </ul>
    )
  }

  const renderBids = () => {
    const bids = [{id:0, username: 'default-name', userPageLink: '#', bidValue: 30, currency: "usd"},
                  {id:1, username: 'default-name', userPageLink: '#', bidValue: 35, currency: "usd"},
                  {id:2, username: 'Имя_пользователя', userPageLink: '#', bidValue: 40, currency: "usd"},
                  {id:3, username: 'default-name', userPageLink: '#', bidValue: 45, currency: "usd"},
                  {id:4, username: 'default-name', userPageLink: '#', bidValue: 50, currency: "usd"},
                  {id:5, username: 'default-name', userPageLink: '#', bidValue: 55, currency: "usd"},
                  {id:6, username: 'Имя_пользователя', userPageLink: '#', bidValue: 60, currency: "usd"},
                  {id:7, username: 'default-name', userPageLink: '#', bidValue: 80, currency: "usd"},
                  {id:8, username: 'default-name', userPageLink: '#', bidValue: 100, currency: "usd"},];

    const yoursUsername = 'Имя_пользователя';

    return (
      <ul className="modal__comments-list">
        {
          bids.map(bid => {
            let classNames = "modal__comment";
            if (bid.username === yoursUsername) {
              classNames += " modal__comment--yours"
            }
            return (
              <li className={classNames} key={bid.id}>
                Пользователь <a className="modal__comm-author" href={bid.userPageLink}>{bid.username}</a> ставит {bid.bidValue}{bid.currency}!
              </li>
            )
          })
        }
      </ul>
    )

  }

  return (
    <div className={switcher ? "modal__comm-block" : "modal__comm-block auction"}>

      <div className="modal__input-block">
        <input type="text" className="modal__input" placeholder="Введите комментарий..." tabIndex={1}/>
        <div className={switcher ? "hide" : ''}>
          <button className="text-btn modal__start-bid-btn"  tabIndex={1}>sb</button>
          <button className="text-btn modal__min-incr-btn"  tabIndex={1}>mi</button>
          <button className="text-btn modal__auto-buy-btn"  tabIndex={1}>ab</button>
        </div>
        
      </div>
      
      {switcher ? renderComments() : renderBids()}
      
    </div>
  )
}

export default CommentsField;