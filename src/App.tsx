import React from 'react';
import './App.css';

function App() {
  const [count, setCount] = React.useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decerement = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decerement}>-</button>
    </div>
  );
}

export default App;
