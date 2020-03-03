import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './horizontalMenu.css';

export const HorizontalMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="horizontal-menu">
      <Navbar.Brand href="/">Главная</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" id="horizontal-menu-items">
          <NavDropdown title="Товары и услуги" id="horizontal-menu-dropdown">
            <NavDropdown.Item href="/">1</NavDropdown.Item>
            <NavDropdown.Item href="/">2</NavDropdown.Item>
            <NavDropdown.Item href="/">3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">4</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/about-us">О нас</Nav.Link>
          <Nav.Link href="/contacts">Контакты</Nav.Link>
          <Nav.Link href="/delivery">Доставка и оплата</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
