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
        document.getElementById("tab").className = "sidebar-navigation";
      } 
    handleMouseOut =()=> {
    document.getElementById("tab").className = "sidebar-navigation-closed";
    } 
      
    render() {
      return (
  
  <div>
    
    {/* <div id="tab" class="sidebar-navigation-closed hidde-sm hidden-xs">
            <nav>
                <ul id="tab">
                    <li>
                        <a href="#description">
                            Description <span style={{color:"red"}}>Description</span> 
                        </a>
                    </li>
                    <li>
                        <a href="#schedule">
                            Schedule
                        </a>
                    </li>
                    <li>
                        <a href="#achievements">
                            Achievements
                        </a>
                    </li>
                    <li>
                        <a href="#video">
                            Presentation
                        </a>
                    </li>
                    <li>
                        <a href="#blog">
                            Blog Entires
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
         */}

        <header class="nav-down responsive-nav hidden-lg hidden-md">
            <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div id="main-nav" class="collapse navbar-collapse">
                <nav>
                    <ul class="nav navbar-nav">
                        <li><a href="#top">Home</a></li>
                        <li><a href="#featured">Featured</a></li>
                        <li><a href="#projects">Recent Projects</a></li>
                        <li><a href="#video">Presentation</a></li>
                        <li><a href="#blog">Blog Entries</a></li>
                        <li><a href="#contact">Contac Us</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <div class="sidebar-navigation hidde-sm hidden-xs">
            
            <nav>
                <ul>
                    <li>
                        <a href="#rojects">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#featured">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Featured
                        </a>
                    </li>
                    <li>
                        <a href="#projects">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Recent Work
                        </a>
                    </li>
                    <li>
                        <a href="#video">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Presentation
                        </a>
                    </li>
                    <li>
                        <a href="#blog">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Blog Entires
                        </a>
                    </li>
                    <li>
                        <a href="#contact">
                            <span class="rect"></span>
                            <span class="circle"></span>
                            Contact Us
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="page-content">
        <section id="projects" class="about-area pt-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-content mt-50 wow">
                                <div class="section-title">
                                    <h3 class="title">Description</h3>
                                </div>
                                <p class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                            </div> 
                        </div>
                    </div>  
                </div> 
            </section>

            <section id="schedule" class="about-area pt-70">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="about-content mt-50 wow">
                                <div class="section-title">
                                    <h3 class="title">Schedule</h3>
                                </div>
                                <p class="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </section>
            <section id="featured" class="content-section">
                <div class="section-heading">
                    <h1>Achievements</h1>
                </div>
                <div class="section-content">
                    <div class="owl-carousel owl-theme">
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_1.jpg" alt=""></img>
                                <div class="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_2.jpg" alt=""></img>
                                <div class="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_3.jpg" alt=""></img>
                                <div class="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_2.jpg" alt=""></img>
                                <div class="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_1.jpg" alt=""></img>
                                <div class="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_3.jpg" alt=""></img>
                                <div class="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_2.jpg" alt=""></img>
                                <div class="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_1.jpg" alt=""></img>
                                <div class="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="image">
                                <img src="img/featured_3.jpg" alt=""></img>
                                <div class="featured-button button">
                                    <a href="#projects">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="schedule" class="about-area pt-70">
                <div class="tab_panel tab_panel_3">
					<div class="tab_panel_title">Course Review</div>
                        <div class="review_rating_container">
                            <div class="review_rating">
                                <div class="review_rating_num">4.5</div>
                                <div class="review_rating_stars">
                                    <div class="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div>
                                </div>
                                <div class="review_rating_text">(28 Ratings)</div>
                            </div>
                            <div class="review_rating_bars">
                                <ul>
                                    <li><span>5 Star</span><div class="review_rating_bar"><div style={{width: '95%'}}></div></div></li>
                                    <li><span>4 Star</span><div class="review_rating_bar"><div style={{width: '75%'}}></div></div></li>
                                    <li><span>4 Star</span><div class="review_rating_bar"><div style={{width: '75%'}}></div></div></li>
                                    <li><span>3 Star</span><div class="review_rating_bar"><div style={{width: '35%'}}></div></div></li>
                                    <li><span>2 Star</span><div class="review_rating_bar"><div style={{width: '10%'}}></div></div></li>
                                    <li><span>1 Star</span><div class="review_rating_bar"><div style={{width: '3%'}}></div></div></li>
                                </ul>
                            </div>
                        </div>
									
									
                        <div class="comments_container">
                            <ul class="comments_list">
                                <li>
                                    <div class="comment_item d-flex flex-row align-items-start jutify-content-start">
                                        <div class="comment_image"><div><img src="images/comment_1.jpg" alt=""></img></div></div>
                                        <div class="comment_content">
                                            <div class="comment_title_container d-flex flex-row align-items-center justify-content-start">
                                                <div class="comment_author"><a href="#">Milley Cyrus</a></div>
                                                <div class="comment_rating"><div class="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
                                                <div class="comment_time ml-auto">1 day ago</div>
                                            </div>
                                            <div class="comment_text">
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humour.</p>
                                            </div>
                                            <div class="comment_extras d-flex flex-row align-items-center justify-content-start">
                                                <div class="comment_extra comment_likes"><a href="#"><i class="fa fa-heart" aria-hidden="true"></i><span>15</span></a></div>
                                                <div class="comment_extra comment_reply"><a href="#"><i class="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a></div>
                                            </div>
                                        </div>
                                    </div>
                                        <li>
                                            <div class="comment_item d-flex flex-row align-items-start jutify-content-start">
                                                <div class="comment_image"><div><img src="images/comment_2.jpg" alt=""></img></div></div>
                                                <div class="comment_content">
                                                    <div class="comment_title_container d-flex flex-row align-items-center justify-content-start">
                                                        <div class="comment_author"><a href="#">John Tyler</a></div>
                                                        <div class="comment_rating"><div class="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
                                                        <div class="comment_time ml-auto">1 day ago</div>
                                                    </div>
                                                    <div class="comment_text">
                                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humour.</p>
                                                    </div>
                                                    <div class="comment_extras d-flex flex-row align-items-center justify-content-start">
                                                        <div class="comment_extra comment_likes"><a href="#"><i class="fa fa-heart" aria-hidden="true"></i><span>15</span></a></div>
                                                        <div class="comment_extra comment_reply"><a href="#"><i class="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                </li>
                                <li>
                                    <div class="comment_item d-flex flex-row align-items-start jutify-content-start">
                                        <div class="comment_image"><div><img src="images/comment_3.jpg" alt=""></img></div></div>
                                        <div class="comment_content">
                                            <div class="comment_title_container d-flex flex-row align-items-center justify-content-start">
                                                <div class="comment_author"><a href="#">Milley Cyrus</a></div>
                                                <div class="comment_rating"><div class="rating_r rating_r_4"><i></i><i></i><i></i><i></i><i></i></div></div>
                                                <div class="comment_time ml-auto">1 day ago</div>
                                            </div>
                                            <div class="comment_text">
                                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have alteration in some form, by injected humour.</p>
                                            </div>
                                            <div class="comment_extras d-flex flex-row align-items-center justify-content-start">
                                                <div class="comment_extra comment_likes"><a href="#"><i class="fa fa-heart" aria-hidden="true"></i><span>15</span></a></div>
                                                <div class="comment_extra comment_reply"><a href="#"><i class="fa fa-reply" aria-hidden="true"></i><span>Reply</span></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
            </section>
            <section>
            <div class="col-lg-6">
						<div class="contact_form">
							<div class="contact_info_title">Contact Form</div>
							<form action="#" class="comment_form">
								<div>
									<div class="form_title">Name</div>
									<input type="text" class="comment_input" required="required"></input>
								</div>
								<div>
									<div class="form_title">Email</div>
									<input type="text" class="comment_input" required="required"></input>
								</div>
								<div>
									<div class="form_title">Message</div>
									<textarea class="comment_input comment_textarea" required="required"></textarea>
								</div>
								<div>
									<button type="submit" class="comment_button trans_200">submit now</button>
								</div>
							</form>
						</div>
					</div>
            </section>
        </div>
    </div>
    )
    }
  }
  
export default CourseDetailsTab;