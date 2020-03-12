import * as React from 'react';
import './horizontalMenu.css';
import { NavLink } from 'react-router-dom';

export const HorizontalMenu = () => {
  return (
    <div className="horizontal-menu">
      <NavLink to="/">Главная</NavLink>
      <div className="menu-dropdown">
        <NavLink className="menu-dropdown-button" to={'/catalog'}>
          Товары и услуги <span>▼</span>
        </NavLink>
        <div className="menu-dropdown-links">
          <NavLink to="/catalog/mebel-dlya-spalni">Мебель для спальни</NavLink>
          <NavLink to="/catalog/mebel-dlya-gostinoj">
            Мебель для гостиной
          </NavLink>
          <NavLink to="/catalog/detskaya-podrostkovaya-mebel">
            Детская и подростковая мебель
          </NavLink>
          <NavLink to="/catalog/shkafy-vitriny-stellazhi">
            Шкафы, витрины, стеллажи
          </NavLink>
          <NavLink to="/catalog/kuhni">Кухни</NavLink>
          <NavLink to="/catalog/kuhonnye-ugolki-stoly">
            Кухонные уголки, столы, тубуреты и стулья
          </NavLink>
          <NavLink to="/catalog/stoly-pismennyekompyuternye-zhurnalnye">
            Столы письменные, компьютерные, журнальные
          </NavLink>
          <NavLink to="/catalog/komody-tumby">Комоды и тумбы</NavLink>
          <NavLink to="/catalog/myagkaya-mebel">Мягкая мебель</NavLink>
          <NavLink to="/catalog/dop-pozitsii">Доп позиции</NavLink>
        </div>
      </div>
      <NavLink to="/about-us">О нас</NavLink>
      <NavLink to="/contacts">Контакты</NavLink>
      <NavLink to="/delivery">Доставка и оплата</NavLink>
    </div>
  );
};
