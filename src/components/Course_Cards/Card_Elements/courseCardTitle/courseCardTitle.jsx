import React, { Component } from 'react';
import '../courseCardTitle/courseCardTitleStyle.css'


class CourseCard_Pricing extends Component {

    render(props) {

        return (
            <div className='title-container'>
                <h4 className='course-name'>{this.props.coursename}</h4>
                <h7 className="institute-name">T.I.M.E</h7>
            </div>
                       
        );
    }

}

export default CourseCard_Pricing;