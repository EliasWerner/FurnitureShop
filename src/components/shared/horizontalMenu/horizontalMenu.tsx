import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './horizontalMenu.css';
import { NavLink } from 'react-router-dom';

export const HorizontalMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="horizontal-menu">
      <div>
        <NavLink className="first-hor-menu-item" to="/">
          Главная
        </NavLink>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" id="horizontal-menu-items">
          <div className="hor-menu-item">
            <NavDropdown title="Товары и услуги" id="horizontal-menu-dropdown">
              <div className="hor-menu-subitem">
                <NavLink to="/furniture">Мебель</NavLink>
              </div>
              <div className="hor-menu-subitem">
                <NavLink to="/">2</NavLink>
              </div>
              <div className="hor-menu-subitem">
                <NavLink to="/">3</NavLink>
              </div>
              <div className="hor-menu-subitem">
                <NavLink to="/">4</NavLink>
              </div>
            </NavDropdown>
          </div>
          <div className="hor-menu-item">
            <NavLink to="/about-us">О нас</NavLink>
          </div>
          <div className="hor-menu-item">
            <NavLink to="/contacts">Контакты</NavLink>
          </div>
          <div className="hor-menu-item">
            <NavLink to="/delivery">Доставка и оплата</NavLink>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
