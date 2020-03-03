import * as React from 'react';
import Nav from 'react-bootstrap/Nav';
import './menu.css';

export const Menu = () => {
  return (
    <Nav defaultActiveKey="/home" className="flex-column" id="vertical-menu">
      <Nav.Link>Меню</Nav.Link>
      <Nav.Link href="/home">Товары и услуги</Nav.Link>
      <Nav.Link eventKey="link-1">О нас</Nav.Link>
      <Nav.Link eventKey="link-2">Сертификаты и лицензии</Nav.Link>
      <Nav.Link eventKey="link-2">Отзывы</Nav.Link>
      <Nav.Link eventKey="link-2">Доставка и оплата</Nav.Link>
    </Nav>
  );
};
