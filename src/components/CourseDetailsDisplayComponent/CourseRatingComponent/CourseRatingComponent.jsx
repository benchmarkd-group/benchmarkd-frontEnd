import React, { Component } from "react";
import CourseRatingStyles from './CourseRatingComponent.module.css'
import Rating from 'react-rating'
import EmptyStar from '../../../images/empty_rating_star.svg'
import FullStar from '../../../images/full_rating_star.svg'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CourseRatingComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            overallRating: this.props.overallRating,
            totalNumberOfRatings: this.props.totalNumberOfRatings,
            ratingsDistribution: this.props.ratingsDistribution
        }
    }

    render() {

        return(
            <div className={CourseRatingStyles.rootContainer}>
                <div className={CourseRatingStyles.ratingContainer}>
                    <div className={CourseRatingStyles.overallRatingValueContainer}>
                        <div className={CourseRatingStyles.actualRatingValueContainer}>{this.state.overallRating}</div>
                        <div className={CourseRatingStyles.outOfRatingValueContainer}>/5</div>
                    </div>
                    <div className={CourseRatingStyles.ratingStarsContainer}>
                        <Rating initialRating={this.state.overallRating} readonly='true'
                            emptySymbol={<img src={EmptyStar} className='emptyStar'></img>}
                            fullSymbol={<img src={FullStar} className='fullStar'></img>}
                            className={CourseRatingStyles.rating}></Rating>
                    </div>
                    <div className={CourseRatingStyles.numberOfRatingsContainer}>{new Intl.NumberFormat('en-IN').format(this.state.totalNumberOfRatings)} ratings</div>
                </div>
                <div className={CourseRatingStyles.ratingDistributionContainer}>
                    <div className={CourseRatingStyles.starDistributionContainer}>
                        <div>5</div>
                        <FontAwesomeIcon className={CourseRatingStyles.distributionStarIcon} icon={faStar}></FontAwesomeIcon>
                        <div className={CourseRatingStyles.distributionBar}>
                            <div 
                                style={{ height:'100%', width:(parseInt(this.state.ratingsDistribution.fiveStar)/parseInt(this.state.totalNumberOfRatings))*100+'%' , background:'rgba(255, 173, 98, 1)', borderRadius:'10px', opacity: '1'}}
                            ></div>
                        </div>
                        <div className={CourseRatingStyles.distributionNumberOfRatings}>{new Intl.NumberFormat('en-IN').format(this.state.ratingsDistribution.fiveStar)}</div>
                    </div>
                    <div className={CourseRatingStyles.starDistributionContainer}>
                        <div>4</div>
                        <FontAwesomeIcon className={CourseRatingStyles.distributionStarIcon} icon={faStar}></FontAwesomeIcon>
                        <div className={CourseRatingStyles.distributionBar}>
                            <div style={{ height:'100%', width:(parseInt(this.state.ratingsDistribution.fourStar)/parseInt(this.state.totalNumberOfRatings))*100+'%', background:'rgba(255, 173, 98, 1)', borderRadius:'10px', opacity: '1'}}></div>
                        </div>
                        <div className={CourseRatingStyles.distributionNumberOfRatings}>{new Intl.NumberFormat('en-IN').format(this.state.ratingsDistribution.fourStar)}</div>
                    </div>
                    <div className={CourseRatingStyles.starDistributionContainer}>
                        <div>3</div>
                        <FontAwesomeIcon className={CourseRatingStyles.distributionStarIcon} icon={faStar}></FontAwesomeIcon>
                        <div className={CourseRatingStyles.distributionBar}>
                            <div style={{ height:'100%', width:(parseInt(this.state.ratingsDistribution.threeStar)/parseInt(this.state.totalNumberOfRatings))*100+'%', background:'rgba(255, 173, 98, 1)', borderRadius:'10px', opacity: '1'}}></div>
                        </div>
                        <div className={CourseRatingStyles.distributionNumberOfRatings}>{new Intl.NumberFormat('en-IN').format(this.state.ratingsDistribution.threeStar)}</div>
                    </div>
                    <div className={CourseRatingStyles.starDistributionContainer}>
                        <div>2</div>
                        <FontAwesomeIcon className={CourseRatingStyles.distributionStarIcon} icon={faStar}></FontAwesomeIcon>
                        <div className={CourseRatingStyles.distributionBar}>
                            <div style={{ height:'100%', width:(parseInt(this.state.ratingsDistribution.twoStar)/parseInt(this.state.totalNumberOfRatings))*100+'%', background:'rgba(255, 173, 98, 1)', borderRadius:'10px', opacity: '1'}}></div>
                        </div>
                        <div className={CourseRatingStyles.distributionNumberOfRatings}>{new Intl.NumberFormat('en-IN').format(this.state.ratingsDistribution.twoStar)}</div>
                    </div>
                    <div className={CourseRatingStyles.starDistributionContainer}>
                        <div>1</div>
                        <FontAwesomeIcon className={CourseRatingStyles.distributionStarIcon} icon={faStar}></FontAwesomeIcon>
                        <div className={CourseRatingStyles.distributionBar}>
                            <div style={{ height:'100%', width:(parseInt(this.state.ratingsDistribution.oneStar)/parseInt(this.state.totalNumberOfRatings))*100+'%', background:'rgba(255, 173, 98, 1)', borderRadius:'10px', opacity: '1'}}></div>
                        </div>
                        <div className={CourseRatingStyles.distributionNumberOfRatings}>{new Intl.NumberFormat('en-IN').format(this.state.ratingsDistribution.oneStar)}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseRatingComponent