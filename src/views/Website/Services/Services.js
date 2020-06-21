import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


class About extends Component {
  render() {
    return (
      <div className="servicePage">
         <Header />
         <div className="homeBanner">
                        <img src="https://doctorshospital.com.pk/wp-content/uploads/2015/12/Medical-Banner.jpg" className="img-fluid" alt="admin@bootstrapmaster.com" />
                      <div className="bannerText">
                        <div className="d-flex flex-column bd-highlight mb-3">
                <h1>ABOUT US</h1>
                </div>
              </div>
       </div>
     
 <div className="portfolioSec">
    <Container>
    <Row className="justify-content-md-center">
          <Col md="12">
          <div className="portfolioHeading">
              <h4>Our Services</h4>
              <p>Proin nec sem eros. Sed a elit sapien. Morbi hendrerit, turpis id mollis varius,
                mauris enim tempor elit, et mollis purus elit nec velit.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col md="4">
        <div className="portfolioBox">
              <img src="../../assets/img/high-customizable.png" class="img-responsive" alt="Portfolio Brand" />
              <h4>Highly Customizable</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="../../assets/img/clean-code.png" class="img-responsive wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
              <h4>Clean Code</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="../../assets/img/fast-performance.png" class="img-responsive wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
              <h4>Fast Performance</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
        <div className="portfolioBox">
              <img src="../../assets/img/high-customizable.png" class="img-responsive" alt="Portfolio Brand" />
              <h4>Highly Customizable</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="../../assets/img/clean-code.png" class="img-responsive wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
              <h4>Clean Code</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="../../assets/img/fast-performance.png" class="img-responsive wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
              <h4>Fast Performance</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
        </Row>
        </Container>
    </div>
    <div className="aboutSec">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
            <div className="aboutpara ">
                    <p>Duis luctus ipsum velit, vitae malesuada arcu hendrerit ac. Sed finibus finibus efficitur. Morbi odio nibh, viverra non lacus non, luctus sodales justo. Donec erat libero, pulvinar venenatis dictum sed, commodo at lacus. Duis mollis gravida lacus, vitae eleifend magna pretium eget. Fusce tristique sem pretium libero bibendum porttitor. </p>
                    <p>Proin a interdum massa. Duis euismod, leo eget porttitor sodales, arcu lectus ullamcorper magna, at interdum orci leo eu dolor. Pellentesque et orci sed erat convallis blandit ut vitae diam. Morbi eget libero et leo euismod imperdiet. Proin in pellentesque tortor, accumsan volutpat purus.</p>
                    <div className="aboutbtn">
                      <NavLink to="/about">Learn More</NavLink>
                    </div>
                  </div>
            </Col>
            <Col md="6">
            <div className="aboutpara ">
                <img src="../../assets/img/aboutimg.png" className="img-fluid" alt="about img" />
                  </div>
            </Col>
          </Row>
        </Container>
        </div>
      <Footer />
      </div>
    );
  }
}

export default About;
