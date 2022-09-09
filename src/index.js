import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login/Login';
import GlobalStyle from './globalStyle';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Login />
  </React.StrictMode>
);


