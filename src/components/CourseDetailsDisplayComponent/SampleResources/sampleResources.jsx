import React, { Component } from 'react';
import SampleResourcesStyles from '../SampleResources/sampleResources.module.css';
import coursedetailsinfor from '../../../jsons/coursedetails.json';
import ReactDOM from "react-dom";
import Modal from 'react-awesome-modal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload} from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { faFileWord } from "@fortawesome/free-solid-svg-icons";

class sampleResources extends Component {

    constructor() {
        super();
        this.state = {
          url1 : 'false',
         display1 :'!none',
          url2 : 'false',
          display2 : '!none',
          align : 'right',
          visible : false,
          displayexpand: '!none',
          lessthanthree:'!none',
          morethanthree:'!none',
          sampleResourceDivHeight: '145px',
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
 
        expand = () => {
            this.setState({ displayexpand: 'relative',
            lessthanthree : 'none',
            morethanthree : 'none',
            sampleResourceDivHeight: 'fit-content',
           })  
        }


      componentDidMount = () => {
        if(coursedetailsinfor.sampleresources.video1 != "false"){
            this.setState({url1 : coursedetailsinfor.sampleresources.video1})  
         this.state.url1 = coursedetailsinfor.sampleresources.video1;
       // console.log(this.state.url1);
        }
        else {
            this.setState({display1 : 'none'})  
        }
        if(coursedetailsinfor.sampleresources.video2 != "false"){
           
            this.setState({url2 : coursedetailsinfor.sampleresources.video2}) 
    }
        else {
            //console.log('in')
            this.setState({display2 : 'none', align : 'center'})  
        }
      }


    render(props){
        return( <div>
            <p className={SampleResourcesStyles.subheading} style={{display: this.state.display1}}>Sample Resources</p>
     <video className={SampleResourcesStyles.video}  style={{display: this.state.display1}} controls>
     <source src= {this.state.url1} type="video/mp4"/>
     </video>

 <video className={SampleResourcesStyles.video} style={{display: this.state.display2}} controls>
     <source src={this.state.url2} type="video/mp4"/>
     </video>
    

            <div className={SampleResourcesStyles.sampleresourcesdownload} style={{color: '#F4A261', height: this.state.sampleResourceDivHeight}}>
 
           {
               
            (coursedetailsinfor.sampleresources.files.length > 3) ? 
           <div>
           <div style={{display: this.state.morethanthree}}><p><FontAwesomeIcon icon={faFilePdf}/> <text>{coursedetailsinfor.sampleresources.files[0].sampleResFileName}</text> <a href={coursedetailsinfor.sampleresources.files[0].sampleResFileName} download> 
             </a> <FontAwesomeIcon style={{alignItems: 'right'}} icon={faDownload}/></p>

           <p><FontAwesomeIcon icon={faFileExcel}/> <text>{coursedetailsinfor.sampleresources.files[1].sampleResFileName}</text> <a href={coursedetailsinfor.sampleresources.files[1].sampleResFileName} download> 
            </a> <FontAwesomeIcon style={{alignItems: 'right'}} icon={faDownload}/></p>

           <p><FontAwesomeIcon icon={faFileWord}/> <text>{coursedetailsinfor.sampleresources.files[2].sampleResFileName}</text> <a href={coursedetailsinfor.sampleresources.files[2].sampleResFileName} download> 
            </a> <FontAwesomeIcon style={{alignItems: 'right'}} icon={faDownload}/></p> 
           <button style={{position: 'relative', left:'80%', backgroundColor: 'transparent', border: 'none', color: '#F4A261'}} onClick={() => this.expand()}> +View More </button> 
           </div>
           {
                ((coursedetailsinfor.sampleresources.files.length === 0) ? "": coursedetailsinfor.sampleresources.files.map(file => (
                    <div style={{display: this.state.displayexpand}}> <p><FontAwesomeIcon icon={faFilePdf}/> <text>{file.sampleResFileName}</text> <a href={file.sampleResFileURL} download> 
                      
                     </a><FontAwesomeIcon icon={faDownload}/> </p> </div>
                             
                     )) )
           }

     <div>
     </div>
           </div> 
           :
           ((coursedetailsinfor.sampleresources.files.length === 0) ? "": coursedetailsinfor.sampleresources.files.map(file => (
           <div style={{display: this.state.lessthanthree}}> <p><FontAwesomeIcon icon={faFilePdf}/> <text>{file}</text> <a href={file} download> 
             
            </a><FontAwesomeIcon icon={faDownload}/> </p> </div>
                    
            )) )
    }
            </div>
        </div> );
    }
}

export default sampleResources;