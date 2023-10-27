import { useState, useMemo} from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useLoaderData } from "react-router-dom";

import { getArts } from "../../services/ApiService";

import Header from "../header/Header"
import FeedsSwitcher from "../feedsSwitcher/FeedsSwitcher";
import SearchComponent from "../searchComponent/SearchComponent";
import {Gallery} from "../gallery/Gallery";
import ArtInfoMW from "../artInfoMW/ArtInfoMW";

export const MainPage = () => {

  const imagesData = useLoaderData();
  console.log(imagesData)

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
  const [modalClose, setModalClose] = useState<boolean>(true);
  const [imgSrc, setImgSrc] = useState<string>("./src/app/resources/images/default_hor.jpg"); //"./src/app/resources/images/default_hor.jpg"
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
      <Gallery onSetModalOpen={onSetModalOpen} clazzName={"onMainPage"} images={imagesData}/>
      {modalClose ? null : <ArtInfoMW imgSrc={debounceImgSrc} onSetModalClose={onSetModalClose}/>}
    </>
  )
}

export function loader() {
  return getArts();
}