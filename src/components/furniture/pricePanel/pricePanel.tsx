import * as React from 'react';
import './pricePanel.css';

export interface IPricePanelProps {
  price: number;
  addToCard: () => void;
}

export const PricePanel = (props: IPricePanelProps) => {
  return (
    <div className="price-panel">
      <p>{props.price} руб.</p>
      <button onClick={props.addToCard}>Add to cart</button>
    </div>
  );
};
