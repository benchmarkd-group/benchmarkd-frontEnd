import React, { Component } from "react";
import axios from "axios";
import CardInfo from '../Course_Cards/Cards';
import SkeletonComponent from '../SkeletonComponent/SkeletonComponent';
class ScrollComponent extends Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      loading: false,
      page: 1,
      prevY: 0
    };
  }


  getCourses(page) {
    this.state.loading = true;
    axios
      .get(
        `http://192.168.1.179:3001/courses?_page=${page}&_limit=9`
      )
      .then(res => {
        this.setState({ courses: [...this.state.courses, ...res.data] });
        this.state.loading = false;
        this.state.page = this.state.page+1;
      });
  }




  

  componentDidMount() {
    this.getCourses(this.state.page);

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
      // const lastPhoto = this.state.courses[this.state.courses.length - 1];
      // const curPage = lastPhoto.albumId;
      this.getCourses(this.state.page);
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

            {(this.state.courses.length === 0) ? "": this.state.courses.map(course => (
              <CardInfo className="card" courseInfo={course}/>
            )) }
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