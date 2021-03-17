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
import CardInfo from '../Course_Cards/Cards'
import InstituteCard from '../InstituteCards/instituteCard';

class HorizontalScroll extends Component {
  

  render() {
    let itemList=[];
  
    return (<div>
        <div style={{ height: '10%' }}>
                 </div>
                 {response.institutes.forEach((institute)=>{
      itemList.push( 
       
<InstituteCard></InstituteCard>
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


