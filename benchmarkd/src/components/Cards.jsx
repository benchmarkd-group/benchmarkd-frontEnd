import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CMATimg from '../../src/images/cmat_img.png';
import response from '../jsons/searchpage.json';
import '../components/Cards.css';
import { faHome, faCamera, faAddressCard, faBook, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";

class Cards extends Component {

    state = {

    };

    styles = {
        fontSize: 100,
    }
    render() {
        return (<div className="App">
            {/* for (let i = 0; i < response.courses.length; i++) { */}
            <span style={this.state.styles}>
                <p>
                <input type={Text} placeholder={"Enter your search text"}></input>
                <button>search</button>
                </p>
                <p><h3>{response.courses.length} results found</h3></p>
                
                <p>
                    <button> <a style={{ textDecoration: 'none' }}>
                        <div class="container">
                            <div class="card flex-row flex-wrap">
                                <div class="card-header">
                                    <img src={CMATimg} width="200"></img>
                                </div>
                                <div>
                                    <div class="card-title"><h4><a href="">{response.courses[0].course_name}</a></h4></div>{response.courses[0].cost}
                                    <p><a href="https://www.time4education.com/">{response.courses[0].institute_name}</a></p>
                                    <p> {response.courses[0].course_summary}</p>
                                    <div class="ratingCount">{response.courses[0].reviews[0].rating}</div>
                                    <ReactStars class="avgRating"
                                        count={response.courses[0].reviews[0].rating}
                                        size={20}
                                        isHalf={true}
                                        isSelectable={false}
                                        isAggregateRating={true}
                                        color="#FEE12B"
                                        activeColor="#FEE12B"
                                    />
                                      <div class = "noOfReviews">
                                   ( {response.courses[0].reviews.length} )
                                </div>
                                </div>
                              
                                <div class="card-footer w-100 text-muted">
                                    <div class="panel panel-default">

                                        <div class="panel-body">


                                            <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faHome} />
                                            </button> &ensp;
                            <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faCamera} />
                                            </button> &ensp;
                            <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faAddressCard} />
                                            </button> &ensp;
                            <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faLocationArrow} />
                                            </button> &ensp;
                            <button type="button" class="btn btn-primary btn-circle"><FontAwesomeIcon icon={faBook} />
                                            </button> &ensp;


                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </a>
                    </button>
                </p>
               
            </span>
            {/* } */}
        </div>
        );
    }
}

export default Cards;