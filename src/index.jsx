import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/base.module.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// 1. установили react-router-dom
// 2. импорт  React.BrowserRouter или  { BrowserRouter } он следит за адресной строкой, при её изменении будет делать то, что мы скажем
// 3. обернули в него наше приложение
// переходим в App
