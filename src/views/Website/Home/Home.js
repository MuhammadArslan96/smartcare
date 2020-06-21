import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { Col, Container, Form, Input, Row } from 'reactstrap';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
class Home extends Component {
  render() {
    return (
      <div className="homePage">
         <Header />
         <div className="homeBanner">
                        <img src="https://cdn.cosmicjs.com/77b3c3c0-52ca-11e6-a069-734be6eb1ef6-shutterstock_218199787.png" className="img-fluid" alt="admin@bootstrapmaster.com" />
                      <div className="bannerText">
                        <div className="d-flex flex-column bd-highlight mb-3">
                <h1>Brand design</h1>
                <p >It’s not just about Ideas. It’s about making ideas happen.</p>
                <h6>Logo , Stationary, Custom Graphic Designs &amp; Marketing Collaterals</h6>
                <div  className="bannerbtn">
                  <NavLink to="/contact">READ MORE</NavLink>
                </div>
                </div>
              </div>
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
            <div className="aboutimg">
                <img src="../../assets/img/aboutimg.png" className="img-fluid" alt="about img" />
                  </div>
            </Col>
          </Row>
        </Container>
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
              <img src="../../assets/img/high-customizable.png" className="img-responsive" alt="Portfolio Brand" />
              <h4>Highly Customizable</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="../../assets/img/clean-code.png" className="img-responsive wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
              <h4>Clean Code</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="../../assets/img/fast-performance.png" className="img-responsive wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
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
                <img src="https://www.careinvest-online.net/var/ezflow_site/storage/images/care-invest/home/branchennews/unternehmen/bock-bringt-intelligenz-ins-pflegebett/19640086-1-ger-DE/bock-bringt-Intelligenz-ins-Pflegebett.jpg" className="img-fluid" alt="about img" />
                  </div>
            </Col>
            <Col md="6">
            <div className="aboutpara ">
                    <p>Duis luctus ipsum velit, vitae malesuada arcu hendrerit ac. Sed finibus finibus efficitur. Morbi odio nibh, viverra non lacus non, luctus sodales justo. Donec erat libero, pulvinar venenatis dictum sed, commodo at lacus.</p>
                    <p>Proin a interdum massa. Duis euismod, leo eget porttitor sodales, arcu lectus ullamcorper magna, at interdum orci leo eu dolor. Pellentesque et orci sed erat convallis blandit ut vitae diam. Morbi eget libero et leo euismod imperdiet.</p>
                  </div>
            </Col>
          </Row>
        </Container>
        </div>
  <div className="contactSec">
      <Container>
        <Row>
        <Col md="6" xs="12">
        <div className="contactDetail">
              <h4>Contact Us</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper.</p>
              <h5>Call Us</h5>
              <NavLink to="tel:123-456-7890">123-456-7890</NavLink>
              <h6>Mail Us Email</h6>
              <NavLink to="mailto:mail@example.com">mail@example.com</NavLink>
            </div>
      </Col>
          <Col md="6" xs="12">
          <div className="contactForm">
          <Col md="12">
                <h4>REQUEST FOR Quotation</h4>
              </Col>
              <Form>
              <Col md="12">
                  <div className="form-group">
                    <Input className="effect-3" type="text" placeholder="Full Name" />
                  </div>
                </Col>
                <Col md="12">
                <div className="form-group">
                    <Input className="effect-3" type="text" placeholder="Your Email" />
                  </div>
                </Col>
                <Col md="12">
                <div className="form-group">
                  <Input className="effect-3" type="text" placeholder="Your Phone Number" />
                 </div>
                </Col>
                <Col md="12">
                <div className="form-group">
                    <select className="effect-3">
                      <option>Select a Service</option>
                      <option>Select a Service</option>
                      <option>Select a Service</option>
                      <option>Select a Service</option>
                    </select>
                  </div>
                </Col>
                <Col md="12">
                <div className="form-group">
                    <textarea className="effect-3" placeholder="Message"></textarea>
                  </div>
                </Col>
                 <div className="row justify-content-md-center">
                 <Col md="12">
                     <div className="conatctBtn bannerbtn">
                      <NavLink to="#">SUBMIT</NavLink>
                    </div>
                  </Col>
                </div>
              </Form>
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

export default Home;
