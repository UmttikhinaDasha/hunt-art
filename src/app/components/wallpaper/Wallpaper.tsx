import { FC } from "react";
import "./Wallpaper.scss";

interface WallpaperProps {
  wallpaper?: string;
}

const Wallpaper:FC<WallpaperProps> = ({wallpaper}) => {

  return (
    <div className="wallpaper__wrapper">
      <img className="wallpaper__img" src={wallpaper ? wallpaper : `https://i.pinimg.com/564x/a7/6e/a3/a76ea38cb9e75348fb5569b9eb388310.jpg` }/>
    </div>
  )
}

export default Wallpaper;