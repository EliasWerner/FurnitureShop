import * as React from 'react';
import './search.css';

export const Search = () => {
  return (
    <div className="search-form">
      <input type="text" placeholder="Поиск по каталогу товаров..."></input>
      <button className="search-button">Поиск</button>
    </div>
  );
};
