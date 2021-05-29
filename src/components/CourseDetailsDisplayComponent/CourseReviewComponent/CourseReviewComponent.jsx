import React, { Component } from 'react';
import CourseReviewStyles from './CourseReviewComponent.module.css'
import Avatar from '@material-ui/core/Avatar'
import EmptyStar from '../../../images/empty_rating_star.svg'
import FullStar from '../../../images/full_rating_star.svg'
import Rating from 'react-rating'
import ShowMoreText from 'react-show-more-text'

class CourseReviewComponent extends Component{

    constructor(props) {
        super(props)
        this.state={
            displayPic: this.props.displayPic,
            userName: this.props.userName,
            rating: this.props.rating,
            reviewDate: this.props.reviewDate,
            reviewContent: this.props.reviewContent
        }
    }

    render(props){
        return(
            <div className={CourseReviewStyles.container}>
                <div className={CourseReviewStyles.pictureLikesContainer}>
                    <Avatar className={CourseReviewStyles.picture} src={this.state.displayPic}>A</Avatar>
                </div>
                <div className={CourseReviewStyles.nameRatingReviewContainer}>
                    <div className={CourseReviewStyles.userNameDiv}>
                        {this.state.userName}
                    </div>
                    <div className={CourseReviewStyles.ratingTimeContainer}>
                        <Rating initialRating={this.state.rating} readonly='true'
                        emptySymbol={<img src={EmptyStar} className='emptyStar'></img>}
                        fullSymbol={<img src={FullStar} className='fullStar'></img>}
                        className={CourseReviewStyles.rating}></Rating>
                        <div className={CourseReviewStyles.reviewTime}>{this.state.reviewDate}</div>
                    </div>
                    <div className={CourseReviewStyles.review}>
                        <ShowMoreText
                            lines={3}
                            more='Show more'
                            less='Show less'
                        >
                            {this.state.reviewContent}
                        </ShowMoreText>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseReviewComponent;