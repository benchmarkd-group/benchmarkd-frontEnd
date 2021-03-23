import React, { Component } from 'react';
import '../courseCardTitle/courseCardTitleStyle.css'


class CourseCardTitle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courseName: this.props.courseName,
            courseId: this.props.courseId,
            elementId: 'courseName'+this.props.courseId
        };
    }

    componentDidMount() {
        if(document.getElementById(this.state.elementId).offsetWidth<document.getElementById(this.state.elementId).scrollWidth)
            document.getElementById(this.state.elementId).className = 'course-name-overflow'
    }

    render() {

        return (
            <div className='title-container'>
                <div className='course-name-container'>
                    <h4 id={this.state.elementId} className='course-name'>{this.state.courseName}</h4>
                </div>
                
                <h1 className="institute-name">{this.props.instituteName}</h1>
            </div>   
        );
    }

}

export default CourseCardTitle;