import { useState, useMemo} from "react";
import { useDebounce } from "@uidotdev/usehooks";

import SearchComponent from "../searchComponent/SearchComponent";
import InterlocutorsList from "../interlocutorsList/InterlocutorsList";
import Header from "../header/Header";

import "./MessangerPage.scss";
import Chat from "../chat/Chat";

export const MessangerPage = () => {

  //data-block-----------------------------------------------------------
  const tags = ['#uch', '#fantasy', '#modern', '#vampire', '#ciberpunk'];
  //end-data-block-------------------------------------------------------

  //search-block---------------------------------------------------------
  const [searchValue, setSearchValue] = useState<string>('');
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const debounceSearchValue = useDebounce(searchValue, 500);

  const onSetSearchValue = (value: string) => {
    setSearchValue(value);
  }

  const onSetIsPopupOpen = (isOpen: boolean) => {
    setIsPopupOpen(isOpen);
  }

  const foundContent = useMemo(findTag, [debounceSearchValue]);

  function findTag():string[] | string {
    if (searchValue === '') {
      return '';
    } else {
      return tags.filter(tag => tag.indexOf(searchValue) > -1);
    }
  }
  //end-search-block-----------------------------------------------------


  return (
    <>
      <Header/>
      <main  className="messanger">
        <div className="interlocutors-list-block">
          {/* <SearchComponent onSetSearchValue={onSetSearchValue}
                            onSetIsPopupOpen={onSetIsPopupOpen}
                            foundValues={foundContent} 
                            isPopupOpen={isPopupOpen}/> */}

          <InterlocutorsList/>
        </div>
        <div className="chat">
          <Chat/>
        </div>
      </main>
      
    </>
  )
}