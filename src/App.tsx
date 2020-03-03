import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Header } from './components/shared/header/header';
import { Footer } from './components/shared/footer/footer';
import { HorizontalMenu } from './components/shared/horizontalMenu/horizontalMenu';
import { VerticalMenu } from './components/shared/verticalMenu/verticalMenu';
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
      <Header />
      <div className="content">
        <HorizontalMenu />
        <div className="row">
          <div className="column">
            <VerticalMenu />
          </div>
          <div className="column">
            <p>{count}</p>
            <Button variant="success" onClick={increment}>
              +
            </Button>
            <Button variant="success" onClick={decerement}>
              -
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
