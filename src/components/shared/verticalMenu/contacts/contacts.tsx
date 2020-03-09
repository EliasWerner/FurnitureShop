import * as React from 'react';
import './contacts.css';

export const Contacts = () => {
  return (
    <div className="contacts">
      <h4>Контакты</h4>
      <div className="item">
        <h6>Компания</h6>
      </div>
      <div className="item">
        <h6>Контактное лицо</h6>
      </div>
      <div className="item">
        <h6>Телефон</h6>
        <div></div>
        <span></span>
      </div>
      <div className="item">
        <h6>Сайт</h6>
        <a href="/"></a>
      </div>
      <div className="item">
        <h6>Email</h6>
        <a href="/"></a>
      </div>
      <div className="item">
        <h6>Адрес</h6>
      </div>
    </div>
  );
};
