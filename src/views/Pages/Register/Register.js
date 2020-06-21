import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Toast,Label,FormGroup } from 'reactstrap';
import {registerUser, loginWithFb,loginWithGmail,empty_error} from '../../../actions/authAction'
import { connect } from 'react-redux';
import { ToastsStore } from 'react-toasts';
const log = console.log
class Register extends Component {

  constructor(){
    super();
    this.state = {
      name:'',
      email:'',
      password:'',
      repeat_password:'',
      isDoctor:false,
      loading:false,
    }
  }
  onChange= e => this.setState({[e.target.name] : e.target.value})
  onSubmit=e=> {
    e.preventDefault();
    const {name,password,email,repeat_password,isDoctor} = this.state
    if(password !== repeat_password){
      ToastsStore.error("Repeat password is incorrect")
      return false
    }else{
      try{
    let newUser = {
      name,password,email,repeat_password,isDoctor
    }
    this.props.registerUser(newUser,this.props.history)
  }
    catch(e){
      log(e.message)
    }
    finally{
      this.setState({loading:true})
    }
  }
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.props.error !== prevProps.error){
      this.setState({loading:false})
      this.props.empty_error()
    }
  }
  render() {
    const {name,password,email,repeat_password,isDoctor,loading} = this.state
    return (
      this.state.loading === true ? <div className="animated fadeIn pt-1 text-center">Loading...</div> : 
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={this.onSubmit} method='POST' >
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" required name='name' onChange={this.onChange} value={name} placeholder="Username" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="email" required name='email' onChange={this.onChange} value={email}  placeholder="Email" autoComplete="email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" required name='password' onChange={this.onChange} value={password}  placeholder="Password" autoComplete="new-password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" required name='repeat_password' onChange={this.onChange} value={repeat_password}  placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup>
                    <FormGroup check disabled style={{marginBottom:'1vw'}} >
                      <Label check style={{cursor:'pointer'}} >
                        <Input type="checkbox" name="isDoctor" onChange={() => this.setState({isDoctor:!isDoctor})}  value={isDoctor} />{' '}
                       Register as Doctor
                      </Label>
                    </FormGroup>
                    <Button color="success" type='submit' block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button  type='button' onClick={() => {
                        try{ this.props.loginWithFb(this.props.history) }
                        catch(e) {console.log(e)}
                        }} className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button  onClick={() => {
                        try{ this.props.loginWithGmail(this.props.history) }
                        catch(e) {console.log(e)}
                        }} type='button' className="btn-gmail mb-1" style={{backgroundColor:'#CF3728',color:'white'}} block><span>Gmail</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
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
    loading : state.users.loading,
    error : state.auth.error,
  }
}

export default connect(mapStateToProps,{registerUser ,loginWithFb,loginWithGmail,empty_error})(Register);
