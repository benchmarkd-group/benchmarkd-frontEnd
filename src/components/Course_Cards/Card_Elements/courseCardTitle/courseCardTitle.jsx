import React, { Component } from 'react';
import '../courseCardTitle/courseCardTitleStyle.css'


class CourseCard_Pricing extends Component {

    render(props) {

        return (
            <div className='title-container'>
                <h4 className='course-name'>{this.props.courseName}</h4>
                <h7 className="institute-name">{this.props.instituteName}</h7>
            </div>
                       
        );
    }

}

export default CourseCard_Pricing;