import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Header } from './components/shared/header/header';
import { Footer } from './components/shared/footer/footer';
import { HorizontalMenu } from './components/shared/horizontalMenu/horizontalMenu';
import { VerticalMenu } from './components/shared/verticalMenu/verticalMenu';
import { AppRouter } from './components/router/router';

library.add(fas, far);

function App() {
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
            <AppRouter />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
