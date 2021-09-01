import React from 'react';
import ReactDOM from 'react-dom';
// router
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
