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
            data:[],
            currentDoctor:undefined,
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

handleView=(item,index)=>{
    this.setState({
        currentDoctor:item
    })
}
    render() { 
        const {data} = this.state;
        console.log(this.props.doctorInfo,this.state)      

        return !this.props.doctorInfo ? <p>loding</p> : ( 
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
                {this.props.doctorInfo.length&&this.props.doctorInfo.map((item,index) => {
                    console.log(item)
                    return (                    
                        <tr key={item.Specialization}>
                            {console.log(item)}
                        <td>Dr,Alvis Peter</td>
                        <td>{item?.experience} </td>
                        <td>{item?.Specialization}</td>

                        <td>
                        {item.schedule?.map((sch_item,sch_index) => {
                            return (
                                <div>
                               <tr>
                                   <th> {sch_item.selectDay} </th>
                                   {/* <th>Saturday</th>
                                   <th>Sunday</th> */}
                               </tr>
                               <tr>
                                   <td style={{margin:'100px'}} >
                                       {sch_item.timeFrom}{sch_item.apmFrom}-{sch_item.timeTo}{sch_item.apmTo}
                                       </td>
                                  
                               </tr>
                            </div>
                               
                            )
                        })}
                        </td>
                        <td style={{cursor:'pointer'}} onClick={() => this.handleView(item,index)} >
                          <Badge color="success">View</Badge>
                        </td>
                      </tr>
                           
                        )
                })}
                
                 
                 </tbody>
                </Table>
               {/* {console.log(this.state.currentDoctor)} */}
              </CardBody>
            </Card>
                     </Col>
                        <Col  xs='12' lg='4' md='4'>
                         <div style={ !this.state.currentDoctor ? {display:'none'} :
                          {backgroundColor:'white',borderRadius:'10px',padding:'1vw'}} >
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
                                       {console.log(this.state.currentDoctor)}
                                               
                                            <ul  >
                                       {this.state.currentDoctor&&
                                       this.state.currentDoctor?.schedule.map((item,index) => {
                                           return (
                                                <li style={{backgroundColor:'#C48DC2',borderRadius:'10px',
                                                color:'white', padding:'0.3vw 0.5vw', marginRight:'2vw',display:'inline-block'}} >
                                                    {item.timeFrom}{item.apmFrom}-{item.timeTo}{item.apmTo}
                                                    </li>
                                                // <li style={{backgroundColor:'#C48DC2',borderRadius:'10px',display:'inline-block',
                                                // color:'white', padding:'0.3vw 0.5vw', marginRight:'2vw'}} >6pm-8pm</li>
                                                // <li style={{backgroundColor:'#C48DC2',borderRadius:'10px',display:'inline-block',
                                                // color:'white', padding:'0.3vw 0.5vw', marginRight:'2vw'}} >4pm-5pm</li>
                                                
                                                )
                                             })}
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