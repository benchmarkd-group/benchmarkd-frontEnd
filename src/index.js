import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './components/Course_Cards/Cards';
import Scroll from './components/ScrollComponent/ScrollComponent';
import HorizontalScroll from './components/HorizontalScroll/HorizontalScroll'
import CourseCard_Labels from './components/Course_Cards/Card_Elements/courseCardLabels/CourseCard_Labels';
import CourseCard_Ratings from './components/Course_Cards/Card_Elements/courseCardRatings/CourseCard_Ratings';
import CourseCardPricing from './components/Course_Cards/Card_Elements/courseCardPricing/courseCardPricing';
import CourseCardTitle from './components/Course_Cards/Card_Elements/courseCardTitle/courseCardTitle'
import ScrollComponent from './components/ScrollComponent/ScrollComponent';

ReactDOM.render(

<div>
 
 {/* <HorizontalScroll/>,
 <Card/>, */}
 <HorizontalScroll/>,
 <ScrollComponent/>,
</div>,
 document.getElementById('root')



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
