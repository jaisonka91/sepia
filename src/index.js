import React from 'react';
import ReactDOM from 'react-dom';
import App from './container';
import Routes from './routes';
import store from './redux/store';

ReactDOM.render(
  <App store={store} routes={Routes} />,
  document.getElementById('container')
);
