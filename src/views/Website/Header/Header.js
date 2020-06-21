import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
import logo from '../../../assets/img/brand/logo.png'
import { AppNavbarBrand, AppSidebarToggler} from '@coreui/react';
import firebase from '../../../config/index'
import {logout} from '../../../actions/authAction'
import {getCurrentUser} from '../../../actions/userAction'
import { connect } from 'react-redux';

const log = console.log
class Header extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(){
    super();
    this.state= {
      isUser:false
    }
  }
  componentWillMount() {
    // this.setState({isUser:true})
    this.props.getCurrentUser();

    firebase.auth().onAuthStateChanged( (res) => {
      var user = firebase.auth().currentUser;
      if(user !== null){
        log(user)
        this.setState({isUser:true}) 
      }else{
        this.setState({isUser:false}) 
        log('!user')
      }
    })
        
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.auth !== prevProps.auth){
      log(this.props.auth)
      if(this.props.auth.user === 'logout'){
        this.setState({isUser:false}) 

      }
    }
  }
  render() {
    const { nav } = this.props;
    const { isUser } = this.state;
    log(this.state.isUser)
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
            <AppNavbarBrand
          full={{ src: logo, alt: ' Logo' }}
        />
 <AppSidebarToggler display="xs" />
  <div className="collapse navbar-collapse custom-nav" id="navbarSupportedContent">
    <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/dashboard">Blog</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <li>                    
                      {
                        isUser===false?
                        <Link to="/login">
                          <Button color="primary" className="px-4">Login</Button>
                        </Link>     :
                          <Button color="primary" className="px-4" onClick={() => this.props.logout() } >Logout</Button>

                      }
                   </li>


                    </ul>
                    </div>
            </nav>
        </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.auth.isAuthenticated)
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps,{logout,getCurrentUser})(Header);
