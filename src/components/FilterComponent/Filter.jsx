import { ExitToApp } from '@material-ui/icons';
import React, { Component } from 'react';
import ExamFilter from './FilterElements/ExamFilter/examFilter';
import FeaturesFilter from './FilterElements/FeaturesFilter/featuresFilter';
import RatingsFilter from './FilterElements/RatingsFilter/ratingsFilter';

class Filter extends Component {

    render(props) {

        // var bookmarkClass = this.state.isBookmarked ? "bookmark-btn bookmarked-btn" : "bookmark-btn not-bookmarked-btn";

        return (

            <div class = "filter-box">
                <span>Filter By:</span>
                <div class = "filter-component"><ExamFilter/></div>
                <div class = "filter-component"><FeaturesFilter/></div>
                <div class = "filter-component"><RatingsFilter/></div>
                
            </div>
        );
    }
}

export default Filter;