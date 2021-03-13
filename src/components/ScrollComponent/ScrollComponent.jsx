import React, { Component } from "react";
import axios from "axios";
import CardInfo from '../Course_Cards/Cards'

class ScrollComponent extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false,
      page: 0,
      prevY: 0
    };
  }


  getPhotos(page) {
    this.setState({ loading: true });
    axios
      .get(
        `http://localhost:3001/courses?_page=${page}&_limit=10`
      )
      .then(res => {
        this.setState({ photos: [...this.state.photos, ...res.data] });
        this.setState({ loading: false });
      });
  }


  componentDidMount() {
    this.getPhotos(this.state.page);

    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
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
      this.getPhotos(curPage);
      this.setState({ page: curPage });
    }
    this.setState({ prevY: y });
  }

  render() {
    // Additional css
    const loadingCSS = {
        height: "100px",
        margin: "30px"
      };
  
      // To change the loading icon behavior
      const loadingTextCSS = { display: this.state.loading ? "block" : "none" };
  
      return (
        <div className="container">
          <div className="containerinside">
            {this.state.photos.map(user => (
              <CardInfo className="card"/>
            ))}
          </div>
          <div
            ref={loadingRef => (this.loadingRef = loadingRef)}
            style={loadingCSS}
          >
            <span style={loadingTextCSS}>Loading with love 😻🙊👻</span>
          </div>
        </div>
      );
  }
}

export default ScrollComponent;