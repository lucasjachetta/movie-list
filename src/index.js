import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './globalStyle';
import { Routes } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes/>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);


