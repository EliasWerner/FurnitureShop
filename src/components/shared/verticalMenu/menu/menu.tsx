import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import './menu.css';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column" id="vertical-menu">
      <NavLink to="/">Меню</NavLink>
      <NavLink to="/">Товары и услуги</NavLink>
      <NavLink to="/about-us">О нас</NavLink>
      <NavLink to="/">Сертификаты и лицензии</NavLink>
      <NavLink to="/feedbacks">Отзывы</NavLink>
      <NavLink to="/delivery">Доставка и оплата</NavLink>
    </Nav>
  );
};
