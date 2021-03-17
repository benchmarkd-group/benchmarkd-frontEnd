import React, { Component } from 'react';
import CourseCard_Ratings from '../Course_Cards/Card_Elements/courseCardRatings/CourseCard_Ratings';
import '../InstituteCards/instituteCard.css'
import InstituteCardImage from './instituteCardImage/instituteCardImage';
import InstituteCardTitle from './instituteCardTitle/instituteCardTitle';
import Divider from '@material-ui/core/Divider';
import InstituteCardExamButtons from './instituteCardExamLabels/instituteCardExamLabels';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class InstituteCard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            exams : ['CAT', 'CMAT', 'NABARD', 'XAT', 'NMAT', 'CLAT', 'SNAP', 'ABCD']
        }
    }

    

    render() {
        return(
            <div className='institute_card'>
                <div className='insti-card-img-section'>
                    <div className='insti-card-img-section-bg'></div>
                    <InstituteCardImage className='insti-card-img'></InstituteCardImage>
                </div>
                <div className='insti-card-name-rating-container'>
                    <InstituteCardTitle></InstituteCardTitle>
                    <CourseCard_Ratings rating='4.3' numberOfRatings='25143'></CourseCard_Ratings>
                </div>
                <Divider variant='middle' className='insti-card-divider'></Divider>
                <div className='insti-card-exams-section'>
                    <div className='insti-card-exam-title'>Courses available for:</div>
                    
                        {this.state.exams.length < 5 && 
                            <div className='insti-card-exam-labels-outer-container'>
                                <div>
                                    {this.state.exams.map(exam => (
                                        <InstituteCardExamButtons examName={exam}></InstituteCardExamButtons>
                                    ))}    
                                </div>
                            </div>
                        }
                        {this.state.exams.length >= 5 && this.state.exams.length <8 &&
                            <div className='insti-card-exam-labels-outer-container'>
                                <div>
                                    {this.state.exams.slice(0,4).map(exam => (
                                        <InstituteCardExamButtons examName={exam}></InstituteCardExamButtons>
                                    ))}    
                                </div>
                                <div>
                                    {this.state.exams.slice(4,this.state.exams.length).map(exam => (
                                        <InstituteCardExamButtons examName={exam}></InstituteCardExamButtons>
                                    ))}    
                                </div>
                            </div>
                        }
                        {this.state.exams.length >= 8 &&
                            <div className='insti-card-exam-labels-outer-container'>
                                <div>
                                    {this.state.exams.slice(0,4).map(exam => (
                                        <InstituteCardExamButtons examName={exam}></InstituteCardExamButtons>
                                    ))}    
                                </div>
                                <div>
                                    {this.state.exams.slice(4,7).map(exam => (
                                        <InstituteCardExamButtons examName={exam}></InstituteCardExamButtons>
                                    ))}
                                    <button className='insti-card-exam-buttons add-btn'><FontAwesomeIcon icon={faPlus}/></button>    
                                </div>
                            </div>
                        }
                    
                </div>

            </div>
        )
    }

}

export default InstituteCard;