import React, { Component } from 'react';
import '../HorizontalScroll/HorizontalScroll.css';
import response from '../../jsons/searchpage.json';
import CMATimg from '../../../src/images/cmat_img.png';
import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InfiniteCarousel from 'react-leaf-carousel';
import '../Course_Cards/Cards.css';
import { faHome, faCamera, faAddressCard, faBook, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from 'react-bootstrap/Card';


class HorizontalScroll extends Component {
  

  render() {
    let itemList=[];
  
    return (<div>
        <div style={{ height: '10%' }}>
                 </div>
                 {response.institutes.forEach((institute)=>{
      itemList.push( 

  <div id="carouselitem">
    <Card bg="info" style={{ width: '20vw' }} class='course-card'>

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
       <Card.Title>{institute.institute_name}</Card.Title>
       <Card.Text>
       {institute.institute_description}
       </Card.Text>
       
       {/* <Button variant="primary">Go somewhere</Button> */}
   </Card.Body>
</Card>
    </div>
)})}

      <InfiniteCarousel class= 'infinitecarousel'
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
    incrementalSides={true}
  >

  {itemList}

  </InfiniteCarousel>

      </div>
    );
  }
}
export default HorizontalScroll;


