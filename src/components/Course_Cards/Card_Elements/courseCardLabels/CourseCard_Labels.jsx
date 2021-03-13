import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCamera, faAddressCard, faBook, faLocationArrow, faBookmark } from "@fortawesome/free-solid-svg-icons";
import Tooltip from '@material-ui/core/Tooltip'
import '../courseCardLabels/courseCardLabelsStyle.css'
import ReactTooltip from "react-tooltip";

class CourseCard_Labels extends Component {

    render(labels) {
        const divStyle = {
            
        }

        return(
            <div className='labels-container'>
               <div>
                    <button data-tip data-for="registerTip" type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faHome} />
                                        </button> 
                    <ReactTooltip id="registerTip" place="top" effect="solid">
                        Visit
                    </ReactTooltip>
                </div>
                <div>
                    <button data-tip data-for="registerTip" type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faCamera} />
                                        </button> 
                    <ReactTooltip id="registerTip" place="top" effect="solid">
                        Visit
                    </ReactTooltip>
                </div>
                <div>
                    <button data-tip data-for="registerTip" type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faAddressCard}/>
                                        </button> 
                    <ReactTooltip id="registerTip" place="top" effect="solid">
                        Visit
                    </ReactTooltip>
                </div>
                <div>
                    <button data-tip data-for="registerTip" type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faLocationArrow}/>
                                        </button> 
                    <ReactTooltip id="registerTip" place="top" effect="solid">
                        Visit
                    </ReactTooltip>
                </div>
                <div>
                    <button data-tip data-for="addtionalLabels" type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faBook}/>
                                        </button> 
                    <ReactTooltip id="addtionalLabels" place="top" effect="solid">
                        <ul>
                            <li>Label</li>
                            <li>Label</li>
                            <li>Label</li>
                            <li>Label</li>
                            <li>Label</li>
                        </ul>
                    </ReactTooltip>
                </div>
            </div>     
        );
        
    }
}

export default CourseCard_Labels;