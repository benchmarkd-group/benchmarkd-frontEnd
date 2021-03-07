import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CMATimg from '../../../src/images/cmat_img.png';
import response from '../../jsons/searchpage.json';
import '../Course_Cards/Cards.css';
import { faHome, faCamera, faAddressCard, faBook, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

class Cards extends Component {

    state = {

    };

    styles = {
        fontSize: 100,
    }
    render() {
        return (
             <Card bg="info" style={{ width: '18vw' }} class='course-card'>

                 <div style={{ height: '10%' }}>
                    <Card.Img variant="top" src={CMATimg} class='course-card-img' />
                 </div>
                    
                    
                    
                    <div class="content">
                        <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faHome} />
                                        </button> 
                        <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faCamera} />
                                        </button> 
                        <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faAddressCard} />
                                        </button> 
                        <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faLocationArrow} />
                                        </button> 
                        <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faBook} />
                                        </button> 
                    </div>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
              
        );
    }
}

export default Cards;