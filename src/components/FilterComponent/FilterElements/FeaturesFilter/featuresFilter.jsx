import React, { Component } from 'react';
import '../../../FilterComponent/Filter.css'

class FeaturesFilter extends Component {

    render(props) {

        return(
            <div>
                <span>Features:</span>
                <br></br>
                    <label>
                        <input type="checkbox"></input> Live Lectures
                    </label>
                    <label>
                        <input type="checkbox"></input> Videos
                    </label>
                    <label>
                        <input type="checkbox"></input> Study Material
                    </label>
                    <label>
                        <input type="checkbox"></input> Mock Tests
                    </label>
                    <label>
                        <input type="checkbox"></input> 1-on-1 Mentor
                    </label>
            </div>
            //   <div>
            //     <p>{this.props.description}</p>
            //   </div>
        );
        
    }
}

export default FeaturesFilter;