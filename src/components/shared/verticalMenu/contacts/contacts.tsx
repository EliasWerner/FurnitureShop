import * as React from 'react';
import './contacts.css';

export const Contacts = () => {
  return (
    <div className="contacts">
      <h4>Контакты</h4>
      <div className="item">
        <h6>Компания</h6>Mebel-online
      </div>
      <div className="item">
        <h6>Контактное лицо</h6>Дмитрий
      </div>
      <div className="item">
        <h6>Телефон</h6>
        <div>+3754444444</div>
        <span>A1, Viber</span>
      </div>
      <div className="item">
        <h6>Сайт</h6>
        <a href="mebel-online.by">mebel-online.by</a>
      </div>
      <div className="item">
        <h6>Email</h6>
        <a href="mebel-online-minsk@yandex.by">mebel-online-minsk@yandex.by</a>
      </div>
      <div className="item">
        <h6>Адрес</h6>
        Беларусь, Минский район, п.Лесной, д.37
      </div>
    </div>
  );
};
