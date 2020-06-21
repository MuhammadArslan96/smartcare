import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { Col, Container, Row, Form } from 'reactstrap';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


class About extends Component {
  render() {
    return (
      <div className="contactPage">
         <Header />
         <div className="homeBanner">
                        <img src="https://www.pngkit.com/png/full/948-9481957_services-banner-contact-us.png" className="img-fluid" alt="admin@bootstrapmaster.com" />
                      <div className="bannerText">
                        {/* <div className="d-flex flex-column bd-highlight mb-3">
                <h1>Contact US</h1>
                </div> */}
              </div>
       </div>
       <div className="aboutSec">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
            <div className="getToch">
              <h2>Get In Touch</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                 tempor incididunt ut labore et dolore magna aliqua. </p>
                 <Form>
                 <Row >
                  <Col md="6">
                     <input type="text" name="Name" placeholder="Name" value="" />
                   </Col>
                   <Col md="6">
                     <input type="text" name="Name" placeholder="Email" value="" />
                   </Col>
                   <Col md="6">
                     <input type="text" name="Name" placeholder="Phone" value="" />
                   </Col>
                   <Col md="6">
                     <input type="text" name="Name" placeholder="Name" value="" />
                   </Col>
                   <Col md="12">
                     <textarea type="text" name="Name" placeholder="Message"></textarea>
                   </Col>
                   <Col md="12">
                     <div className="bannerbtn">
                           <NavLink to="#" type="submit">Submit</NavLink>
                     </div>
                   </Col>
                 </Row>
               </Form>
            </div>
            </Col>
            <Col md="6">
            <div className="aboutpara ">
                <img src="https://www.ydesignservices.com/wp-content/uploads/2016/07/Googlemap-600x551.jpg" className="img-fluid" alt="about img" />
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
      <Footer />
      </div>
    );
  }
}

export default About;
