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
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(success, error);
    function success(position) {
        console.log(position.coords.latitude)
        console.log(position.coords.longitude)
    }
    function error(err) {
      console.log(err)
  }

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
                    <p>It was never so easy to buy online medicines in Pakistan. SmartCare didn’t just provide this service for your ease but is also making sure that authentic and reliable medicines reach at your doorstep with complete safety. With this amazing service there is no need to visit any pharmacy physically because you can explore our digital online pharmacy with medicine pricing and details to save your time and hassle. SmartCare provides the Best online medicines delivery service in Pakistan and is considered the best online medical store.</p>
                    <p>Smart Care cloud based online appointment, booking and scheduling solution that is simple, easy and convenient for you and your customers.
Ensure you are connected with your customers even before they arrive. With Smart Care appointment solution, your customers can connect from anywhere, from booking to check-in to rescheduling and canceling an appointment. This helps you to minimize customer wait times and giving top quality service to your customers</p>
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
              <p>There are several features of buying medicines online and taking online appointment that will help buyer and seller both. These are listed below:
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col md="4">
        <div className="portfolioBox">
              <img src="../../assets/img/high-customizable.png" className="img-responsive" alt="Portfolio Brand" />
              <h4>Find Nearest Doctor</h4>
              <p>Choose the speciality you want to book your online doctor appointment with SmartCare will give you the easiest experience of appointment booking. While booking appointment you can read reviews of doctors in Karachi. All the reviews displayed on the doctors profiles are based on real experiences of patients.
.</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="../../assets/img/clean-code.png" className="img-responsive wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
              <h4>Find Nearest Medical Store</h4>
              <p>Find medicine store in karachi, Local List. Providing useful information, the address, phone numbers, web addresses and email addresses of user.
</p>
            </div>
          </Col>
          <Col md="4">
          <div className="portfolioBox">
              <img src="../../assets/img/fast-performance.png" className="img-responsive wow fadeInDown" data-wow-delay="0.2s" alt="Portfolio Brand" />
              <h4>E-Appointment</h4>
              <p>E-Appointment services could be considered as simple solutions providing significant benefits for improving the accessibility and efficiency for delivering public.
.</p>
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
                    <p>Patients for various medical treatments. Simply view various daily, weekly and monthly patient schedules. Through Email appointment schedule reminders. Medical practices can make appointment scheduling easier with online scheduling services. Online scheduling helps to manage doctor’s appointment schedules, patient, records and more..</p>
                    <p>
 By using SmartCare as your appointment manager you automatically keep track of your  patients in your database. You can add their medical record, personal details, contact  information and send notifications. When patients make their first appointment with you, online or manually, their data is automatically saved into your database. Import you existing database into SmartCare and you will have all information in one management tool.
.</p>
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
              <p>The easiest and fastest way to get in touch with SmartCare. Do not hesitate to send a message with your queries.
</p>
              <h5>Call Us</h5>
              <NavLink to="tel:123-456-7890">+92 3327375456</NavLink><br/>
              <NavLink to="tel:123-456-7890">+92 3042394276</NavLink>
              <h6>Mail Us Email</h6>
              <NavLink to="mailto:smartcare2k17@gmail.com"> smartcare2k17@gmail.com</NavLink>
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
