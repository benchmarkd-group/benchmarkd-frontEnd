import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CMATimg from '../../../src/images/img.png';
import '../Course_Cards/Cards.css';
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CourseCard_Labels from './Card_Elements/courseCardLabels/CourseCard_Labels';
import CourseCard_Ratings from './Card_Elements/courseCardRatings/CourseCard_Ratings';
import CourseCardPrice from './Card_Elements/courseCardPricing/courseCardPricing';
import CourseCardTitle from './Card_Elements/courseCardTitle/courseCardTitle';
import CourseCardDescription from './Card_Elements/courseCardDescription/courseCardDescription';

class Cards extends Component {

    constructor() {
        super();
        this.state = {
          isBookmarked: false
        };
      }

    changeBookmarkedStatus(){
        this.setState({isBookmarked: !this.state.isBookmarked})
     }

    styles = {
        fontSize: 100,
    }

    render(props) {
        var bookmarkClass = this.state.isBookmarked ? "bookmark-btn bookmarked-btn" : "bookmark-btn not-bookmarked-btn";

        console.log(this.props.courseInfo.course_name)

        return (
              
            <div className='card'>
                <div className='card-image-container'>
                    <img className='card-image' src={CMATimg}></img>
                </div>
                <button onClick={this.changeBookmarkedStatus.bind(this)} type="button" class={bookmarkClass}><FontAwesomeIcon icon={faBookmark} />
                                        </button> 
                <CourseCard_Labels className='course-card-labels' enabled="true"/>
                <div className='bg'></div>
                <div className='card-body'>
                    <div className='card-title-desc'>
                        <CourseCardTitle courseName={this.props.courseInfo.course_name} courseId={this.props.courseInfo.course_id} instituteName={this.props.courseInfo.institute_name}></CourseCardTitle>
                        <CourseCardDescription courseId={this.props.courseInfo.course_id} description={this.props.courseInfo.course_summary}></CourseCardDescription>
                    </div>
                    <div className='rating-price-container'>
                        <CourseCard_Ratings className='rating-component' rating='4.3' numberOfRatings='2541'/>
                        <CourseCardPrice className='price-component' discount='300' price={this.props.courseInfo.cost}></CourseCardPrice>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;