import React, { Component } from 'react';
import '../courseCardTitle/courseCardTitleStyle.css'


class CourseCardTitle extends Component {

    render(props) {

        return (
            <div className='title-container'>
                <div className='course-name-container'>
                    <h4 className='course-name'>{this.props.courseName}</h4>
                </div>
                
                <h1 className="institute-name">{this.props.instituteName}</h1>
            </div>
                       
        );
    }

}

export default CourseCardTitle;