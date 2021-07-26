import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Theme } from './components/context';

const userLogin = { login: "vomidoo", password: "1q2w3e" };
localStorage.setItem("userLogin", JSON.stringify(userLogin));

ReactDOM.render(
  <Theme>
    <App />
  </Theme>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
