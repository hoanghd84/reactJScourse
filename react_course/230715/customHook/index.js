import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ExpandCollapse from './components/ExpandCollapse/ExpandCollapse';
import reportWebVitals from './reportWebVitals';
import Calculator from './components/calculator/Calculator';
import Login from './components/Login';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ExpandCollapse /> */}
    <Counter1 />
    <Counter2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
