import { useState} from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { useLoaderData } from "react-router-dom";

import { getUserById }from "../../services/ApiService";

import Header from "../header/Header"
import Wallpaper from "../wallpaper/Wallpaper";
import UserInfoSection from "../userInfoSection/UserInfoSection"
import PriceListModalWindow from "../priceListModalWindow/PriceListModalWindow"
import {Gallery} from "../gallery/Gallery";
import ArtInfoMW from "../artInfoMW/ArtInfoMW";


type User = {
  id: string;
  userName: string;
  followers: number[];
  following: number[];
  rating: number;
  wallpaper: string;
  arts: [{id: number, src: string}]
}

export const UserPage = () => {

  const userData = useLoaderData();

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


  const [priceListModalClose, setPriceListModalClose] = useState<boolean>(true);

  const onSetPriceListModalOpen = () => {
    setPriceListModalClose(false);
  }

  const onSetPriceListModalClose = () => {
    setPriceListModalClose(true);
  }
  //end-modal-block------------------------------------------------------

  return (
    <>
      <Header/>
      <Wallpaper wallpaper={userData?.wallpaper}/>
      <UserInfoSection onSetModalOpen={onSetPriceListModalOpen}/>
      <Gallery onSetModalOpen={onSetModalOpen} images={userData?.arts}/>
      {modalClose ? null : <ArtInfoMW imgSrc={debounceImgSrc} onSetModalClose={onSetModalClose}/>}
      {priceListModalClose ? null : <PriceListModalWindow onSetModalClose={onSetPriceListModalClose}/>}
    </>
  )
}

export function loader({params}) {

  const id = params?.userId;
  console.log(id);
  return getUserById(id);
}