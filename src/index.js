import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './components/Course_Cards/Cards';
import Scroll from './components/ScrollComponent/ScrollComponent';
<<<<<<< HEAD
import HorizontalScroll from './components/HorizontalScroll/HorizontalScroll'

ReactDOM.render(
  <HorizontalScroll/>,
=======
import CourseCard_Labels from './components/Course_Cards/Card_Elements/courseCardLabels/CourseCard_Labels';
import CourseCard_Ratings from './components/Course_Cards/Card_Elements/courseCardRatings/CourseCard_Ratings';
import CourseCardPricing from './components/Course_Cards/Card_Elements/courseCardPricing/courseCardPricing';
import CourseCardTitle from './components/Course_Cards/Card_Elements/courseCardTitle/courseCardTitle'

ReactDOM.render(
  <Card/>,
>>>>>>> a2544e24bc5d7640addd29a393c22ff18a470b2c
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
