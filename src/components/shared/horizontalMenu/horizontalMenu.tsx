import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './horizontalMenu.css';
import { NavLink } from 'react-router-dom';

export const HorizontalMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="horizontal-menu">
      <NavLink to="/">Главная</NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" id="horizontal-menu-items">
          <NavDropdown title="Товары и услуги" id="horizontal-menu-dropdown">
            <NavLink to="/">1</NavLink>
            <NavLink to="/">2</NavLink>
            <NavLink to="/">3</NavLink>
            <NavDropdown.Divider />
            <NavLink to="/">4</NavLink>
          </NavDropdown>
          <NavLink to="/about-us">О нас</NavLink>
          <NavLink to="/contacts">Контакты</NavLink>
          <NavLink to="/delivery">Доставка и оплата</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
