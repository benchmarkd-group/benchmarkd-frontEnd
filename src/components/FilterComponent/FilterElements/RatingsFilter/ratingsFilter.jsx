import React, { Component } from 'react';
import '../../../FilterComponent/Filter.css'


class RatingsFilter extends Component {

    render(props) {

        return(
            <div>
                <span>Ratings:</span>
                <br></br>
                    <label class="rating-element">
                        <input type="radio"></input> 4&up
                    </label>
                    <label class="rating-element">
                        <input type="radio"></input> 3&up
                    </label>
                    <label class="rating-element">
                        <input type="radio"></input> 2&up
                    </label>
                    <label class="rating-element">
                        <input type="radio"></input> 1&up
                    </label>
            </div>
            //   <div>
            //     <p>{this.props.description}</p>
            //   </div>
        );
        
    }
}

export default RatingsFilter;