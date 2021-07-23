import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadableReady } from '@loadable/component';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

const component = (
  <Router>
    <App />
  </Router>
);

loadableReady(() => {
  ReactDOM.hydrate(component, document.getElementById('root'));
});
