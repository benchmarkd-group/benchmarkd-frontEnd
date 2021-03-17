import React, { Component } from 'react';
import '../instituteCardImage/instituteCardImage.css'
import Image from 'react-bootstrap/Image'
import CATImg from '../../../images/img.png'

class InstituteCardImage extends Component {

    render() {
        return(
            <Image src={CATImg} roundedCircle className='institute-card-img'></Image>
        )
    }

}

export default InstituteCardImage;