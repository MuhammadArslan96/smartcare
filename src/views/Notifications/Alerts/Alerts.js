import React, { Component } from 'react';
import { Alert, Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

class Alerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className="animated fadeIn">
        <h1>notifi</h1>
        <Row>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>Doctor</strong>
                <div className="card-header-actions">
                  <a href="https://reactstrap.github.io/components/alerts/" rel="noreferrer noopener" target="_blank" className="card-header-action">
                    <small className="text-muted">docs</small>
                  </a>
                </div>
              </CardHeader>
              <CardBody>
              <Alert color="primary">
                  There are not any notifications yet
                </Alert>
              
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" md="6">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i><strong>End-User</strong>
                {/* <small> use <code>.alert-link</code> to provide links</small> */}
              </CardHeader>
              <CardBody>
                <Alert color="primary">
                  There are not any notifications yet
                </Alert>
               
              </CardBody>
            </Card>
          </Col>
        </Row>
       
      </div>
    );
  }
}

export default Alerts;
