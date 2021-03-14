import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CMATimg from '../../../src/images/img.png';
import response from '../../jsons/searchpage.json';
import '../Course_Cards/Cards.css';
import { faHome, faCamera, faAddressCard, faBook, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import CourseCard_Labels from './Card_Elements/courseCardLabels/CourseCard_Labels';
import CourseCard_Ratings from './Card_Elements/courseCardRatings/CourseCard_Ratings';
import CourseCardPrice from './Card_Elements/courseCardPricing/courseCardPricing';
import CourseCardTitle from './Card_Elements/courseCardTitle/courseCardTitle';
import CourseCardDescription from './Card_Elements/courseCardDescription/courseCardDescription';

class Cards extends Component {

    state = {

    };

    styles = {
        fontSize: 100,
    }
    render(props) {
        return (
            // <Card className='course-card'>
            //     <div className='card-image-container'>
            //         <img className='card-image' src={CMATimg}></img>
            //     </div>
            //     <CourseCard_Labels enabled="true"/>
            //     <div className='course-card-labels-container'>
            //     </div>
            //     <div className='card-body'>
            //         <div className='card-title-desc'>
            //             <CourseCardTitle courseName='CMAT 2021 Crash Course' instituteName='T.I.M.E'></CourseCardTitle>
            //             <CourseCardDescription description='Hello there. This is the best course for CAT. We guarantee a 100%ile in the exam. If you dont get a 100%ile with us then something is wrong with you.'></CourseCardDescription>
            //         </div>
            //         <div className='rating-price-container'>
            //             <CourseCard_Ratings className='rating-component' rating='4.3' numberOfRatings='2541'/>
            //             <CourseCardPrice className='price-component' discount='150' price='4500'></CourseCardPrice>
            //         </div>
            //     </div>
            // </Card>
              
            <div className='card'>
                <div className='card-image-container'>
                    <img className='card-image' src={CMATimg}></img>
                </div>
                <CourseCard_Labels className='course-card-labels' enabled="true"/>
                <div className='card-body'>
                    <div className='card-title-desc'>
                        <CourseCardTitle courseName='CMAT 2021 Crash Course' instituteName='T.I.M.E'></CourseCardTitle>
                        <CourseCardDescription styles={{display:'inline-block'}} description='Hello there. This is the best course for CAT. We guarantee a 100%ile in the exam. If you dont get a 100%ile with us then something is wrong with you.'></CourseCardDescription>
                   </div>
                    <div className='rating-price-container'>
                        <CourseCard_Ratings className='rating-component' rating='4.3' numberOfRatings='2541'/>
                        <CourseCardPrice className='price-component' discount='300' price='4500'></CourseCardPrice>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Cards;