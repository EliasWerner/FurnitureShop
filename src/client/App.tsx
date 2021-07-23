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
import { configureStore } from './store/store';
import { Provider } from 'react-redux';

library.add(fas, far);

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
