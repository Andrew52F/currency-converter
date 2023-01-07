import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import InitState from './InitState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <InitState />
  // </React.StrictMode>
);
