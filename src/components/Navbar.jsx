import React from "react";

const Navbar = () => {
  return (
    <div className="main-navigation">
      <div className="container">
        <a
          href="book-service.html"
          className="btn btn-primary btn-sm pull-right quote-head-btn"
        >
          Book a service
        </a>
        <ul className="pull-right social-icons">
          <li className="facebook">
            <a href="https://www.facebook.com/toplinepaving21">
              <i className="fa fa-facebook-f"></i>
            </a>
          </li>
          <li className="twitter">
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li className="youtube">
            <a href="#">
              <i className="fa fa-youtube"></i>
            </a>
          </li>
          <li className="instagram">
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
        <a href="#" id="menu-toggle">
          Menu
        </a>
        <nav role="menu">
          <ul className="dd-menu sf-menu">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="about.html">About</a>
              <ul className="sub-menu">
                <li>
                  <a href="book-service.html">Book a Service</a>
                </li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="faqs.html">FAQs</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="services.html">Services</a>
              <ul className="sub-menu">
                <li>
                  <a href="service-single.html">Fall and Spring Cleanup</a>
                </li>
                <li>
                  <a href="service-single.html">Lawn Care</a>
                </li>
                <li>
                  <a href="service-single.html">Landscape Design</a>
                </li>
                <li>
                  <a href="service-single.html">Plants, Flowers, Soils</a>
                </li>
                <li>
                  <a href="service-single.html">Tree, Shrub, Turf</a>
                </li>
                <li>
                  <a href="service-single.html">Gutter Cleaning</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="projects-grid.html">Projects</a>
              <ul className="sub-menu">
                <li>
                  <a href="projects-grid.html">Projects Grid</a>
                </li>
                <li>
                  <a href="projects-list.html">Projects List</a>
                </li>
                <li>
                  <a href="projects-gallery.html">Projects Gallery</a>
                </li>
                <li>
                  <a href="single-project.html">Single Project</a>
                </li>
              </ul>
            </li>
            <li className="megamenu">
              <a href="javascrip:void(0)">Mega Menu</a>
              <ul className="dropdown">
                <li>
                  <div className="megamenu-container container">
                    <div className="row">
                      <div className="col-md-3 megamenu-col">
                        <span className="megamenu-sub-title">Features</span>
                        <ul className="sub-menu">
                          <li>
                            <a href="shortcodes.html">Shortcodes</a>
                          </li>
                          <li>
                            <a href="typography.html">Typography</a>
                          </li>
                          <li>
                            <a href="services.html">Services</a>
                          </li>
                          <li>
                            <a href="projects-grid.html">Projects</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4 megamenu-col">
                        <span className="megamenu-sub-title">Latest news</span>
                        <div className="widget recent_posts">
                          <ul>
                            <li>
                              <a href="single-post.html" className="media-box">
                                <img
                                  src="http://placehold.it/800x533&amp;text=IMAGE+PLACEHOLDER"
                                  alt=""
                                />
                              </a>
                              <h5>
                                <a href="single-post.html">
                                  How to make your lawn &amp; Landscape look at
                                  its's best
                                </a>
                              </h5>
                              <span className="meta-data grid-item-meta">
                                Posted on 05 April, 2016
                              </span>
                            </li>
                            <li>
                              <a href="single-post.html" className="media-box">
                                <img
                                  src="http://placehold.it/600x400&amp;text=IMAGE+PLACEHOLDER"
                                  alt=""
                                />
                              </a>
                              <h5>
                                <a href="single-post.html">
                                  Time to stay with your family using our
                                  services
                                </a>
                              </h5>
                              <span className="meta-data grid-item-meta">
                                Posted on 04 April, 2016
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-5 megamenu-col">
                        <span className="megamenu-sub-title">Our Services</span>
                        <img
                          src="http://placehold.it/900x400&amp;text=IMAGE+PLACEHOLDER"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <a href="blog-list.html">Blog</a>
              <ul className="sub-menu">
                <li>
                  <a href="blog-list.html">Blog List</a>
                </li>
                <li>
                  <a href="blog-grid.html">Blog Grid</a>
                </li>
                <li>
                  <a href="single-post.html">Single Blog Post</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
