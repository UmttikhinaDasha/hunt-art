import {FC, useEffect, useRef} from "react";
import SearchInput from "../searchInput/SearchInput";
import PopupSearchList from "../popupSearchList/PopupSearchList";

import "./SearchField.scss";

export interface SearchFieldProps {
  onSetSearchValue?(value?: string): void;
  onSetIsPopupOpen?(isOpen?: boolean): void;
  foundValues?: string[] | string;
  isPopupOpen?: boolean;
}

const SearchField:FC<SearchFieldProps> = (props) => {

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
    <>
      <div onPointerDown={e => onChangeFocus(true)}
            ref={searchRef}
            className="search__block">

          <SearchInput  className="search__input" 
                        placeholder="Введите Ваш запрос..." 
                        disabled={false} 
                        onSetSearchValue={onSetSearchValue} 
                        isPopupOpen={isPopupOpen}/>

          <PopupSearchList foundValues={foundValues} 
                           isPopupOpen={isPopupOpen}/>
        </div>
    </>
  )
}

export default SearchField;