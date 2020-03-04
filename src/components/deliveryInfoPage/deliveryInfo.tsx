import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './deliveryInfo.css';

export const DeliveryInfo = () => {
  return (
    <div className="delivery-info">
      <h3>Условия доставки и оплаты</h3>
      <div className="delivery-info-item">
        <h5>
          <FontAwesomeIcon icon={['fas', 'truck']} />
          <span>Способы доставки</span>
        </h5>
        <ul>
          <li>Платно по Минску до подъезда - 7 руб</li>
          <li>Самовывоз</li>
          <li>Платно по РБ исходя из веса и объема товара</li>
        </ul>
      </div>
      <div className="delivery-info-item">
        <h5>
          <FontAwesomeIcon icon={['fas', 'credit-card']} />
          <span>Способы оплаты</span>
        </h5>
        <ul>
          <li>Наличными</li>
          <li>Наложенный платеж</li>
        </ul>
      </div>
      <div className="delivery-info-item">
        <h5>
          <FontAwesomeIcon icon={['fas', 'certificate']} />
          <span>Гарантия</span>
        </h5>
        <ul>
          <li>Гарантия 12 месяцев</li>
        </ul>
      </div>
      <div className="delivery-info-item">
        <h5>
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
          <span>Регионы доставки</span>
        </h5>
        <ul>
          <li>Беларусь, все регионы</li>
        </ul>
      </div>
    </div>
  );
};
