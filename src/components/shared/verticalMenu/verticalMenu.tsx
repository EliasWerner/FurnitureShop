import * as React from 'react';
import './verticalMenu.css';
import { Menu } from './menu/menu';
import { Contacts } from './contacts/contacts';
import { CustomersInfo } from './customersInfo/customersInfo';

export const VerticalMenu = () => {
  return (
    <div className="verticalMenu">
      <Menu />
      <Contacts />
      <CustomersInfo />
    </div>
  );
};
