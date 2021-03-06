import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

const component = (
  <Router>
    <App />
  </Router>
);

Loadable.preloadReady().then(() => {
  ReactDOM.hydrate(component, document.getElementById('root'));
});
