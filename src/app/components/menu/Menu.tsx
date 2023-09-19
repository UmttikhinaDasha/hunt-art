import {FC, useEffect, useState, useRef} from "react";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import "./Menu.scss";

interface MenuProps {
  links?: string[];
}

const Menu:FC<MenuProps> = (props) => {

  const {links} = props;

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

  const renderList = () => {
    if (links?.length && links?.length > 0) {
      return (
        links?.map((link, i) => (
          <li key={i}>
              <a href="#" className="header__link" tabIndex={0}>{link}</a>
          </li>
        ))
      )
    } else {
      return (
        <div>Что-то пошло не так :c</div>
      )
    }
  }

  return (
    <>
      <div className={`header__burger ${classNameActive}`}
           onClick={(e) => onToggleMenu()}
           ref={burgerRef}>
        <span></span>
      </div>
      <nav className={`header__menu ${classNameActive}`}>
        <ul className="header__list">
          {renderList()}
        </ul>
      </nav>
    </>
  )
}

export default Menu;