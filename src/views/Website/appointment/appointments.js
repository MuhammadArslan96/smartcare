import React,{Component} from 'react';
import Header from '../Header/Header';
import { Row, Col,CardBody,Table,Badge,Card,CardHeader, Button } from 'reactstrap';
import {getAllDoctorInfo} from '../../../actions/doctorInfoAction'
import { connect } from 'react-redux';
// import Header

class Appointments extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:undefined
         }
    }

componentDidMount() {
    this.props.getAllDoctorInfo()
}
componentDidUpdate(prevProps, prevState) {
    if(this.props.doctorInfo !== prevProps.doctorInfo){
        this.setState({data:this.props.doctorInfo})
    }
}
    render() { 
        const {data} = this.state;
        console.log(data)
        return ( 
            <div>
                <Header/>
                <div style={{padding:'3vw 3vw'}} >
                    <Row>
                        <Col xs='12' lg='8' md='8' >
                        <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Doctor Details
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Doctor Name</th>
                    <th>No Of Experience</th>
                    <th>Specialization</th>
                    <th>Scedule</th>
                    <th>Action</th>
                  </tr>
                  </thead>
                  <tbody>
                {/* {data&& data.map(item => {
                    return ( */}
                        
                  <tr>
                    <td>Dr,Alvis Peter</td>
                    <td>4</td>
                    <td>Cardiac</td>
                    <td>
                        {/* {item.map(child => {
                            return ( */}
                           <tr>
                               <th>Friday</th>
                               <th>Saturday</th>
                               <th>Sunday</th>
                           </tr>
                           <tr>
                               <td style={{margin:'100px'}} >12pm-2pm</td>
                               <td>6pm-8pm</td>
                               <td>4pm-5pm</td>
                           </tr>

                            {/* )
                        })} */}
                    </td>
                    <td>
                      <Badge color="success">View</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Dr,Ali Hassan</td>
                    <td>7</td>
                    <td>Child Specialist</td>
                    <td>
                        {/* {item.map(child => {
                            return ( */}
                           <tr>
                               {/* <th>Friday</th> */}
                               {/* <th>Saturday</th> */}
                               <th>Sunday</th>
                           </tr>
                           <tr>
                               {/* <td style={{margin:'100px'}} >12pm-2pm</td> */}
                               {/* <td>6pm-8pm</td> */}
                               <td>7pm-12am</td>
                           </tr>

                            {/* )
                        })} */}
                    </td>
                    <td>
                      <Badge color="success">View</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Dr,Farooq</td>
                    <td>11</td>
                    <td>Pathologist</td>
                    <td>
                        {/* {item.map(child => {
                            return ( */}
                           <tr>
                               <th>Friday</th>
                               <th>Saturday</th>
                               <th>Sunday</th>
                               <th>Monday</th>
                           </tr>
                           <tr>
                               <td  >12pm-2pm</td>
                               <td>6pm-8pm</td>
                               <td>4pm-5pm</td>
                               <td>8pm-10pm</td>
                           </tr>

                            {/* )
                        })} */}
                    </td>
                    <td>
                      <Badge color="success">View</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td>Dr,Raveen</td>
                    <td>3</td>
                    <td>Heart Patient</td>
                    <td>
                        {/* {item.map(child => {
                            return ( */}
                           <tr>
                               <th>Tuesday</th>
                               <th>Friday</th>
                               {/* <th>Sunday</th> */}
                           </tr>
                           <tr>
                               {/* <td >12pm-2pm</td> */}
                               <td>6pm-8pm</td>
                               <td>4pm-5pm</td>
                           </tr>

                            {/* )
                        })} */}
                    </td>
                    <td>
                      <Badge color="success">View</Badge>
                    </td>
                  </tr>
                  
                  <tr>
                    <td>Dr,Parvaiz</td>
                    <td>10</td>
                    <td>ENT</td>
                    <td>
                        {/* {item.map(child => {
                            return ( */}
                           <tr>
                               <th>Wednesay</th>
                               <th>Friday</th>
                               <th>Sunday</th>
                           </tr>
                           <tr>
                               <td >1pm-2pm</td>
                               <td>3pm-5pm</td>
                               <td>10am-11am</td>
                           </tr>

                            {/* )
                        })} */}
                    </td>
                    <td>
                      <Badge color="success">View</Badge>
                    </td>
                  </tr>
                  
                  {/* )
                })} */}
                 </tbody>
                </Table>
               
              </CardBody>
            </Card>
                     </Col>
                        <Col xs='12' lg='4' md='4'>
                         <div style={{backgroundColor:'white',borderRadius:'10px',padding:'1vw'}} >
                            <Row>
                                <Col >
                                  <img src={require("./images/doctor.png")} width='90' />
                                   <h5>Dr.Alvis Peter</h5>
                                   
                                   <input placeholder='Name' 
                                   style={{width:'100%',marginTop:'2vw',border:'1px solid #d3d3d3', borderRadius:'5px',paddingLeft:'0.5vw',
                                    maxHeight:'2vw'}}/>

                                    <input placeholder='Email' type='email' 
                                   style={{width:'100%',marginTop:'2vw',border:'1px solid #d3d3d3', borderRadius:'5px',paddingLeft:'0.5vw',
                                    maxHeight:'2vw'}}/>

                                   <textarea placeholder='Write your messgae here' 
                                   style={{width:'100%',marginTop:'2vw',minHeight:'5vw',
                                   border:'1px solid #d3d3d3', borderRadius:'10px',paddingLeft:'0.5vw'}} >
                                   </textarea>

                                   <div style={{marginTop:'3vw'}} >
                                            <ul  >
                                                <li style={{backgroundColor:'#C48DC2',borderRadius:'10px',
                                                color:'white', padding:'0.3vw 0.5vw', marginRight:'2vw',display:'inline-block'}} >
                                                    12pm-2pm</li>
                                                <li style={{backgroundColor:'#C48DC2',borderRadius:'10px',display:'inline-block',
                                                color:'white', padding:'0.3vw 0.5vw', marginRight:'2vw'}} >6pm-8pm</li>
                                                <li style={{backgroundColor:'#C48DC2',borderRadius:'10px',display:'inline-block',
                                                color:'white', padding:'0.3vw 0.5vw', marginRight:'2vw'}} >4pm-5pm</li>
                                                
                                            </ul>
                                   </div>

                                   <div style={{marginTop:'3vw',width:'100%'}}>
                                       <button style={{
                                           backgroundColor:'#C48DC2', border:'1px solid #C48DC2',borderRadius:'10px',
                                           color:'white',width:'90%',padding:'0.5vw',textAlign:'center',marginLeft:'1vw'
                                       }} >Submit</button>
                                   </div>
                                </Col>
                               
                            </Row>
                         </div>
                      </Col>
                    </Row>     
                </div>
           </div>
         );
    }
}
 

const mapStateToProps = state => {
    return {
        doctorInfo : state.doctorReducer.doctor_info,
    }
}
export default connect(mapStateToProps,{getAllDoctorInfo})(Appointments);