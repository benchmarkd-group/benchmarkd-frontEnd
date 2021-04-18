import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CMATimg from '../../../images/img.png';
import '../../Course_Cards/Cards.css';
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CourseCard_Labels from '../../../../src/components/Course_Cards/Card_Elements/courseCardLabels/CourseCard_Labels';
import CourseCard_Ratings from '../../Course_Cards/Card_Elements/courseCardRatings/CourseCard_Ratings';
import CourseCardPrice from '../../Course_Cards/Card_Elements/courseCardPricing/courseCardPricing';
import CourseCardTitle from '../../Course_Cards/Card_Elements/courseCardTitle/courseCardTitle';
import CourseCardDescription from '../../Course_Cards/Card_Elements/courseCardDescription/courseCardDescription';
import courseDetailsObject from "../../../jsons/coursedetails.json";
import '../../../components/CourseDetailsDisplayComponent/CourseDetailsDisplayCard/CourseDetailsDisplayCard.css';
import { faAddressCard} from "@fortawesome/free-solid-svg-icons";
import pricetag from '../../../images/price.svg'
import coursedetailsinfor from '../../../jsons/coursedetails.json'
class Cards extends Component {

    constructor() {
        super();
        this.state = {
            applyOpacity: '50%'
         };
 
      }

    styles = {
        fontSize: 100,
    }

    
  componentDidMount = () => {
    if(coursedetailsinfor.carddetails[0].Onlinelectures == "true")
    {
        this.setState({ applyOpacity: '100%'})  
    }
    else
    if(coursedetailsinfor.carddetails[0].Onlinelectures == "false")
    {
        this.setState({ applyOpacity: '50%'})  
    }
}


    render(props) {

        return (
              
            <div className='card'>
                <div className='card-image-container'>
                    <img className='card-image' src={CMATimg}></img>
                    
                </div>
                
                <div className='bg'></div>
                
                <ul className='card-body'>
                <img className='pricetag' src={pricetag}></img>
                    <div className="div1">
                    <li className = "btn-div">
                    <button type="button" class="btn btn-left btn-primary btn-circle" style={{opacity: this.state.applyOpacity}}><FontAwesomeIcon icon={faAddressCard}/>
                                        </button>  <text className="textbox">Lectures</text></li>
                                        <li className = "btn-div">
                <button type="button" class="btn btn-left btn-primary btn-circle"><FontAwesomeIcon icon={faAddressCard}/>
                                        </button><text className="textbox">Resources</text> </li>
                                        </div>
                                        <div className="div1">
                                        <li className = "btn-div">
                <button type="button" class="btn btn-left btn-primary btn-circle"><FontAwesomeIcon icon={faAddressCard}/>
                                        </button> <text className="textbox">Mock Tests</text></li>
                                        <li className = "btn-div">
                <button type="button" class="btn btn-left btn-primary btn-circle"><FontAwesomeIcon icon={faAddressCard}/>
                                        </button> <text className="textbox">Lectures</text></li>  
                                        </div>
                                        <div className="div1">
                                        <li className = "btn-div">
                <button type="button" class="btn btn-left btn-primary btn-circle"><FontAwesomeIcon icon={faAddressCard}/>
                                        </button> <text className="textbox">Mentoring</text></li>
                                        <li className = "btn-div">
                <button type="button" class="btn btn-left btn-primary btn-circle"><FontAwesomeIcon icon={faAddressCard}/>
                                        </button> <text className="textbox">Lectures</text></li>
                                        </div>
                                        <div className="div1  disabled-button">
                                        <li className = "btn-div">
                <button type="button" class="btn btn-left btn-primary btn-circle"><FontAwesomeIcon icon={faAddressCard}/>
                                        </button> <text className="textbox">Lectures</text></li>  
                                        </div>                                                                                                                  
                </ul>
            </div>
        );
    }
}

export default Cards;