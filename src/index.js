import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './components/App';

// const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
