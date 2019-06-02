import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const app = (
  <Router />
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
