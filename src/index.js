import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './components/Course_Cards/Cards';
import Scroll from './components/ScrollComponent/ScrollComponent';
import HorizontalScroll from './components/HorizontalScroll/HorizontalScroll'

ReactDOM.render(
  <HorizontalScroll/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
