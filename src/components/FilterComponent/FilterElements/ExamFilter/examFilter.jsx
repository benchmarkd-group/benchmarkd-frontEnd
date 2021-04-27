import React, { Component } from 'react';
import ExamFilterStyle from '../ExamFilter/examFilter.module.css'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const KeyCodes = {
    comma: 188,
    enter: 13,
  };

class ExamFilter extends Component {
  
    constructor(props){
        super(props);
        this.state = {
            tags: [],
            appliedTags: [],
            suggestionVisibility: 'none',
            suggestedTags: [],
            examList: ['CAT','CMAT','XAT','SNAP','GMAT','CET','NMAT','CLAT','CNAT'],
            applyBtnVisibility: 'hidden',
            appliedTagsSectionVisibility: 'hidden'
        };
        this.handleInput = this.handleInput.bind(this)
        this.tagInputField = React.createRef()
        this.handleSuggestionItemClick = this.handleSuggestionItemClick.bind(this)
        this.handleApplyTagsBtnCLick = this.handleApplyTagsBtnCLick.bind(this)
        this.removeAppliedTag = this.removeAppliedTag.bind(this)
    }

    removeTag = (i) => {
        if(this.state.tags.length > 0) {
            const newTags = [ ...this.state.tags ];
            const suggestionList = this.state.examList;
            suggestionList.push(newTags[i])
            this.setState({ examList: suggestionList })
            newTags.splice(i, 1);
            this.setState({ tags: newTags }, function () {
                if(this.state.tags.length === 0){
                    this.setState({ applyBtnVisibility: 'hidden' })
                }
            });
        }
      }
    
      inputKeyDown = (e) => {
        const val = e.target.value;
        if (e.key === 'Enter' && val) {
          if (this.state.tags.find(tag => tag.toLowerCase() === val.toLowerCase())) {
            return;
          }
          if(this.state.suggestedTags[0] === 'No exams found'){
              console.log(this.state.suggestedTags[0])
          }
        
        } else if (e.key === 'Backspace' && !val) {
            this.removeTag(this.state.tags.length - 1);
        } else if (e.key === 'Backspace' && val.length === 1){
            this.setState({ suggestionVisibility: 'none' })
        }
      }

      handleInput() {
        var Pattern = new RegExp('^'+this.tagInputField.current.value.toUpperCase()+'.*')
        if(this.tagInputField.current.value === null || this.tagInputField.current.value === ''){
            this.setState({ suggestedTags: [] })
        }
        else{
            var filtered = this.state.examList.filter(function (str) { return Pattern.test(str) } )
            if(filtered.length === 0){
                this.setState({ suggestedTags: ['No exams found'] })
            }
            else{
                filtered.sort()
                this.setState({ suggestedTags: filtered })
            }
            this.setState({ suggestionVisibility: ''})   
        }
      }

      handleSuggestionItemClick(tag) {
        if(!(tag === 'No exams found') ){
            this.tagInputField.current.value = tag
            this.setState({ tags: [...this.state.tags, tag]});
            this.setState({ suggestionVisibility: 'none' })
            const suggestionList = this.state.examList;
            suggestionList.splice(suggestionList.indexOf(tag), 1)
            this.setState({ examList: suggestionList })
            this.tagInputField.current.value = null;
            this.setState({ applyBtnVisibility: 'visible' })           
        }
      }

      handleApplyTagsBtnCLick() {
          this.setState(state =>{
            const appliedTags = state.appliedTags.concat(this.state.tags)
            const tags =[]
            const suggestionVisibility= 'none'
            const applyBtnVisibility= 'hidden'
            const appliedTagsSectionVisibility= 'visible'
            const suggestedTags= []
            return{
                appliedTags,
                tags,
                suggestionVisibility,
                applyBtnVisibility,
                suggestedTags,
                appliedTagsSectionVisibility
            }
          }
          )
          
      }

      removeAppliedTag(i) {
        const appliedTags = [ ...this.state.appliedTags ]
        const suggestionList = this.state.examList;
        this.tagInputField.current.value = null;
        suggestionList.push(appliedTags[i])
        appliedTags.splice(i, 1);
        if(appliedTags.length === 0){
            this.setState({ appliedTagsSectionVisibility: 'hidden' })
        }
        this.setState({
            appliedTags: appliedTags,
            examList: suggestionList,
            suggestionVisibility: 'none'
        })
      }

    render(props) {

        const { tags } = this.state;

        return(
            <div classname='exam-filter-container'>

                <div className={ExamFilterStyle.inputTag}>
                            <ul className={ExamFilterStyle.inputTag__tags}>
                                { tags.map((tag, i) => (
                                    <li classname='selected-exam-tags' key={tag}>
                                        {tag}
                                        <button classname='tag-cross-button' type="button" onClick={() => { this.removeTag(i); }}>+</button>
                                    </li>
                                ))}
                                <li className={ExamFilterStyle.inputTag__tags__input}>
                                    <div className={ExamFilterStyle.tagsInputWithButtonContainer}>
                                    <input type="text" ref={this.tagInputField} placeholder='Enter an exam' onInput={this.handleInput} onKeyDown={this.inputKeyDown}/>
                                    <button style={{ visibility: this.state.applyBtnVisibility }} onClick={this.handleApplyTagsBtnCLick}>APPLY</button>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                        <div style={{display: this.state.suggestionVisibility, maxHeight: 150, overflow:'auto', border:'1px solid #d6d6d6', marginBottom: 10}} className={ExamFilterStyle.suggestionItemsContainer}>
                            <List component="nav" className='suggestion-list'>
                                {this.state.suggestedTags.map((tag,i) => (
                                        <ListItem button divider>
                                            <ListItemText primary={tag} style={{ color:'white' }} onClick={() => this.handleSuggestionItemClick(tag)} />
                                        </ListItem>
                                    ))}
                            </List>
                        </div>
                        <div className={ExamFilterStyle.appliedTag__sectionHeader} style={{ visibility: this.state.appliedTagsSectionVisibility }}>
                            <span style={{ color:'white' }}>Currently displaying for:</span>
                            <div className={ExamFilterStyle.appliedTag}>
                                <ul className={ExamFilterStyle.appliedTag__tags}>
                                    { this.state.appliedTags.map((tag, i) => (
                                        <li classname='applied-exam-tags' key={tag}>
                                            {tag}
                                            <button classname='tag-cross-button' type="button" onClick={() => { this.removeAppliedTag(i); }}>+</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>    
                        </div>
                        
            
            </div>
        );
        
    }
}

export default ExamFilter;