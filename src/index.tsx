import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';

import { ApplicationProvider } from './hooks/application';

import './styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ApplicationProvider>
      <Router>
        <App />
      </Router>
    </ApplicationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);