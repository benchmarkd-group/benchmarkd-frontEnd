import { Accordion } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';
import React, { Component } from 'react';
import ExamFilter from './FilterElements/ExamFilter/examFilter';
import FeaturesFilter from './FilterElements/FeaturesFilter/featuresFilter';
import RatingsFilter from './FilterElements/RatingsFilter/ratingsFilter';
import PriceFilter from './FilterElements/PriceFilter/priceFilter'
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import FilterStyles from './Filter.module.css'
import cx from 'classnames'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import priceFilterJson from '../../jsons/priceFilter.json'


class Filter extends Component {

    constructor() {
        super()
        this.state = {
            examsArrowClass: FilterStyles.accordionExpandIcon,
            featuresArrowClass: FilterStyles.accordionExpandIcon,
            ratingsArrowClass: FilterStyles.accordionExpandIcon,
            priceArrowClass: FilterStyles.accordionExpandIcon
        };
        this.handleExamsAccordionExpand = this.handleExamsAccordionExpand.bind(this);
        this.handleFeaturesAccordionExpand = this.handleFeaturesAccordionExpand.bind(this);
        this.handleRatingsAccordionExpand = this.handleRatingsAccordionExpand.bind(this);
        this.handlePriceAccordionExpand = this.handlePriceAccordionExpand.bind(this);
    }


    handleExamsAccordionExpand() {
        if(this.state.examsArrowClass === FilterStyles.accordionExpandIcon || this.state.examsArrowClass === FilterStyles.accordionExpandIconActive){
            this.setState({ examsArrowClass: FilterStyles.accordionExpandIconInactive })
        }
        else{
            this.setState({ examsArrowClass: FilterStyles.accordionExpandIconActive })
        }
    }

    handleFeaturesAccordionExpand() {
        if(this.state.featuresArrowClass === FilterStyles.accordionExpandIcon || this.state.featuresArrowClass === FilterStyles.accordionExpandIconActive){
            this.setState({ featuresArrowClass: FilterStyles.accordionExpandIconInactive })
        }
        else{
            this.setState({ featuresArrowClass: FilterStyles.accordionExpandIconActive })
        }
    }

    handleRatingsAccordionExpand() {
        if(this.state.ratingsArrowClass === FilterStyles.accordionExpandIcon || this.state.ratingsArrowClass === FilterStyles.accordionExpandIconActive){
            this.setState({ ratingsArrowClass: FilterStyles.accordionExpandIconInactive })
        }
        else{
            this.setState({ ratingsArrowClass: FilterStyles.accordionExpandIconActive })
        }
    }

    handlePriceAccordionExpand() {
        if(this.state.priceArrowClass === FilterStyles.accordionExpandIcon || this.state.priceArrowClass === FilterStyles.accordionExpandIconActive){
            this.setState({ priceArrowClass: FilterStyles.accordionExpandIconInactive })
        }
        else{
            this.setState({ priceArrowClass: FilterStyles.accordionExpandIconActive })
        }
    }

    fetchPriceFilterData(data){
        console.log("Inside parent: "+data)
    }

    render(props) {

        // var bookmarkClass = this.state.isBookmarked ? "bookmark-btn bookmarked-btn" : "bookmark-btn not-bookmarked-btn";

        return (

            <div class = {FilterStyles.filterBox}>
                <div className={FilterStyles.filterPanelTitle}>Filter By:</div>
                <Accordion className={cx(FilterStyles.MuiPaperRoot, FilterStyles.MuiAccordionRoot)}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className= {cx(FilterStyles.MuiAccordionSummaryRoot)}
                        style={{ maxHeight:15 }}
                        onClick={this.handleExamsAccordionExpand}
                        >
                        <div className={FilterStyles.accordionTitleContainer}>
                            <div className={FilterStyles.filterAccordionTitle}>Exam</div>
                            <div style={{ textAlign:'center', width:'10%' }}>
                                <FontAwesomeIcon icon={faAngleDown} className={this.state.examsArrowClass}></FontAwesomeIcon>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails style={{ padding:10 }}>
                        <div class = {FilterStyles.filterComponent}><ExamFilter/></div>
                    </AccordionDetails>
                </Accordion>
                <div>
                                <h2 className={cx(FilterStyles.divider, FilterStyles.gradient)} contenteditable></h2>
                            </div>
                <Accordion className={cx(FilterStyles.MuiPaperRoot, FilterStyles.MuiAccordionRoot)}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={cx(FilterStyles.MuiAccordionSummaryRoot)}
                        style={{ maxHeight:15 }}
                        onClick={this.handleFeaturesAccordionExpand}
                        >
                        <div className={FilterStyles.accordionTitleContainer}>
                            <div className={FilterStyles.filterAccordionTitle}>Features</div>
                            <div style={{ textAlign:'center', width:'10%' }}>
                                <FontAwesomeIcon icon={faAngleDown} className={this.state.featuresArrowClass}></FontAwesomeIcon>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails style={{ padding:10 }}>
                        <div class = {FilterStyles.filterComponent}><FeaturesFilter/></div>
                    </AccordionDetails>
                </Accordion>
                <div>
                                <h2 className={cx(FilterStyles.divider, FilterStyles.gradient)} contenteditable></h2>
                            </div>               
                <Accordion className={cx(FilterStyles.MuiPaperRoot, FilterStyles.MuiAccordionRoot)}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={cx(FilterStyles.MuiAccordionSummaryRoot)}
                        style={{ maxHeight:15 }}
                        onClick={this.handleRatingsAccordionExpand}
                        >
                        <div className={FilterStyles.accordionTitleContainer}>
                            <div className={FilterStyles.filterAccordionTitle}>Ratings</div>
                            <div style={{ textAlign:'center', width:'10%' }}>
                                <FontAwesomeIcon icon={faAngleDown} className={this.state.ratingsArrowClass}></FontAwesomeIcon>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails style={{ padding:10 }}>
                        <div class = {FilterStyles.filterComponent}><RatingsFilter/></div>
                    </AccordionDetails>
                </Accordion> 
                <div>
                                <h2 className={cx(FilterStyles.divider, FilterStyles.gradient)} contenteditable></h2>
                            </div>              
                
                            <Accordion className={cx(FilterStyles.MuiPaperRoot, FilterStyles.MuiAccordionRoot)}>
                    <AccordionSummary
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={cx(FilterStyles.MuiAccordionSummaryRoot)}
                        style={{ maxHeight:15 }}
                        onClick={this.handlePriceAccordionExpand}
                        >
                        <div className={FilterStyles.accordionTitleContainer}>
                            <div className={FilterStyles.filterAccordionTitle}>Price</div>
                            <div style={{ textAlign:'center', width:'10%' }}>
                                <FontAwesomeIcon icon={faAngleDown} className={this.state.priceArrowClass}></FontAwesomeIcon>
                            </div>
                        </div>
                    </AccordionSummary>
                    <AccordionDetails style={{ padding:10 }}>
                        <div class = {FilterStyles.filterComponent}><PriceFilter data={priceFilterJson} callbackFunction={this.fetchPriceFilterData}/></div>
                    </AccordionDetails>
                </Accordion> 
                <div>
                                <h2 className={cx(FilterStyles.divider, FilterStyles.gradient)} contenteditable></h2>
                            </div>              
                
            </div>
        );
    }
}

export default Filter;