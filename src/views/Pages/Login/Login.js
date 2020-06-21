import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import  {connect} from 'react-redux'
import {loginUser,empty_error} from '../../../actions/authAction'

const log = console.log
class Login extends Component {
    state = {
      email:'',
      password:'',
      loading:false,
    }
  
  onChange= e => this.setState({[e.target.name] : e.target.value})
  loginHandler=e=>{
    e.preventDefault()
    // alert('hello')
    const {email,password}  = this.state
    let newUser = {
      email,password
    }
    this.props.loginUser(newUser,this.props.history)
    this.setState({loading:true})
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.props.error !== prevProps.error){
      this.setState({loading:false})
      this.props.empty_error()
    }
  }
  render() {
    const {email,password}  = this.state
    return (
      this.state.loading === true ? <div className="animated fadeIn pt-1 text-center">Loading...</div> : 
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form onSubmit={this.loginHandler} method='POST' >
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="email" required placeholder="Email" name='email' value={email} autoComplete="username"
                         onChange={this.onChange} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" required placeholder="Pasword" name='password'
                         value={password} autoComplete="username" onChange={this.onChange} />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                        {/* <Link to="/dashboard"> */}
                          <Button color="primary" type='submit' className="px-4">Login</Button>
                        {/* </Link> */}
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  log(state.users)
  return {
    currentUser : state.users.currentUser,
    is_admin : state.users.is_admin,
    loading : state.users.loading,
    error : state.auth.error,
  }
}
export default connect(mapStateToProps,{loginUser,empty_error})(Login);
