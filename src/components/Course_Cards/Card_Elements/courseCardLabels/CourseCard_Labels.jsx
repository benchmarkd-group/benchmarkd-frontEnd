import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCamera, faAddressCard, faBook, faLocationArrow, faBookmark } from "@fortawesome/free-solid-svg-icons";
import Tooltip from '@material-ui/core/Tooltip'
import '../courseCardLabels/courseCardLabelsStyle.css'


class CourseCard_Labels extends Component {

    render(labels) {
        const divStyle = {
            
        }

        return(
            <div className='labels-container'>
                <Tooltip title='Sample tooltip' leaveDelay={400} zoom arrow>
                    <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faHome} />
                    </button> 
                </Tooltip>
            
            
            <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faCamera} />
                </button> 
            <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faAddressCard} />
                </button> 
            <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faLocationArrow} />
                </button> 
            <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faBook} />
                </button> 
            {/* <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faBookmark} />
                </button>  */}
            </div>     
        );
        
    }
}

export default CourseCard_Labels;