import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'
import { connect } from 'react-redux';

const log = console.log
class User extends Component {

  render() {

    const user = this.props.users?.user.find( (user,index) => user.email === this.props.match.params.id)
    const userDetails = user ? Object.entries(user) : [['id', (<span><i className="text-muted icon-ban"></i> Not found</span>)]]
    log(userDetails,user,this.props.users.user,this.props .users?.user[2]?.email===this.props.match.params.id)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>User id: {this.props.match.params.id}</strong>
              </CardHeader>
              <CardBody>
                {/* <h1>hello user</h1> */}
                  <Table responsive striped hover>
                    <tbody>
                      {
                        userDetails.map(([key, value]) => {
                          log(key,value)
                          return (
                            key!=='isDoctor' && key!=='isApproved' && key!=='password'?
                            <tr key={key}>
                              <td>{`${key}:`}</td>
                              <td><strong>{value}</strong></td>
                            </tr> 
                            :void 0
                          )
                        })
                      }
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
const mapStateToProps = state => {
  log(state.users?.user[2]?.email)
  return {
    users : state.users
  }
}
export default connect(mapStateToProps)(User);
