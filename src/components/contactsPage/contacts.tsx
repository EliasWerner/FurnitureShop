import * as React from 'react';
import './contacts.css';

export const Contacts = () => {
  return (
    <div className="contact-info">
      <h3>Контактная информация компании Mebel-online</h3>
      <table className="">
        <tbody>
          <tr>
            <td>Название</td>
            <td>Mebel-online</td>
          </tr>
          <tr>
            <td>Контактное лицо</td>
            <td>Дмитрий</td>
          </tr>
          <tr>
            <td>Адрес</td>
            <td>Беларусь, Минский р-н, п. Лесной, д.37</td>
          </tr>
          <tr>
            <td>Телефон</td>
            <td>+375296308753 - A1, Viber</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>
              <a href="mebel-online-minsk@yandex.by">
                mebel-online-minsk@yandex.by
              </a>
            </td>
          </tr>
          <tr>
            <td>Год основания</td>
            <td>2014</td>
          </tr>
          <tr>
            <td>Организационно-правовая форма</td>
            <td>Субъект предпринимательской деятельности</td>
          </tr>
        </tbody>
      </table>
      <div className="contacts-buttons">
        <button>Написать нам</button>
        <button>График работы</button>
      </div>
    </div>
  );
};
