import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table,TabContent, TabPane,Nav,NavItem,NavLink } from 'reactstrap';
import {getUsers,approveDoctor} from '../../actions/userAction'
import usersData from './UsersData'
import {connect} from 'react-redux'
import { ToastsStore } from 'react-toasts';

function UserRow(props) {
  const users = props.users
  // for (let index = 0; index < props.users?.user.length; index++) {
  //   const element = props.users?.user[index];
  //       log(element)

  // }
  log(props)
  // props.users?.user.filter(element => {
  //   log(element)
  // });
  const user = props.user
  const userLink = `/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={users.id}>
      <th scope="row"><Link to={userLink}>{user.id} </Link></th>
      <td><Link to={userLink}>{users?.name}</Link></td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td><Link to={userLink}><Badge color={getBadge(user.status)}>{user.status}</Badge></Link></td>
    </tr>
  )
}
const log = console.log
class Users extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: new Array(4).fill('1'),
    };
  }
  toggle(tabPane, tab) {
    const newArray = this.state.activeTab.slice()
    newArray[tabPane] = tab
    this.setState({
      activeTab: newArray,
    });
  }
 
  tabPane() {
    return (
      <>
        <TabPane tabId="1">
        <Row>
          <Col >
            <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader> */}
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      {/* <th scope="col">Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.users?.user.length===0 ? "Loading...": this.props.users?.user.map((item,index) => {
                      return (
                        item.isDoctor===false ?
                        <tr key={index} >
                        <td> <Link to={`/users/${item.email}`} > {index} </Link>  </td>
                        <td>  {item.name} </td>
                        <td>  {item.email} </td>
                        <td>  {item.isDoctor===true ? 'Doctor' : 'End-user'} </td>
                        {/* <td  > <Badge color='danger'> Delete User </Badge></td> */}
                      </tr>
                      : void 0
                      )
                    })}
                  
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </TabPane>
        <TabPane tabId="2">
        <Row>
          <Col >
            <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader> */}
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.users?.user.length ===0 ? "Loading..." : this.props.users?.user.map((item,index) => {
                      console.log(item.isApproved,this.props.is_approved,item.id)
                      return (
                        item.isDoctor===true ?
                        <tr key={index} >
                        <td> <Link to={`/users/${item.email}`} > {index} </Link>  </td>
                        <td>  {item.name} </td>
                        <td>  {item.email} </td>
                        <td>  {item.isDoctor===true ? 'Doctor' : 'End-user'} </td>
                        <td  > <Badge color={item.isApproved === true || this.props.is_approved === item.id?'success':'warning'}> 
                        {item.isApproved || this.props.is_approved === item.id ?'Approved' : 'Pending'} </Badge></td>
                        <td style={item.isApproved ===false && this.props.is_approved !== true ?{cursor:'pointer'}: void 0}
                         onClick={() => item.isApproved ===false && this.props.is_approved !== true  ?
                           this.props.approveDoctor(item) : void 0 } > <Badge color='danger'> Approve </Badge></td>
                      </tr>
                      : void 0
                      )
                    })}
                  
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
               </TabPane>
        <TabPane tabId="3">
        <Row>
          <Col >
            <Card>
              {/* <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader> */}
               <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.users?.user.length===0 ? "Loading...":this.props.users?.user.map((item,index) => {
                      return (
                        item.isMedical===true ?
                        <tr key={index} >
                        <td> <Link to={`/users/${item.email}`} > {index} </Link>  </td>
                        <td>  {item.name} </td>
                        <td>  {item.email} </td>
                        <td>  {item.isDoctor===true ? 'Doctor' : 'End-user'} </td>
                        <td  > <Badge color={item.isApproved === true || this.props.is_approved === item.id?'success':'warning'}> 
                        {item.isApproved || this.props.is_approved === item.id ?'Approved' : 'Pending'} </Badge></td>
                        <td style={item.isApproved ===false && this.props.is_approved !== true ?{cursor:'pointer'}: void 0}
                         onClick={() => item.isApproved ===false && this.props.is_approved !== true  ?
                           this.props.approveDoctor(item) : void 0 } > <Badge color='danger'> Approve </Badge></td>
                      </tr>
                      : void 0
                      )
                    })}
                  
                  </tbody>
                </Table>
              </CardBody>
            
           
            </Card>
          </Col>
        </Row>
      
               </TabPane>
      </>
    );
  }
  componentDidMount() {
    this.props.getUsers()
    // ToastsStore.success("get al users")
  }

  render() {
    log(this.props.users?.user)
    // this.props.users?.user.filter(element => {
    //     return log(element)
    // });
    const userList = usersData.filter((user) => user.id < 100)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="6" className="mb-4">
            <Nav tabs>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '1'}
                  onClick={() => { this.toggle(0, '1'); }}
                >
                  End-User
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '2'}
                  onClick={() => { this.toggle(0, '2'); }}
                >
                  Doctors
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={this.state.activeTab[0] === '3'}
                  onClick={() => { this.toggle(0, '3'); }}
                >
                  Medical Store
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab[0]}>
              {this.tabPane()}
            </TabContent>
          </Col>
          </Row>
       
      </div>
    )
  }
}

const mapStateToProps = state => {
  log(state.users)
  return {
    users : state.users,
    is_approved : state.users.is_approved
  }
}
export default connect(mapStateToProps,{getUsers,approveDoctor})(Users);
