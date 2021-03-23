import React, { Component } from 'react';
import '../courseCardDescription/courseCardDescriptionStyle.css'
import ReactTooltip from 'react-tooltip'

class CourseCardDescription extends Component {

    constructor(props) {
      super(props);
      this.state = {
        descText: this.props.description,
        courseId: this.props.courseId,
        elementId: "descText"+this.props.courseId,
        overflowFlag: false
      }
    }

    componentDidMount() {
        if(document.getElementById(this.state.elementId).offsetHeight<document.getElementById(this.state.elementId).scrollHeight){
          document.getElementById(this.state.elementId).className = "course-desc-text-overflow";
          this.setState({overflowFlag: true});
        }
    }

    

    render() {
        let viewMore;
        let fullText;
        if(this.state.overflowFlag==true){
          viewMore=<a data-tip data-for="viewMore" className='view-more-link'>View More</a>
          fullText=<ReactTooltip id="viewMore" className='view-more-tooltip' place="top" effect="solid">
          {this.state.descText}
      </ReactTooltip>
        }

        return(
              <div className='desc-container'>
                <p id={this.state.elementId} className='course-desc-text'>{this.state.descText}</p>
                {viewMore}
                {fullText}
              </div>
        );
        
    }
}

export default CourseCardDescription;