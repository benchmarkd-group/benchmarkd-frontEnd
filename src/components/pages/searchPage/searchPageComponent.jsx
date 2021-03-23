import React, { Component } from "react";
import Filter from "../../FilterComponent/Filter";
import HorizontalScroll from "../../HorizontalScroll/HorizontalScroll";
import ScrollComponent from "../../ScrollComponent/ScrollComponent";
import './searchPageComponent.css'
class SearchPageComponent extends Component {
    render() {
        return(
            <div className='page-wrapper'>
                <div className="title-bar-container"></div>
                <div className='page-body-wrapper'>
                    <div className='filter-panel-container'>
                        <Filter></Filter>
                    </div>
                    <div className='search-results-container'>
                        <HorizontalScroll></HorizontalScroll>
                        <ScrollComponent></ScrollComponent>
                    </div>
                </div>
                <div className='page-footer-container'></div>
            </div>
            
            
        )
    }
}

export default SearchPageComponent;