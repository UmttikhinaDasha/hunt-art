import { FC } from "react";
import "./FeedsSwitcher.scss"

interface FeedsSwitcherProps {
  feedsNames?: string[];
}

const FeedsSwitcher:FC<FeedsSwitcherProps> = (props) => {

  const {feedsNames} = props;

  const renderBtns = () => {

    return (
      feedsNames?.map((feedName, i) => {
        
        let classNames = 'swither__feed-btn';

        if (feedName === "новые работы") {
          classNames += ' active';
        }

        return (
          <button key={i} 
                  className={classNames} 
                  name={feedName}
                  onClick={e => console.log(e?.target?.name)}>
            {feedName.toUpperCase()}
          </button>
        )
      })
    )
  }

  return (
    <div className="switcher">
      {renderBtns()}
    </div>
  )
}

export default FeedsSwitcher;