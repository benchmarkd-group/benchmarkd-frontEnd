import React, { Component } from 'react';
import '../../../FilterComponent/Filter.css'


class ExamFilter extends Component {
  
    constructor(){
        super();
        this.toggleDropdown = this.toggleDropdown.bind(this);
    }
//   constructor(){
//     super();
//     this.printy = this.printy.bind(this);

// }

// printy = () => {
//   this.setState ({count : this.state.count + 1})
//     console.log(this.state.count);
//     console.log(this);
// }

// render = () =>{
// return(<div><button onClick = {this.printy}>CLICK
//     </button></div>);
// }
    toggleDropdown = () => {
        console.log("dsad");
      //  let el = event.target;
      //  console.log(el)
        // document.getElementsByClassName()
    }
    // () => this.toggleDropdown.bind(this)

    render(props) {

        return(
            <div>
            <span>Exam:</span>
            <br></br>
                <span class="exam-name">MBA 
                    <span>
                        <span class="arrow down" onClick={this.toggleDropdown}></span>
                        <span class="arrow up" style = {{display:"none"}}></span>
                    </span>
                    <span class = "exam-background-box">
                        <span class="exam-box">CMAT</span>
                        <span class="exam-box">XAT</span>
                        <span class="exam-box">CAT</span>
                        <span class="exam-box">NMAT</span>
                        <span class="exam-box">GMAT</span>
                        <span class="exam-box">SNAP</span>
                    </span>
                </span>

                <span class="exam-name">Medical 
                    <span>
                        <span class="arrow down" style = {{display:"none"}} onClick={() => this.toggleDropdown.bind(this)}></span>
                        <span class="arrow up" ></span>
                    </span>
                    <span class = "exam-background-box" style = {{display:"none"}}>
                        <span class="exam-box">CMAT</span>
                        <span class="exam-box">XAT</span>
                        <span class="exam-box">CAT</span>
                        <span class="exam-box">NMAT</span>
                        <span class="exam-box">GMAT</span>
                        <span class="exam-box">SNAP</span>
                    </span>
                </span>
                
                <span class="exam-name">Engineering 
                    <span>
                        <span class="arrow down" style = {{display:"none"}} onClick={() => this.toggleDropdown.bind(this)}></span>
                        <span class="arrow up" ></span>
                    </span>
                    <span class = "exam-background-box" style = {{display:"none"}}>
                        <span class="exam-box">CMAT</span>
                        <span class="exam-box">XAT</span>
                        <span class="exam-box">CAT</span>
                        <span class="exam-box">NMAT</span>
                        <span class="exam-box">GMAT</span>
                        <span class="exam-box">SNAP</span>
                    </span>
                </span>

            </div>
            //   <div>
            //     <p>{this.props.description}</p>
            //   </div>
        );
        
    }
}

export default ExamFilter;