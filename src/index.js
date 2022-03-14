import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CapeState from './context/cape/CapeState';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <CapeState>
      <App />
    </CapeState>
  </React.StrictMode>,
  document.getElementById('root')
);