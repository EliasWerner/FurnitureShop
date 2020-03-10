import * as React from 'react';
import './header.css';
import Logo from '../../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import { Search } from './search/search';
import ShoppingCartIconContainer from './shoppingCartIcon/shoppingCartIconContainer';

export const Header = () => {
  return (
    <div className="header">
      <NavLink className="logo" to="/">
        <img src={Logo} alt="Mebel-online" />
      </NavLink>
      <div className="search">
        <Search />
      </div>
      <ShoppingCartIconContainer />
    </div>
  );
};
