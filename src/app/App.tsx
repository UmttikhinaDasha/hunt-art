import { useMemo, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks"
import "./App.scss";
import Header from "./components/header/Header"
import FeedsSwitcher from "./components/feedsSwitcher/FeedsSwitcher";
import SearchComponent from "./components/searchComponent/SearchComponent";
import {Gallery} from "./components/gallery/Gallery";
import ArtInfoModalWindow from "./components/artInfoModalWindow/ArtInfoModalWindow";

function App() {

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


  //modal-block----------------------------------------------------------
  const [modalClose, setModalClose] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>(''); //"./src/app/resources/images/default_hor.jpg"
  const debounceImgSrc = useDebounce(imgSrc, 200);

  const onSetModalOpen = (imgSrc : string) => {
    setImgSrc(imgSrc);
    setModalClose(false);
  }

  const onSetModalClose = () => {
    setModalClose(true);
  }
  //end-modal-block------------------------------------------------------

  return (
    <>
      <div className="tools-wrapper">
        <Header/>
        <SearchComponent onSetSearchValue={onSetSearchValue}
                        onSetIsPopupOpen={onSetIsPopupOpen}
                        foundValues={foundContent} 
                        isPopupOpen={isPopupOpen}/>
        <FeedsSwitcher feedsNames={["новые работы", "популярное", "подписки"]}/>
      </div>
      
      <Gallery onSetModalOpen={onSetModalOpen}/>
      {modalClose ? null : <ArtInfoModalWindow imgSrc={debounceImgSrc} onSetModalClose={onSetModalClose}/>}
    </>
  )
}

export default App;
