import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CMATimg from '../../../src/images/cmat_img.png';
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
    render() {
        return (
             <Card className='course-card'>

                 <div className='card-image-container'>
                    {/* <Card.Img variant="top" src={CMATimg} /> */}
                    <img className='card-image' src={CMATimg}></img>
                 </div>
                 <CourseCard_Labels enabled="true"/>
                 <div className='course-card-labels-container'>
                    
                 </div>
                    
                    
                    <div className='card-body'>
                        <div className='card-title-desc'>
                            <CourseCardTitle></CourseCardTitle>
                            <CourseCardDescription description='Hello there. This is the best course for CAT. We guarantee a 100%ile in the exam. If you dont get a 100%ile with us then something is wrong with you.'></CourseCardDescription>
                        </div>
                        
                        
                        <div className='rating-price-container'>
                            <CourseCard_Ratings className='rating-component' rating='4.3' numberOfRatings='2541'/>
                            <CourseCardPrice className='price-component' discount='150' price='4500'></CourseCardPrice>
                        </div>
                    </div>
                        
                        
                    
                </Card>
              
        );
    }
}

export default Cards;