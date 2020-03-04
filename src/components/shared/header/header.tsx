import * as React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';
import { Search } from './search/search';

export const Header = () => {
  return (
    <div className="header">
      <NavLink className="logo" to="/">
        <img src={Logo} alt="Mebel-online" />
      </NavLink>
      <div className="search">
        <Search />
      </div>
      <div className="shopping-card">
        <FontAwesomeIcon icon={['fas', 'shopping-cart']} />
        <span>Корзина</span>
      </div>
    </div>
  );
};
