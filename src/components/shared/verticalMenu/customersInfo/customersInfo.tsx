import * as React from 'react';
import './customersInfo.css';

export const CustomersInfo = () => {
  return (
    <div className="customers-info">
      <h4>Информация для покупателей</h4>

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
