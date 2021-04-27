import React, { Component } from 'react';
import Rating from 'react-rating'
import EmptyStar from '../../../../images/empty_rating_star.svg'
import FullStar from '../../../../images/full_rating_star.svg'
import RatingsFilterStyles from './ratingsFilter.module.css'


class RatingsFilter extends Component {

    constructor(){
        super()
        this.state={
            appliedRating:'',
            appliedRatingIndicator: [0,0,0,0]
        }
        this.applyRating = this.applyRating.bind(this)
    }

    applyRating(rating) {
        var array = [0,0,0,0]
        array[rating-1]=1
        console.log(array)
        this.setState({ appliedRating: rating, appliedRatingIndicator: array })
    }

    render(props) {

        return(
            <div>
                <a>
                <div className={RatingsFilterStyles.ratingsFilterItemsContainer} onClick={() => this.applyRating(4)}>
                    <Rating initialRating={4} readonly='true'
                        emptySymbol={<img src={EmptyStar} className='emptyStar'></img>}
                        fullSymbol={<img src={FullStar} className='fullStar'></img>}
                        className='ratings-stars'></Rating>
                    <span className={this.state.appliedRatingIndicator[3]===0 ? RatingsFilterStyles.ratingsFilterItemsText : RatingsFilterStyles.ratingsFilterItemsTextActive}>& up</span>
                </div>
                </a>
                
                <div className={RatingsFilterStyles.ratingsFilterItemsContainer} onClick={() => this.applyRating(3)}>
                    <Rating initialRating={3} readonly='true'
                        emptySymbol={<img src={EmptyStar} className='emptyStar'></img>}
                        fullSymbol={<img src={FullStar} className='fullStar'></img>}
                        className='ratings-stars'></Rating>
                    <span className={this.state.appliedRatingIndicator[2]===0 ? RatingsFilterStyles.ratingsFilterItemsText : RatingsFilterStyles.ratingsFilterItemsTextActive}>& up</span>
                </div>
                <div className={RatingsFilterStyles.ratingsFilterItemsContainer} onClick={() => this.applyRating(2)}>
                    <Rating initialRating={2} readonly='true'
                        emptySymbol={<img src={EmptyStar} className='emptyStar'></img>}
                        fullSymbol={<img src={FullStar} className='fullStar'></img>}
                        className='ratings-stars'></Rating>
                    <span className={this.state.appliedRatingIndicator[1]===0 ? RatingsFilterStyles.ratingsFilterItemsText : RatingsFilterStyles.ratingsFilterItemsTextActive}>& up</span>
                </div>
                <div className={RatingsFilterStyles.ratingsFilterItemsContainer} onClick={() => this.applyRating(1)}>
                    <Rating initialRating={1} readonly='true'
                        emptySymbol={<img src={EmptyStar} className='emptyStar'></img>}
                        fullSymbol={<img src={FullStar} className='fullStar'></img>}
                        className='ratings-stars'></Rating>
                    <span className={this.state.appliedRatingIndicator[0]===0 ? RatingsFilterStyles.ratingsFilterItemsText : RatingsFilterStyles.ratingsFilterItemsTextActive}>& up</span>
                </div>
            </div>
        );
        
    }
}

export default RatingsFilter;