import React, { Component } from 'react';
import Rating from 'react-rating'
import EmptyStar from '../../../../images/empty_rating_star.svg'
import FullStar from '../../../../images/full_rating_star.svg'
import '../courseCardRatings/courseCardRatingsStyle.css'


class CourseCard_Ratings extends Component {

    render(props) {
        return (
            <div className='ratings-container'>
                <div className='ratings-number'>
                    <h7>{this.props.rating}</h7>
                </div>
                <div className='ratings-stars'>
                    <Rating initialRating={this.props.rating} readonly='true'
                    emptySymbol={<img className= 'emptyStar' src={EmptyStar}></img>}
                    fullSymbol={<img className= 'fullStar' src={FullStar}></img>}
                    ></Rating>
                </div>
                <div className='ratings-amount'>
                    <h10>({this.punctuate_numbers(this.props.numberOfRatings)})</h10>
                </div>
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

export default CourseCard_Ratings;