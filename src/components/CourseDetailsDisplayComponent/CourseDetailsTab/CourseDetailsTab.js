import React, { Component } from "react";
import { render } from "react-dom";
import '../../../components/CourseDetailsDisplayComponent/CourseDetailsTab/CourseDetailsTab.css';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CourseDetailsTab extends Component {
    constructor(props) {
      super(props);
      this.state = {
            currentTab:0,
            data: [
              { id: "1", name: "London" ,info: "London is the capital city of England.",icon:faEye},
              { id: "2", name: "Paris" ,info: "Paris is the capital of France." ,icon:faClock},
              { id: "3", name: "Tokyo"  ,info: "Tokyo is the capital of Japan.",icon:faPhone}
            ]
    };
    this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(currentTab) {
      this.setState({ currentTab });
    }
    handleMouseOver = ()=> {
        document.getElementById("tabLabelName").className = "tab-name-expanded";
      } 
      handleMouseOut =()=> {
        document.getElementById("tabLabelName").className = "tab-name-contracted";
      } 
    render() {
      return (
  
  <div>
    
    <div className="tab" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
      {this.state.data.map((button, i) => (
        
          <button data-tip data-for="registerTip" className="tablinks" id ={button.id} onClick={() => this.handleClick(i)} >
            <div className='tab-label-container'>
              <FontAwesomeIcon icon={button.icon} />
              <span id='tabLabelName' className='tab-name-contracted'>{button.name}</span>
            </div>
          </button> 
        
      )
        )
      }
    </div>
  
    <div className="tabcontent">
      {this.state.currentTab !==1 &&
        <React.Fragment>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
          </nav>
        </React.Fragment>
      }
      {this.state.currentTab !== -1 &&
        <React.Fragment>
          <h3>{this.state.data[this.state.currentTab].name}</h3>
          <p>{this.state.data[this.state.currentTab].info}</p>
        </React.Fragment>
      }
    </div>
  </div>
    )
    }
  }
  
export default CourseDetailsTab;