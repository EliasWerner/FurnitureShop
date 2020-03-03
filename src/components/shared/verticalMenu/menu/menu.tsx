import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import './menu.css';

export const Menu = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column" id="vertical-menu">
      <Nav.Link href="/">Меню</Nav.Link>
      <Nav.Link href="/">Товары и услуги</Nav.Link>
      <Nav.Link href="/about-us">О нас</Nav.Link>
      <Nav.Link href="/">Сертификаты и лицензии</Nav.Link>
      <Nav.Link href="/feedbacks">Отзывы</Nav.Link>
      <Nav.Link href="/delivery">Доставка и оплата</Nav.Link>
    </Nav>
  );
};
