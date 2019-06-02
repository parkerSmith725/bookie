import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Router from './router/Router';
import './index.css';

const app = (
  <Router />
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
