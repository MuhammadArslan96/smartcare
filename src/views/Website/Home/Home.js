import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { Col, Container, Form, Input, Row } from 'reactstrap';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {quotationrequest} from '../../../actions/userAction'
import { connect } from 'react-redux';
import { SMTPClient } from 'emailjs';

class Home extends Component {

  state = {
    name: '',
    email: '',
    user_number: '',
    selected_service: '',
    message: '',
  }
  onChange = e => this.setState({[e.target.name]: e.target.value})

  onSubmit=(e) => {
    // let priceList =[]
    // function calculate(n,price,piece){
    // let pieceSize = piece[0]
    // let packSize = piece[1]
    // let boxSize = piece[2]
    // let bottlePrice= price;
    // let packPrice = bottlePrice*11;
    // // let box = 950;
    // let boxPrice = 24*packSize
    // boxSize>=1 && pieceSize >=1 && packSize>=1 ?
    //   priceList.push({piece:{name:"Bottle 1", quantity:pieceSize,bottlePrice},
    //                   pack:{name:"11 pack", quantity:packSize,packPrice},
    //                   box:{name:"Big box", quantity:boxSize,boxPrice}}):
    //  pieceSize >=1 && packSize>=1 ?
    //   priceList.push({piece:{name:"Bottle 1", quantity:pieceSize,bottlePrice},
    //   pack:{name:"11 pack", quantity:packSize,packPrice},}):
    //   pieceSize >=1  ?
    //   priceList.push({piece:{name:"Bottle 1", quantity:pieceSize,bottlePrice}})
    //   : alert("enter atleast piece")

    //   // box:{name:"Big box", quantity:264,price}})     
    //   this.makeJson(priceList)
    //   console.log(n,price,piece)
    // }
    // calculate(10,40,[5,10,1])
    // function makeJson(priceList){
    // let parseddata = {PriceList:priceList};
    // let myJson =  JSON.stringify(parseddata) ;
    // console.log(myJson);}
    

    const  {name,email,user_number,selected_service,message}= this.state
    e.preventDefault();

    let newData = {
      name,email,user_number,selected_service,message
    }
    this.props.quotationrequest(newData)
    console.log(newData)
    setTimeout(() => {
     this.setState({
      name: '',
      email: '',
      user_number: '',
      selected_service: '',
      message: '',
     })
    }, 100);
    
  }
  render() {
    const  {name,email,user_number,selected_service,message}= this.state;

    return (
      <div className="homePage">
         <Header />
         <div className="homeBanner">
                        <img src="https://cdn.cosmicjs.com/77b3c3c0-52ca-11e6-a069-734be6eb1ef6-shutterstock_218199787.png" className="img-fluid" alt="admin@bootstrapmaster.com" />
                      <div className="bannerText">
                        <div className="d-flex flex-column bd-highlight mb-3" >
                {/* <h1 style={{color:'white'}}>Appointment</h1> */}
                {/* <p >It’s not just about Ideas. It’s about making ideas happen.</p>
                <h6>Logo , Stationary, Custom Graphic Designs &amp; Marketing Collaterals</h6> */}
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <div  className="bannerbtn"  >
                  <NavLink style={{backgroundColor:'#C48DC2'}} to="/appointments">Go To Appointments</NavLink>
                </div>
                </div>
              </div>
       </div>
       <div>
         <Row>

         </Row>
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
              <h4>Find Nearest Doctor</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="../../assets/img/clean-code.png" className="img-responsive wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
              <h4>Find Nearest Medical Store</h4>
              <p>Nulla varius consequat magna, id molestie ipsum volutpat quis. A true story, that never been told!.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="../../assets/img/fast-performance.png" className="img-responsive wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
              <h4>E-Appointment</h4>
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
              <NavLink to="tel:123-456-7890">0307-0084689</NavLink>
              <h6>Mail Us Email</h6>
              <NavLink to="mailto:mail@example.com">appscorrer@gmail.com</NavLink>
            </div>
      </Col>
          <Col md="6" xs="12">
          <div className="contactForm">
          <Col md="12">
                <h4>REQUEST FOR Quotation</h4>
              </Col>
              <Form  >
              <Col md="12">
                  <div className="form-group">
                    <Input required onChange={this.onChange} value={name} name='name'
                     className="effect-3" type="text" placeholder="Full Name" />
                  </div>
                </Col>
                <Col md="12">
                <div className="form-group">
                    <Input type='email' onChange={this.onChange} value={email} name='email' required
                     className="effect-3" type="text" placeholder="Your Email" />
                  </div>
                </Col>
                <Col md="12">
                <div className="form-group">
                  <Input type='number'
                   onChange={this.onChange} value={user_number} name='user_number' required
                    className="effect-3" type="text" placeholder="Your Phone Number" />
                 </div>
                </Col>
                <Col md="12">
                <div className="form-group">
                    <select className="effect-3" required
                     onChange={this.onChange} value={selected_service} name='selected_service'>
                      <option>Select a service</option>
                      <option>Eye Specialist</option>
                      <option>ENT Specialist</option>
                      <option>Heart Specialist</option>
                      <option>General Physician</option>
                    </select>
                  </div>
                </Col>
                <Col md="12">
                <div className="form-group">
                    <textarea onChange={this.onChange} value={message} name='message'
                     className="effect-3" placeholder="Message"></textarea>
                  </div>
                </Col>
                 <div className="row justify-content-md-center">
                 <Col md="12">
                     <div className="conatctBtn bannerbtn">
                      <NavLink onClick={this.onSubmit} to="#">SUBMIT</NavLink>
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

export default connect(null,{quotationrequest})(Home);
