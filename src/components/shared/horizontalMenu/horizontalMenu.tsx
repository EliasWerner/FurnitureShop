import * as React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './horizontalMenu.css';

export const HorizontalMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" id="horizontal-menu">
      <Navbar.Brand href="#home">Главная</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" id="horizontal-menu-items">
          <Nav.Link href="#features">Item 1</Nav.Link>
          <Nav.Link href="#pricing">Item 2</Nav.Link>
          <NavDropdown title="Item with subitems" id="horizontal-menu-dropdown">
            <NavDropdown.Item href="#action/3.1">Subitem 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Subitem 2</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Subitem 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated Subitem
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">Item 3</Nav.Link>
          <Nav.Link href="#memes">Item 4</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
