import * as React from 'react';
import './customersInfo.css';

export const CustomersInfo = () => {
  return (
    <div className="customers-info">
      <h4>Информация для покупателей</h4>
      <p>Индивидуальный предприниматель Жерносек Дмитрий Юрьевич</p>

      <p>Беларусь Минская область Лесной п.Лесной д37 Минский р-н , Беларусь</p>

      <p>
        Дата регистрации в Торговом реестре/Реестре бытовых услуг: 27.01.2016
      </p>

      <p>
        Номер в Торговом реестре/Реестре бытовых услуг/Регистре производителей
        товаров: 302851, Республика Беларусь
      </p>

      <p>Регистрационный номер ЕГР: 691775540</p>

      <p>УНП: 691775540</p>

      <p>Регистрационный орган: Минский районный исполнительный комитет</p>

      <p>Дата регистрации компании: 15.10.2014</p>

      <p>
        <a href="https://images.by.prom.st/21228323_21228323.jpg">
          Ссылка на свидетельство/лицензию
        </a>
      </p>

      <div className="work-time">
        <h5>Режим работы</h5>
        <table>
          <tbody>
            <tr>
              <th>День</th>
              <th>Время работы</th>
            </tr>
            <tr>
              <td>Пн-Пт</td>
              <td>09:00 — 20:00</td>
            </tr>
            <tr>
              <td>Сб</td>
              <td>11:00 — 18:00</td>
            </tr>
            <tr>
              <td>Вс</td>
              <td>Выходной</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
