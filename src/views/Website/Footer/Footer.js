import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import logo from '../../../assets/img/brand/logo.png'
import { AppNavbarBrand} from '@coreui/react';


class Footer extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { footer } = this.props;
    return (
        <div className="footers">   
 <footer>
 <Container>
          <Row >
          <Col md="4">
            <div className="footerLogo">
            <AppNavbarBrand
           full={{ src: logo, alt: ' Logo' }}
            />
              <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Suspendisse condimentum porttitor cursumus.</p>
              <ul>
                <li><NavLink to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></NavLink></li>
                <li><NavLink to="#"><i className="fa fa-twitter" aria-hidden="true"></i></NavLink></li>
                <li><NavLink to="#"><i className="fa fa-facebook" aria-hidden="true"></i></NavLink></li>
              </ul>
            </div>
          </Col>
          <Col md="3">
            <div className="footerlinks">
              <h5> DISCOVER</h5>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/">Request for Quotation</NavLink></li>
                {/* <li><NavLink to="/">Blog</NavLink></li> */}
              </ul>
            </div>
          </Col>
          {/* <Col md="2">
            <div className="footerlinks">
              <h5> FEATURES</h5>
              <ul>
                 <li><NavLink to="/">Brand design</NavLink></li>
                <li><NavLink to="/">Website</NavLink></li>
                <li><NavLink to="/">Mobile</NavLink></li>
                <li><NavLink to="/">SEO</NavLink></li>
                <li><NavLink to="/">CRM</NavLink></li>
              </ul>
            </div>
          </Col> */}
          <Col md="3">
            <div className="footerlinks">
              <h5>SUPPORT</h5>
              <ul>
                <li><NavLink to="/">Help Desk</NavLink></li>
                <li><NavLink to="/">Documentation</NavLink></li>
                <li><NavLink to="/">Contact Us</NavLink></li>
              </ul>
            </div>
          </Col>
           </Row >
          </Container>
    </footer>
    <div className="copyrightSec">
          <Container>
    <Row >
    <Col md="12">
            <p><i className="fa fa-copyright" aria-hidden="true"></i> 2020 SMARTCARE SOLUTIONS</p>
          </Col>
    </Row >
    </Container>
    </div>
        </div>
    );
  }
}

export default Footer;
