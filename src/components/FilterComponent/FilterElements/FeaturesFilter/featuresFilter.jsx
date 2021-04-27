import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox'
import FeatureFilterStyles from './featuresFilter.module.css'
// import '../../../FilterComponent/Filter.module.css'

class FeaturesFilter extends Component {

    constructor() {
        super()
        this.state= {
            featureList: ['Live Lectures','Videos','Study Material','Mock Tests','1-on-1 Mentorship'],
            appliedFeaturesList: []
        }
        this.handleSuggestionItemClick = this.handleSuggestionItemClick.bind(this)
    }

    handleSuggestionItemClick(feature){
        if(this.state.appliedFeaturesList.includes(feature)){
            const list = this.state.appliedFeaturesList,
            i=list.indexOf(feature)
            list.splice(i,1)
            this.setState({ appliedFeaturesList:list }
            )
        }
        else{
            this.setState(state =>{
                const appliedFeaturesList = state.appliedFeaturesList.concat(feature)
                return{
                    appliedFeaturesList
                }
            }
            )
        }
        
        
    }

    render(props) {

        return(
            <div>
                    <List component="nav" className='suggestion-list'>
                                {this.state.featureList.map((feature,i) => (
                                        <ListItem divider>
                                            <div className={FeatureFilterStyles.featuresListItemContainer}>
                                                <ListItemText primary={feature} style={{ color:'white' }}  />
                                                <Checkbox style={{ color: 'white' }} inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} onClick={() => this.handleSuggestionItemClick(feature)}/>
                                            </div>
                                            
                                        </ListItem>
                                    ))}
                    </List>
            </div>
        );
        
    }
}

export default FeaturesFilter;