import React from 'react';
import ReactDOM from 'react-dom';
import App from './container';
import Routes from './routes';
import Store from './store/create_store';

ReactDOM.render(
  <App store={Store} routes={Routes}/>,
  document.getElementById('container')
);
