import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import './menu.css';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column" id="vertical-menu">
      <div className="vert-menu-item">
        <NavLink to="/">Меню</NavLink>
      </div>
      {/*<div className="vert-menu-item">
        <NavLink to="/">Товары и услуги</NavLink>
      </div>*/}
      <div className="vert-menu-item">
        <NavLink to="/about-us">О нас</NavLink>
      </div>
      {/*<div className="vert-menu-item">
        <NavLink to="/">Сертификаты и лицензии</NavLink>
      </div>*/}
      <div className="vert-menu-item">
        <NavLink to="/feedbacks">Отзывы</NavLink>
      </div>
      <div className="vert-menu-item">
        <NavLink to="/delivery">Доставка и оплата</NavLink>
      </div>
    </Nav>
  );
};
