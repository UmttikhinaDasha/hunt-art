import Menu from "../menu/Menu";
import "./Header.scss"

const Header = () => {

  return (
      <div className="header">
        <div className="header__container">
          <div className="header__body">
            <a href="#" className="header__logo">HuntArt</a>
            <Menu links={['Профиль', 'Сообщения']}/>
          </div>
        </div>        
      </div>
  )
}

export default Header;