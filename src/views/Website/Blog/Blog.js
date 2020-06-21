import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'


class About extends Component {
  render() {
    return (
      <div className="blogPage">
         <Header />
         <div className="homeBanner">
                        <img src="https://doctorshospital.com.pk/wp-content/uploads/2015/12/Medical-Banner.jpg" className="img-fluid" alt="admin@bootstrapmaster.com" />
                      <div className="bannerText">
                        <div className="d-flex flex-column bd-highlight mb-3">
                <h1>Blogs</h1>
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
              <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="img-fluid" alt="Portfolio Brand" />
              <h4>Highly Customizable</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="img-fluid wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
              <h4>Clean Code</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="img-fluid wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
              <h4>Fast Performance</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
        <div className="portfolioBox">
              <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="img-fluid" alt="Portfolio Brand" />
              <h4>Highly Customizable</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="img-fluid wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
              <h4>Clean Code</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="img-fluid wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
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
