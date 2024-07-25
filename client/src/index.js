import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Script from './Script';

ReactDOM.render(
  <BrowserRouter>
    <App/>
    <Script/>
  </BrowserRouter>,
  document.getElementById('root')
);
reportWebVitals();
