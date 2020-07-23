import React,{Component} from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';
import {getQuotations,sendQuotationToUser} from '../../actions/doctorInfoAction'
import { connect } from 'react-redux';

class Quotations extends Component {
    constructor(props) {
        super(props);
        this.state = { data:undefined,userData:undefined }
    }
    componentDidMount() {
        this.props.getQuotations()
        this.setState({userData:this.props.currentUser})
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.quotations !== this.props.quotations){
            this.setState({data:this.props.quotations})
        }
    }
    onSubmit=(quotations,doctorInfo)=>{
        let newData = {
            quotations,
            doctorInfo,
        }
        this.props.sendQuotationToUser(newData)
    }
    render() { 
        const {data,userData} = this.state
        console.log(this.state)
       
        return ( 
            <div>
                <Row>
                <Col xs="12" lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Quotations List
              </CardHeader>
              <CardBody>
                <Table responsive striped>
                  <thead>
                  <tr>
                    <th>Sr.No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Service</th>
                    <th>Your Fees</th>
                    <th>Status</th>
                  </tr>
                  </thead>
                    {  data?.map((item,index) => {
                        console.log(userData?.doctorInfo?.Specialization === item.selected_service)
                        return (
                        userData?.doctorInfo?.Specialization === item.selected_service &&
                          <tbody>

                            <tr  >
                                <td> {index+1} </td>
                                <td> {item.name} </td>
                                <td> {item.email} </td>
                                <td>{item.selected_service} </td>
                                <td> <input type='text' 
                                style={{border:'1px solid #F2F2F2',backgroundColor:'#F2F2F2',borderBottom:'1px solid black'}} /> </td>
                                <td>
                                <Badge onClick={this.onSubmit(item,userData)} color="success">Submit</Badge>
                                </td>
                            </tr>
                  </tbody>
                        )
                    })}
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
    return {
      quotations : state.doctorReducer.quotations,
      currentUser : state.users.currentUser,

    }
}
export default connect(mapStateToProps,{getQuotations,sendQuotationToUser})(Quotations);