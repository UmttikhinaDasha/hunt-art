import {FC, useEffect, useRef} from "react";
import SearchInput from "../searchInput/SearchInput";
import PopupSearchList from "../popupSearchList/PopupSearchList";

export interface HeaderProps {
  onSetSearchValue?(value?: string): void;
  onSetIsPopupOpen?(isOpen?: boolean): void;
  foundValues?: string[] | string;
  isPopupOpen?: boolean;
}

const Header:FC<HeaderProps> = (props) => {

  const {onSetSearchValue, onSetIsPopupOpen, foundValues, isPopupOpen} = props;

  const searchEl = useRef(null);

  const onChangeFocus = (value: boolean) => {
    onSetIsPopupOpen?.(value);
  }

  useEffect(() => {
    
      const onClick = (e : MouseEvent) => {
        if (searchEl && searchEl?.current) {
          if (!searchEl?.current?.contains(e.target)) {
            onChangeFocus(false);
         }
        }
      }
      document.addEventListener('click', onClick);
      return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <div onPointerDown={e => onChangeFocus(true)}
         ref={searchEl}>

      <SearchInput className="search-input" 
                   placeholder="Введите Ваш запрос..." 
                   disabled={false} 
                   onSetSearchValue={onSetSearchValue} 
                   isPopupOpen={isPopupOpen}/>

      <PopupSearchList foundValues={foundValues} 
                       isPopupOpen={isPopupOpen}/>
    </div>
  )
}

export default Header;