import React, { Component } from 'react';
import '../courseCardDescription/courseCardDescriptionStyle.css'


class CourseCardDescription extends Component {

    render(props) {

        return(
              <div>
                <p className='course-desc-text'>{this.props.description}</p>
              </div>
        );
        
    }
}

export default CourseCardDescription;