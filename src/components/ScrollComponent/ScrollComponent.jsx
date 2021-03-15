import React, { Component } from "react";
import axios from "axios";
import CardInfo from '../Course_Cards/Cards';
import SkeletonComponent from '../SkeletonComponent/SkeletonComponent';
class ScrollComponent extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false,
      page: 1,
      prevY: 0
    };
  }


  getPhotos(page) {
    this.state.loading = true;
    axios
      .get(
        `http://192.168.1.179:3001/courses?_page=${page}&_limit=9`
      )
      .then(res => {
        this.setState({ photos: [...this.state.photos, ...res.data] });
        this.state.loading = false;
        this.state.page = this.state.page+1;
      });
  }




  

  componentDidMount() {
    this.getPhotos(this.state.page);

    var options = {
      root: null,
      rootMargin: "0px",
      // threshold: 1.0
    };
    
    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y) {
      const lastPhoto = this.state.photos[this.state.photos.length - 1];
      const curPage = lastPhoto.albumId;
      this.getPhotos(this.state.page);
    }
    this.state.prevY = y;
  }

  render() {
    // Additional css
    const loadingCSS = {
        height: "100px",
        margin: "0px"
      };
  
     
      // To change the loading icon behavior
      const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
  
      return (
        <p>
        <div className="container">
          
          <div className="containerinside">

            {/* {console.log(this.state.photos)} */}

            {(this.state.photos.length === 0) ? "": this.state.photos.map(user => (
              <CardInfo className="card" courseInfo={user}/>
            )) }

            {/* { 
            this.state.photos.map(user => (
              <CardInfo className="card"/>
            ))} */}
          </div>
          
          <div
            ref={loadingRef => (this.loadingRef = loadingRef)}
            style={loadingCSS}
          >
           <SkeletonComponent style={loadingTextCSS}/>
          </div>
  
        </div>
        </p>
      );
  }
}

export default ScrollComponent;