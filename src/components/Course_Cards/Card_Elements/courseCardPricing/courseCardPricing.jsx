import React, { Component } from 'react';
import '../courseCardPricing/courseCardPricingStyle.css'


class CourseCard_Pricing extends Component {

    render(props) {

        return (
            <div className='pricing-container'>
                <h7 className={this.props.discount=='0' ? 'discount-disabled': 'discount-enabled'}>&#x20B9;{this.punctuate_numbers(parseInt(this.props.price)-parseInt(this.props.discount))}</h7>
                <h7 className={this.props.discount=='0' ? 'normal-price': 'discounted-price'}>&#x20B9;{this.props.price}</h7>
            </div>
                       
        );
    }

    punctuate_numbers(num)
    {
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

}

export default CourseCard_Pricing;