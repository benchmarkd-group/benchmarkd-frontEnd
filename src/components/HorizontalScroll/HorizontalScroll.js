import React, { Component } from 'react';
import '../HorizontalScroll/HorizontalScroll.css';
import response from '../../jsons/searchpage.json';
import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import InfiniteCarousel from 'react-leaf-carousel';
import '../Course_Cards/Cards.css';
import InstituteCard from '../InstituteCards/instituteCard';

class HorizontalScroll extends Component {
  

  render() {
    let itemList=[];
  
    return (<div >
        {/* <div style={{ height: '10%' }}>
                 </div> */}
                 {response.institutes.forEach((institute)=>{
      itemList.push( 
 <div className='ml-5'>      
<InstituteCard></InstituteCard>
</div>
 )})}

      <InfiniteCarousel class= 'infinitecarousel'
    breakpoints={[
      {
        breakpoint: 815,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          showSides: false,
          sideSize:0
        },
      },
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          showSides: true,
          sidesOpacity:0.5,
          sideSize:0.4
        },
      },
      {
        breakpoint: 590,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          showSides: false,
          sideSize: 0,
          dots: false
        },
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          showSides: true,
          sidesOpacity:0.5
        },
      }
    ]}
    dots={true}
    sidesOpacity={0.5}
    slidesToScroll={2}
    slidesToShow={3}
    showSides= {false}
    // scrollOnDevice={true}
    sideSize={0.4}
    incrementalSides={false}
  >

  {itemList}

  </InfiniteCarousel>

      </div>
    );
  }
}
export default HorizontalScroll;


