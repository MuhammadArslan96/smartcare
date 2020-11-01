import React,{Component} from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {getAllOrders} from '../../actions/storeAction'
import { connect } from 'react-redux';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = { data:undefined,userData:undefined }
    }
    componentDidMount() {
        this.props.getAllOrders()
        this.setState({userData:this.props.currentUser})
    }re
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.orders !== this.props.orders){
            this.setState({data:this.props.orders})
        }
    }
    // onSubmit=(quotations,doctorInfo)=>{
    //     let newData = {
    //         quotations,
    //         doctorInfo,
    //     }
    //     this.props.sendQuotationToUser(newData)
    // }
    render() { 
        const {data,userData} = this.state
        console.log(this.state)
       let filter = data?.filter(elem => {
        return true
       })
        return ( 
            <div>
                <Row>
                <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Orders List
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                  <tr>
                    <th>Sr.No</th>
                    {/* <th>Username</th> */}
                    <th>user</th>
                    <th>Medicine</th>
                    <th>Formula</th>
                    {/* <th></th> */}
                    {/* <th>Status</th> */}
                  </tr>
                  </thead>
                    {  data?.map((item,index) => {
                      return(
                          <tbody>

                            <tr  >
                                <td> {index+1} </td>
                                <td> {item.email} </td>
                                <td> {item.order?.name} </td>
                                <td> {item.order?.formula} </td>
                                {/* <td>
                                <Badge onClick={this.onSubmit()} color="success">Submit</Badge>
                                </td> */}
                            </tr>
                  </tbody>
                      )
                    })
                    }
                </Table>
               
              </CardBody>
            </Card>
          </Col>
      
                </Row>
            </div>
         );
    }
}
 
const mapStateToProps = state => {
  console.log(state.storeReducer.orders)  
  return {
      orders : state.storeReducer.orders,
      currentUser : state.users.currentUser,

    }
}
export default connect(mapStateToProps,{getAllOrders})(Orders);