import {FC, useEffect, useState, useRef} from "react";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import "./Menu.scss";

const Menu = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const burgerRef = useRef(null);

  useEffect(() => {
   return () => clearAllBodyScrollLocks();
  }, []);

  useEffect(() => {
    if (burgerRef) {
      if (isOpen) {
        disableBodyScroll(burgerRef);
      } else {
        enableBodyScroll(burgerRef);
      }
    }
   }, [isOpen]);

  const onToggleMenu = () => {
    setIsOpen(isActive => !isActive);
  }

  const classNameActive = isOpen ?  ' active' : '';

  return (
    <>
      <div className={`header__burger ${classNameActive}`}
           onClick={(e) => onToggleMenu()}
           ref={burgerRef}>
        <span></span>
      </div>
      <nav className={`header__menu ${classNameActive}`}>
        <ul className="header__list">
          <li>
            <a href="#" className="header__link">Профиль</a>
          </li>
          <li>
            <a href="#" className="header__link">Сообщения</a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu;