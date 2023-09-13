import {FC, useEffect, useRef} from "react";
import SearchInput from "../searchInput/SearchInput";
import PopupSearchList from "../popupSearchList/PopupSearchList";
import Menu from "../menu/Menu";
import "./Header.scss"

export interface HeaderProps {
  onSetSearchValue?(value?: string): void;
  onSetIsPopupOpen?(isOpen?: boolean): void;
  foundValues?: string[] | string;
  isPopupOpen?: boolean;
}

const Header:FC<HeaderProps> = (props) => {

  const {onSetSearchValue, onSetIsPopupOpen, foundValues, isPopupOpen} = props;

  const searchRef = useRef(null);

  const onChangeFocus = (value: boolean) => {
    onSetIsPopupOpen?.(value);
  }

  useEffect(() => {
    
      const onClick = (e : MouseEvent) => {
        if (searchRef && searchRef?.current) {
          if (!searchRef?.current?.contains(e.target)) {
            onChangeFocus(false);
         }
        }
      }
      document.addEventListener('click', onClick);
      return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div className="wrapper">
      <div className="search">
        <div className="search__container">
          <div onPointerDown={e => onChangeFocus(true)}
              ref={searchRef}
              className="search__block">

            <SearchInput className="search__input" 
                        placeholder="Введите Ваш запрос..." 
                        disabled={false} 
                        onSetSearchValue={onSetSearchValue} 
                        isPopupOpen={isPopupOpen}/>

            <PopupSearchList foundValues={foundValues} 
                            isPopupOpen={isPopupOpen}/>
          </div>
          <button className="filter-btn"></button>
        </div>
      </div>
      <div className="header">
        <div className="header__container">
          <div className="header__body">
            <a href="#" className="header__logo">HuntArt</a>
            <Menu/>
          </div>
        </div>        
      </div>
    </div>
    
  )
}

export default Header;