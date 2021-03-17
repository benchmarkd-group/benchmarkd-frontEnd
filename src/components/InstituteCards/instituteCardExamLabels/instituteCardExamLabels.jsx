import React, { Component } from 'react';
import '../instituteCardExamLabels/instituteCardExamLabels.css'

class InstituteCardExamButtons extends Component {

    render(props) {
        return(
            <button className='insti-card-exam-buttons'>{this.props.examName}</button>
        )
    }
}

export default InstituteCardExamButtons;