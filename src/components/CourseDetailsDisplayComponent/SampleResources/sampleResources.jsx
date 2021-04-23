import React, { Component } from 'react';
import '../SampleResources/sampleResources.css';
import coursedetailsinfor from '../../../jsons/coursedetails.json';
import ReactDOM from "react-dom";
import Modal from 'react-awesome-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons";

class sampleResources extends Component {

    constructor() {
        super();
        this.state = {
          url1 : 'false',
         display1 :'!none',
          url2 : 'false',
          display2 : '!none',
          align : 'right',
          visible : false
         };}
         openModal() {
            this.setState({
                visible : true
            });
        }
    
        closeModal() {
            this.setState({
                visible : false
            });
        }
 
      componentDidMount = () => {
        if(coursedetailsinfor.sampleresources[0].video1 != "false"){
            this.setState({url1 : coursedetailsinfor.sampleresources[0].video1})  
       //  this.state.url1 = coursedetailsinfor.sampleresources[0].video1;
        console.log(this.state.url1);
        }
        else {
            this.setState({display1 : 'none'})  
        }
        if(coursedetailsinfor.sampleresources[0].video2 != "false"){
           
            this.setState({url2 : coursedetailsinfor.sampleresources[0].video2}) 
    }
        else {
            console.log('in')
            this.setState({display2 : 'none', align : 'center'})  
        }
      }


    render(props){
        return( <div>
            <p className='subheading' style={{display: this.state.display1}}>Sample Resources</p>
     <video className='video' style={{display: this.state.display1}} controls>
     <source src= {this.state.url1} type="video/mp4"/>
     </video>

 <video className='video' style={{display: this.state.display2}} controls>
     <source src={this.state.url2} type="video/mp4"/>
     </video>
    
     <section>
                
                <input className='modalbtn' type="button" value="Free Resources" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className='ModalContent'>
                        <h5>Free Downloadable Resources</h5>
                       
                     
                        {(coursedetailsinfor.sampleresources[0].files.length === 0) ? "": coursedetailsinfor.sampleresources[0].files.map(file => (
            <p> <text>{file}</text> <a href={file} download> <FontAwesomeIcon icon={faDownload}/>
             
            </a> </p>

            )) }
                  
                        <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
            </section>
        </div> );
    }
}

export default sampleResources;