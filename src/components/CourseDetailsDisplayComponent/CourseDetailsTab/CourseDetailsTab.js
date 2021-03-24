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
        document.getElementById(1).innerText = this.state.data[0].name;
        document.getElementById(2).innerText = this.state.data[1].name;
        document.getElementById(3).innerText = this.state.data[2].name;
      } 
      handleMouseOut =()=> {
        document.getElementById(1).innerText = null;
        document.getElementById(2).innerText = null;
        document.getElementById(3).innerText = null;
      } 
    render() {
      return (
  
  <div>
    
    <div className="tab" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
    {this.state.data.map((button, i) => (
       
        <button data-tip data-for="registerTip" className="tablinks" id ={button.id} onClick={() => this.handleClick(i)} >
        <FontAwesomeIcon icon={button.icon} /> </button> 
      
    )
      )
    }
    </div>
  
    <div className="tabcontent">
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